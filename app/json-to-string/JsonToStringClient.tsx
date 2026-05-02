'use client';

import ConverterInterface from '@/components/ConverterInterface';

export default function JsonToStringClient() {
  const sampleJson = {
    id: 'TC-99',
    status: 'active',
    metadata: {
      source: 'web',
      priority: 1
    }
  };

  const convertToString = (json: any) => {
    try {
      return JSON.stringify(json);
    } catch (err: any) {
      throw new Error('Stringify Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to String Converter"
        description="Minify your JSON and convert it into a single-line string. Perfect for compacting data for storage or transmission."
        conversionFn={convertToString}
        outputExtension="txt"
        sampleJson={sampleJson}
        mimeType="text/plain"
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Why Use JSON to String?</h2>
          <p className="text-neutral-400 leading-relaxed">
            While pretty-printed JSON is great for reading, minified JSON strings are essential for production environments where every byte counts.
          </p>
          <ul className="space-y-4 list-decimal list-inside text-neutral-300">
            <li><span className="font-semibold text-white">Reduced Payload:</span> Removing whitespace and newlines reduces data size.</li>
            <li><span className="font-semibold text-white">Faster Transmission:</span> Smaller strings mean faster API responses and lower bandwidth usage.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
