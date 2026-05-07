'use client';

import ConverterInterface from '@/components/ConverterInterface';
import xlsx from 'json-as-xlsx';
import AccordionFAQ from '@/components/AccordionFAQ';
import { ShieldCheck, Zap, Braces, Globe, FileSpreadsheet } from 'lucide-react';

export default function JsonToExcelClient() {
  const sampleJson = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', joined: '2023-01-01' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User', joined: '2023-02-15' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', joined: '2023-03-10' }
  ];

  const convertToExcel = (json: any, fileName?: string) => {
    try {
      const data = [
        {
          sheet: 'Data',
          columns: Object.keys(Array.isArray(json) ? json[0] : json).map(key => ({
            label: key.charAt(0).toUpperCase() + key.slice(1),
            value: key
          })),
          content: Array.isArray(json) ? json : [json]
        }
      ];

      const settings = {
        fileName: fileName || 'toolcorners_export',
        extraLength: 3,
        writeMode: 'writeFile',
      };

      xlsx(data, settings);
      return '[Excel file generated and download triggered]';
    } catch (err: any) {
      throw new Error('Excel Conversion Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to Excel Converter"
        description="Convert JSON arrays directly into professional Excel spreadsheets (.xlsx). Ideal for data analysts and business reporting."
        conversionFn={convertToExcel}
        outputExtension="xlsx"
        sampleJson={sampleJson}
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Industrial-Grade JSON to Excel Export</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            While JSON is perfect for APIs, <strong>Microsoft Excel (XLSX)</strong> is the standard for business intelligence and reporting. ToolCorners provides a high-performance bridge that transforms complex JSON datasets into native Excel spreadsheets instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Native XLSX Support
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Unlike simple CSV tools, our converter generates <strong>true .xlsx files</strong>. This means your columns are sized correctly, data types are preserved, and the file is ready for immediate use in business presentations.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                No Data Leakage
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Most online tools process your data on their servers. <strong>ToolCorners is 100% client-side</strong>. Your sensitive business data remains in your browser, ensuring total compliance with privacy regulations like GDPR and CCPA.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Common Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">API Response Analysis</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Fetch data from a REST API and quickly dump it into Excel for sorting, filtering, and deep analysis.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Database Migration</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Convert NoSQL exports (like MongoDB JSON) into a tabular format for traditional database imports.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Financial Reporting</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Transform raw transaction logs into readable spreadsheets for accounting and audit purposes.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Inventory Management</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Manage large product lists by converting JSON exports from e-commerce platforms into Excel sheets.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <AccordionFAQ 
          items={[
            {
              question: "Does it support multiple sheets?",
              answer: "Currently, our online tool converts your JSON into a single primary sheet named 'Data' for maximum compatibility and simplicity.",
              icon: <FileSpreadsheet className="w-4 h-4" />
            },
            {
              question: "Will I lose data in the conversion?",
              answer: "No. Our mapping engine ensures that every key in your JSON object becomes a unique column in Excel, preserving all your data points.",
              icon: <ShieldCheck className="w-4 h-4" />
            },
            {
              question: "Can I use this for offline work?",
              answer: "Yes! Once the page is loaded, the conversion logic runs entirely in your browser. You can even disconnect your internet and the tool will continue to function.",
              icon: <Globe className="w-4 h-4" />
            },
            {
              question: "Is there any charge for large files?",
              answer: "Never. ToolCorners is a community-first platform. Whether you're converting 10 rows or 10,000, our service remains 100% free.",
              icon: <Zap className="w-4 h-4" />
            }
          ]}
        />
      </section>
    </div>
  );
}
