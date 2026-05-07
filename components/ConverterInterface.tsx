'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Upload, FileJson, Copy, Download, Trash2, Zap, Braces } from 'lucide-react';

interface ConverterInterfaceProps {
  title: string;
  description: string;
  conversionFn: (json: any, fileName?: string) => string | Blob | Promise<string | Blob>;
  outputExtension: string;
  sampleJson: any;
  mimeType?: string;
  customOutput?: (input: string, error: string | null, fileName: string, setFileName: (val: string) => void) => React.ReactNode;
}

const ConverterInterface: React.FC<ConverterInterfaceProps> = ({
  title,
  description,
  conversionFn,
  outputExtension,
  sampleJson,
  mimeType = 'text/plain',
  customOutput,
}) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [fileName, setFileName] = useState('toolcorners_export');
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isResizing, setIsResizing] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const validateAndConvert = useCallback(async (value: string) => {
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
  }, [conversionFn, fileName]);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      validateAndConvert(val);
    }, 300);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInput(content);
      validateAndConvert(content);
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      setFileName(`${nameWithoutExt}_converted`);
    };
    reader.readAsText(file);
  };

  const startResizing = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      if (newWidth > 20 && newWidth < 80) {
        setLeftWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

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
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
          {description}
        </p>
      </div>

      <div 
        ref={containerRef}
        className="glass-morphism min-h-[600px] flex flex-col lg:flex-row overflow-hidden shadow-2xl"
      >
        {/* Input Section */}
        <div 
          style={{ width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${leftWidth}%` : '100%' }}
          className="p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <FileJson className="w-3.5 h-3.5" /> Input JSON
            </span>
            <div className="flex gap-3">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-[10px] px-3 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 group"
              >
                <Upload className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" /> Upload JSON File
              </button>
              <button 
                onClick={handleSampleClick}
                className="text-[10px] px-3 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 group"
              >
                <Zap className="w-3.5 h-3.5 transition-transform group-hover:scale-110" /> Sample
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".json" className="hidden" />
            </div>
          </div>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Paste your JSON here..."
            className="input-area grow min-h-[400px] bg-black/2 dark:bg-black/20 rounded-xl p-4 text-slate-800 dark:text-slate-200"
          />
          {error && (
            <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-xs font-mono">
              {error}
            </div>
          )}
        </div>

        {/* Resizer */}
        <div 
          onMouseDown={startResizing}
          className="resize-handle"
        />

        {/* Output Section */}
        <div 
          style={{ width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${100 - leftWidth}%` : '100%' }}
          className="p-6 flex flex-col bg-slate-50/30 dark:bg-white/1"
        >
          {customOutput ? (
            customOutput(input, error, fileName, setFileName)
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <Braces className="w-3.5 h-3.5" /> Output Result
                </span>
                {isConverting && <div className="text-[10px] font-bold text-indigo-500 animate-pulse">Converting...</div>}
              </div>
              <pre className="output-area grow min-h-[400px] bg-white dark:bg-black/30 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-indigo-600 dark:text-indigo-400">
                {output || <span className="text-slate-400 italic">Result will appear here...</span>}
              </pre>
              
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Filename</label>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      className="bg-white dark:bg-black/40 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:border-indigo-500/50 outline-none transition-all"
                    />
                    <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-xs font-mono flex items-center text-slate-500">
                      .{outputExtension}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={handleCopy} disabled={!output} className="btn-secondary flex-1 py-2.5 text-xs flex items-center justify-center gap-2">
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button onClick={handleDownload} disabled={!input || !!error} className="btn-primary flex-1 py-2.5 text-xs flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Download
                  </button>
                  <button onClick={handleClear} className="px-4 bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/10 text-slate-500 hover:text-rose-500 rounded-lg transition-all border border-transparent hover:border-rose-500/20 cursor-pointer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConverterInterface;
