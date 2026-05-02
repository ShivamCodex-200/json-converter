'use client';

import React, { useState, useRef } from 'react';

interface ConverterInterfaceProps {
  title: string;
  description: string;
  conversionFn: (json: any, fileName?: string) => string | Blob | Promise<string | Blob>;
  outputExtension: string;
  sampleJson: any;
  mimeType?: string;
}

const ConverterInterface: React.FC<ConverterInterfaceProps> = ({
  title,
  description,
  conversionFn,
  outputExtension,
  sampleJson,
  mimeType = 'text/plain',
}) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [fileName, setFileName] = useState('toolcorners_export');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndConvert = async (value: string) => {
    if (!value.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      setIsConverting(true);
      setError(null);
      const parsed = JSON.parse(value);
      const result = await conversionFn(parsed, fileName);
      
      if (result instanceof Blob) {
        setOutput('[File ready for download]');
      } else {
        setOutput(result as string);
      }
    } catch (err: any) {
      setError(err.message || 'Invalid JSON format');
      setOutput('');
    } finally {
      setIsConverting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    validateAndConvert(val);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInput(content);
      validateAndConvert(content);
      // Set default filename from uploaded file (without extension)
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      setFileName(`${nameWithoutExt}_converted`);
    };
    reader.readAsText(file);
  };

  const handleSampleClick = () => {
    const sampleStr = JSON.stringify(sampleJson, null, 2);
    setInput(sampleStr);
    validateAndConvert(sampleStr);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopy = () => {
    if (!output || output === '[File ready for download]') return;
    navigator.clipboard.writeText(output);
    alert('Copied to clipboard!');
  };

  const handleDownload = async () => {
    if (!input) return;
    
    try {
      const parsed = JSON.parse(input);
      const result = await conversionFn(parsed, fileName);
      
      // If the function handles download internally (like json-as-xlsx), it might return a string message
      if (typeof result === 'string' && result.includes('download triggered')) {
        return;
      }

      const blob = result instanceof Blob ? result : new Blob([result as string], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName || 'converted-file'}.${outputExtension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('Error during download: ' + err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-neutral-300">JSON Input</label>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-xs px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-neutral-400 hover:text-white transition-all flex items-center gap-2"
              >
                <span>📁</span> Upload File
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept=".json,application/json" 
                className="hidden" 
              />
            </div>
            <button 
              onClick={handleSampleClick}
              className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Use Sample JSON
            </button>
          </div>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Paste your JSON here or upload a file..."
            className="input-area flex-grow min-h-[300px]"
          />
          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-xs">
              <span className="font-bold">Error:</span> {error}
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="space-y-4 flex flex-col">
          <div className="flex justify-between items-center h-[24px]">
            <label className="text-sm font-semibold text-neutral-300">Result Output</label>
            {isConverting && <div className="text-xs text-blue-400 animate-pulse">Converting...</div>}
          </div>
          <pre className="output-area flex-grow min-h-[300px]">
            {output || <span className="text-neutral-600">Waiting for input...</span>}
          </pre>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-neutral-500">Download Filename</label>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="Enter filename..."
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 outline-none flex-grow"
                />
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-500 flex items-center">
                  .{outputExtension}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handleCopy}
                disabled={!output || output === '[File ready for download]'}
                className="btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
              >
                Copy
              </button>
              <button 
                onClick={handleDownload}
                disabled={!input || !!error}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
              >
                Download File
              </button>
              <button 
                onClick={handleClear}
                className="btn-secondary flex-none px-4 text-xs"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterInterface;
