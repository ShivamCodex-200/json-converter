'use client';

import ConverterInterface from '@/components/ConverterInterface';
import JsonTableOutput from '@/components/JsonTableOutput';
import AccordionFAQ from '@/components/AccordionFAQ';
import { ShieldCheck, Zap, Braces, FileText, Table } from 'lucide-react';

export default function JsonToTableClient() {
  const sampleJson = [
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true, lastLogin: '2023-10-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: false, lastLogin: '2023-09-28' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', active: true, lastLogin: '2023-10-12' }
  ];

  const convertToTable = (json: any) => {
    // For the generic interface, we'll return a placeholder string
    // The actual visualization is handled by customOutput
    return '[Table View Ready]';
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to Table Converter"
        description="Visualize your JSON data as a high-performance interactive table. Toggle between live view and HTML code, and export to multiple formats."
        conversionFn={convertToTable}
        outputExtension="html"
        sampleJson={sampleJson}
        customOutput={(input, error, fileName, setFileName) => (
          <JsonTableOutput input={input} error={error} fileName={fileName} setFileName={setFileName} />
        )}
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Industrial JSON Visualization</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Raw JSON text is difficult for humans to parse, especially when dealing with deeply nested arrays and objects. ToolCorners transforms your raw data into a <strong>high-performance interactive grid</strong>, making it easy to scan, sort, and analyze complex datasets in seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                Live Interactive Grid
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our table viewer doesn't just show data; it makes it interactive. You can toggle between <strong>Live View</strong> and <strong>HTML Code</strong>, and even export the flattened structure to CSV, Excel, or PDF directly from the interface.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Browser-Side Processing
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Security is our priority. Your JSON data is <strong>never uploaded to a server</strong>. The table is rendered entirely in your browser's memory, ensuring that sensitive data remains private and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Common Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Debugging API Payloads</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Quickly visualize large REST API responses to ensure the data structure matches your application requirements.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Customer Data Review</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">View user exports or customer lists in a clean grid for quality assurance and manual data verification.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Log File Analysis</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Transform complex JSON application logs into a tabular format for easier scanning of errors and events.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Product Catalog Audit</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Scan through large product JSON exports in a grid to verify pricing, descriptions, and stock levels.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <AccordionFAQ 
          items={[
            {
              question: "Can it handle nested JSON?",
              answer: "Yes. Our engine automatically flattens nested objects and arrays into a relational table structure, using dot-notation for headers.",
              icon: <Braces className="w-4 h-4" />
            },
            {
              question: "Can I export the table to PDF?",
              answer: "Yes! Once your data is loaded, you can download a professionally formatted PDF report directly from the interface.",
              icon: <FileText className="w-4 h-4" />
            },
            {
              question: "Is there a row limit?",
              answer: "The tool can handle thousands of rows smoothly. For extremely large datasets (10,000+ rows), performance will depend on your browser's memory and processor.",
              icon: <Zap className="w-4 h-4" />
            },
            {
              question: "Is my data secure in the table view?",
              answer: "Absolutely. The table is rendered entirely in your browser's memory. No data is sent to any server for processing or rendering.",
              icon: <ShieldCheck className="w-4 h-4" />
            }
          ]}
        />
      </section>
    </div>
  );
}
