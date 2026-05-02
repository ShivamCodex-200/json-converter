'use client';

import ConverterInterface from '@/components/ConverterInterface';
import jsonToTable from 'json-to-table';

export default function JsonToTableClient() {
  const sampleJson = [
    { id: 1, name: 'John Doe', stats: { hp: 100, mp: 50 } },
    { id: 2, name: 'Jane Smith', stats: { hp: 120, mp: 80 } }
  ];

  const convertToTable = (json: any) => {
    try {
      const tableData = jsonToTable(json);
      return JSON.stringify(tableData, null, 2);
    } catch (err: any) {
      throw new Error('Table Conversion Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to Table Converter"
        description="Visualize your JSON data as a structured table. Excellent for reviewing complex datasets and nested structures."
        conversionFn={convertToTable}
        outputExtension="json"
        sampleJson={sampleJson}
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Visualize Your Data</h2>
          <p className="text-neutral-400 leading-relaxed">
            Reading raw JSON can be difficult. Our table converter flattens nested structures into a grid, making it easier to scan and analyze data relationships.
          </p>
        </div>
      </section>
    </div>
  );
}
