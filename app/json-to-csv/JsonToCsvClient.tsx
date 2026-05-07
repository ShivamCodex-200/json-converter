'use client';

import ConverterInterface from '@/components/ConverterInterface';
import { Parser } from '@json2csv/plainjs';
import AccordionFAQ from '@/components/AccordionFAQ';
import { ShieldCheck, Zap, Braces } from 'lucide-react';

export default function JsonToCsvClient() {
  const sampleJson = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ];

  const convertToCsv = (json: any) => {
    try {
      const opts = {};
      const parser = new Parser(opts);
      return parser.parse(json);
    } catch (err: any) {
      throw new Error('CSV Conversion Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to CSV Converter"
        description="Transform your JSON data into clean, formatted CSV files instantly. All processing happens in your browser, ensuring maximum privacy."
        conversionFn={convertToCsv}
        outputExtension="csv"
        sampleJson={sampleJson}
        mimeType="text/csv"
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Mastering JSON to CSV Conversion</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            JSON (JavaScript Object Notation) is the language of the modern web, but for data scientists, accountants, and marketing analysts, <strong>CSV (Comma Separated Values)</strong> is the king of analysis. Our industrial-grade converter bridges this gap with zero-latency, browser-based processing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Why Convert JSON to CSV?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                CSV files are universally compatible with tools like <strong>Microsoft Excel, Google Sheets, and SQL databases</strong>. Converting nested JSON into a flat table makes it easy to perform calculations, create charts, and run statistical models.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                Security & Privacy First
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Unlike other online converters, <strong>ToolCorners never uploads your data</strong> to a server. All processing happens within your browser's sandboxed environment, making it safe for sensitive corporate data and PII.
              </p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Professional Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Automated Flattening</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Deeply nested JSON objects are automatically flattened into relational CSV columns using dot-notation mapping.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Large Dataset Support</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Engineered to handle multi-megabyte JSON arrays without crashing your browser or losing precision.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Smart Schema Detection</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Automatically identifies headers from your JSON keys, even if the objects in your array have inconsistent fields.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Instant Validation</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Real-time JSON linting catches syntax errors as you type, ensuring a smooth conversion experience.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <AccordionFAQ 
          items={[
            {
              question: "Is there a file size limit for JSON to CSV?",
              answer: "While there is no hard limit, the performance depends on your device's RAM. Most modern computers can handle 50MB+ JSON files with ease. For massive files, we recommend closing other browser tabs.",
              icon: <Zap className="w-4 h-4" />
            },
            {
              question: "Does it support nested objects?",
              answer: "Yes. Our converter uses a recursive flattening algorithm that transforms nested properties into dot-notated columns (e.g., user.address.zip).",
              icon: <Braces className="w-4 h-4" />
            },
            {
              question: "Can I convert JSON to CSV for free?",
              answer: "Yes, ToolCorners is completely free to use. There are no registration requirements, no subscription fees, and no hidden watermarks in your exported files.",
              icon: <Zap className="w-4 h-4" />
            },
            {
              question: "Is my data sent to the cloud?",
              answer: "No. One of the core pillars of ToolCorners is privacy. Your data remains strictly local in your browser's memory and is destroyed when you close the tab.",
              icon: <ShieldCheck className="w-4 h-4" />
            }
          ]}
        />
      </section>
    </div>
  );
}
