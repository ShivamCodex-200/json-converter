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

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Professional JSON Minification</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            While pretty-printed JSON is excellent for development and debugging, <strong>minified JSON strings</strong> are essential for production performance. ToolCorners offers a lightning-fast utility to strip away unnecessary whitespace and newlines, optimizing your data for high-speed transmission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Performance Optimization
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Minifying your JSON can reduce payload sizes by up to 30%. This directly results in <strong>faster API response times</strong> and reduced infrastructure costs for high-traffic applications.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                Data Integrity Guaranteed
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our stringify engine removes only non-essential whitespace. Your <strong>data structure remains 100% intact</strong> and valid, ready for storage in databases or transmission over the network.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Industrial Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Cloud Storage Optimization</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Save on storage costs in services like AWS S3 or Google Cloud Storage by minifying large JSON log files before archiving.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Mobile API Responses</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Ensure your mobile app users experience fast load times by serving minified JSON payloads over cellular networks.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Embedded Systems</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Optimize data transmission for IoT devices with limited memory and bandwidth by using compact string representations.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Database Indexing</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Store JSON metadata in relational databases (like PostgreSQL JSONB) in a compact format for faster query execution.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Does minification change my data?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                No. Minification only removes the "syntactic sugar" (spaces and newlines) that makes JSON readable for humans. The data content and hierarchy remain identical.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">What is the difference between JSON.stringify and minification?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                In JavaScript, <code>JSON.stringify(data)</code> without additional arguments produces a minified string. Our tool provides this same clean output instantly.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Can I un-minify it later?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Yes! Any standard JSON formatter or "pretty printer" can take a minified string and restore the original indentation for human reading.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Is my minified data secure?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                Yes. Since ToolCorners runs 100% in your browser, your data is never transmitted across the network during the minification process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
