'use client';

import ConverterInterface from '@/components/ConverterInterface';
import { toXML } from 'jstoxml';

export default function JsonToXmlClient() {
  const sampleJson = {
    note: {
      to: 'Tove',
      from: 'Jani',
      heading: 'Reminder',
      body: 'Don\'t forget me this weekend!'
    }
  };

  const convertToXml = (json: any) => {
    try {
      return toXML(json, { header: true, indent: '  ' });
    } catch (err: any) {
      throw new Error('XML Conversion Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to XML Converter"
        description="Easily convert your JSON objects into well-formatted XML. Perfect for SOAP integrations, legacy systems, and configuration files."
        conversionFn={convertToXml}
        outputExtension="xml"
        sampleJson={sampleJson}
        mimeType="application/xml"
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">How to Convert JSON to XML</h2>
          <p className="text-neutral-400 leading-relaxed">
            XML (Extensible Markup Language) is still widely used in many enterprise environments. Our tool makes the transition from JSON to XML seamless:
          </p>
          <ul className="space-y-4 list-decimal list-inside text-neutral-300">
            <li><span className="font-semibold text-white">Input Data:</span> Paste your JSON object into the left editor.</li>
            <li><span className="font-semibold text-white">Real-time Preview:</span> See the XML structure generated instantly on the right.</li>
            <li><span className="font-semibold text-white">Configuration:</span> The tool handles headers and proper indentation automatically.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
