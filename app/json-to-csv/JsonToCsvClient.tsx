'use client';

import ConverterInterface from '@/components/ConverterInterface';
import { Parser } from '@json2csv/plainjs';

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

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">How to Use the JSON to CSV Converter</h2>
          <p className="text-neutral-400 leading-relaxed">
            Our JSON to CSV tool is designed for simplicity and speed. Follow these three easy steps to export your data:
          </p>
          <ul className="space-y-4 list-decimal list-inside text-neutral-300">
            <li><span className="font-semibold text-white">Paste your JSON:</span> Copy your JSON data and paste it into the input field above.</li>
            <li><span className="font-semibold text-white">Validation:</span> The tool automatically validates your JSON. If there's an error, it will guide you.</li>
            <li><span className="font-semibold text-white">Download:</span> Once converted, click "Download .csv" or copy the result to your clipboard.</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-blue-400">Is my data secure?</h3>
              <p className="text-neutral-400">
                Yes, 100%. ToolCorners uses client-side processing. Your JSON data never leaves your computer and is never sent to any server.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-blue-400">What is JSON to CSV used for?</h3>
              <p className="text-neutral-400">
                JSON is a great format for data exchange between applications, but CSV is preferred for data analysis in tools like Excel, Google Sheets, or various database importing systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
