'use client';

import React, { useState, useMemo } from 'react';
import { Table as TableIcon, Code, FileText, FileSpreadsheet, FileOutput, Copy, CheckCircle2, RefreshCw } from 'lucide-react';

interface JsonTableOutputProps {
  input: string;
  error: string | null;
  fileName: string;
  setFileName: (val: string) => void;
}

const JsonTableOutput: React.FC<JsonTableOutputProps> = ({ input, error, fileName, setFileName }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'html'>('table');
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const tableData = useMemo(() => {
    if (error || !input.trim()) return null;
    try {
      const parsed = JSON.parse(input);
      const data = Array.isArray(parsed) ? parsed : [parsed];
      const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
      return { headers, rows: data };
    } catch (e) {
      return null;
    }
  }, [input, error]);

  const htmlCode = useMemo(() => {
    if (!tableData) return '';
    const headerHtml = `<thead><tr>${tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
    const rowsHtml = `<tbody>${tableData.rows.map(row => 
      `<tr>${tableData.headers.map(h => `<td>${row[h] !== undefined ? row[h] : ''}</td>`).join('')}</tr>`
    ).join('')}</tbody>`;
    return `<table border="1">\n  ${headerHtml}\n  ${rowsHtml}\n</table>`;
  }, [tableData]);

  const downloadCsv = async () => {
    if (!tableData) return;
    setIsExporting(true);
    try {
      const { Parser } = await import('@json2csv/plainjs');
      const parser = new Parser();
      const csv = parser.parse(tableData.rows);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.body.appendChild(document.createElement('a'));
      a.href = url;
      a.download = `${fileName}.csv`;
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('CSV Export Error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadExcel = async () => {
    if (!tableData) return;
    setIsExporting(true);
    try {
      const xlsx = (await import('json-as-xlsx')).default;
      const data = [
        {
          sheet: 'Sheet 1',
          columns: tableData.headers.map(h => ({ label: h, value: h })),
          content: tableData.rows
        }
      ];
      const settings = {
        fileName: fileName,
        writeMode: 'writeFile',
      };
      xlsx(data, settings);
    } catch (err) {
      console.error('Excel Export Error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadPdf = async () => {
    if (!tableData) return;
    setIsExporting(true);
    try {
      const jsPDF = (await import('jspdf')).default;
      const autoTable = (await import('jspdf-autotable')).default;
      
      const doc = new jsPDF();
      const body = tableData.rows.map(row => tableData.headers.map(h => row[h] !== undefined ? String(row[h]) : ''));
      
      autoTable(doc, {
        head: [tableData.headers],
        body: body,
        theme: 'grid',
        styles: { fontSize: 8, font: 'helvetica' },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [249, 250, 251] }
      });
      
      doc.save(`${fileName}.pdf`);
    } catch (err) {
      console.error('PDF Export Error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  if (error) return (
    <div className="flex items-center gap-3 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl text-rose-500 font-bold text-sm">
      <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
      Validation required to generate artifact preview.
    </div>
  );
  
  if (!input.trim()) return (
    <div className="flex flex-col items-center justify-center h-[400px] text-slate-400 dark:text-slate-600 space-y-4">
      <TableIcon className="w-12 h-12 opacity-20" />
      <p className="text-sm font-medium tracking-wide uppercase">Awaiting Data Stream...</p>
    </div>
  );

  if (!tableData) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Tabs */}
      <div className="flex bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-slate-800 rounded-xl p-1.5">
        <button
          onClick={() => setActiveTab('table')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
            activeTab === 'table' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <TableIcon className="w-3.5 h-3.5" /> Live View
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
            activeTab === 'html' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Code className="w-3.5 h-3.5" /> HTML Artifact
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[400px] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-black/30 shadow-inner">
        {activeTab === 'table' ? (
          <div className="overflow-auto max-h-[500px]">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] bg-slate-50/50 dark:bg-slate-900/50 sticky top-0 backdrop-blur-sm">
                <tr>
                  {tableData.headers.map((header) => (
                    <th key={header} className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {tableData.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/2 transition-colors">
                    {tableData.headers.map((header) => (
                      <td key={header} className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                        {row[header] !== undefined ? String(row[header]) : <span className="opacity-20">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <pre className="p-8 text-xs font-mono text-indigo-600 dark:text-indigo-400 overflow-auto max-h-[500px]">
            {htmlCode}
          </pre>
        )}
      </div>

      {/* Export Configuration */}
      <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
        <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
          <FileOutput className="w-3.5 h-3.5" /> Export Configuration
        </label>
        <div className="flex gap-2">
          <input 
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Filename..."
            className="bg-white dark:bg-black/40 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-indigo-500/50 outline-none grow transition-all shadow-sm"
          />
          <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase flex items-center tracking-widest">
            Multi-Format
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={() => {
            navigator.clipboard.writeText(htmlCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          disabled={isExporting}
          className="btn-secondary py-3.5 text-xs flex items-center justify-center gap-2"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied HTML' : 'Copy HTML'}
        </button>
        <button
          onClick={downloadCsv}
          disabled={isExporting}
          className="btn-primary py-3.5 text-xs flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 border-emerald-400/20 shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileSpreadsheet className="w-4 h-4" />}
          {isExporting ? 'Processing...' : 'Download CSV'}
        </button>
        <button
          onClick={downloadExcel}
          disabled={isExporting}
          className="btn-primary py-3.5 text-xs flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 border-blue-400/20 shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileOutput className="w-4 h-4" />}
          {isExporting ? 'Processing...' : 'Download Excel'}
        </button>
        <button
          onClick={downloadPdf}
          disabled={isExporting}
          className="btn-primary py-3.5 text-xs flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 border-rose-400/20 shadow-rose-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
          {isExporting ? 'Processing...' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
};

export default JsonTableOutput;
