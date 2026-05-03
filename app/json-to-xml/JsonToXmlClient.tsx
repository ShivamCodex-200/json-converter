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

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Advanced JSON to XML Transformation</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            In many enterprise and legacy environments, <strong>XML (Extensible Markup Language)</strong> remains the standard for data exchange. ToolCorners offers a precise, industrial-grade solution to convert your modern JSON objects into valid, well-structured XML tags instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                SOAP & Legacy Support
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Working with older web services? Our converter generates XML that is compatible with <strong>SOAP protocols</strong> and legacy backend systems that require strict markup structures.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Valid XML Output
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We handle the heavy lifting of XML syntax, including <strong>header declarations, correct tag nesting, and escaping special characters</strong>, so your output is always parser-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Professional Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Custom Root Tags</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Automatically wraps your JSON data in a root element, ensuring the output is a valid XML document.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Pretty Printing</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Generated XML is beautifully indented for human readability, making debugging and configuration easier.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Attribute Mapping</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Handles nested JSON objects by converting them into nested XML elements while preserving hierarchy.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Encoding Support</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Uses standard UTF-8 encoding declarations to ensure cross-platform compatibility for your XML files.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Does it support XML attributes?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Currently, the tool maps JSON keys to XML elements. For attribute-specific mapping, we recommend structuring your JSON properties as direct children.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Can I use the output in Android development?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Absolutely! Our XML output is standard-compliant and can be used for Android layout files, string resources, or manifest configurations.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Is there a limit on tag nesting?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                There is no hard limit. Our recursive engine can handle deeply nested JSON objects, converting each level into a corresponding XML parent-child relationship.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Is my XML stored on the server?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                No. Like all ToolCorners utilities, the conversion happens entirely within your browser. Your data is private and never touches our infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
