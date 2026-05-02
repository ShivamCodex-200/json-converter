'use client';

import ConverterInterface from '@/components/ConverterInterface';
import xlsx from 'json-as-xlsx';

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

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">How to Convert JSON to Excel</h2>
          <p className="text-neutral-400 leading-relaxed">
            Exporting your structured data to Excel has never been easier:
          </p>
          <ul className="space-y-4 list-decimal list-inside text-neutral-300">
            <li><span className="font-semibold text-white">Input:</span> Provide an array of JSON objects.</li>
            <li><span className="font-semibold text-white">Automated Mapping:</span> Our tool automatically detects your keys and creates Excel columns.</li>
            <li><span className="font-semibold text-white">Instant Export:</span> The .xlsx file is generated and downloaded directly to your computer.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
