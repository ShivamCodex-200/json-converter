'use client';

import ConverterInterface from '@/components/ConverterInterface';
import yaml from 'json-to-pretty-yaml';
import AccordionFAQ from '@/components/AccordionFAQ';
import { ShieldCheck, Zap, Braces, Terminal, FileText } from 'lucide-react';

export default function JsonToYamlClient() {
  const sampleJson = {
    version: '1.0.0',
    name: 'ToolCorners App',
    dependencies: {
      next: '14.0.0',
      react: '18.2.0'
    },
    scripts: ['dev', 'build', 'start']
  };

  const convertToYaml = (json: any) => {
    try {
      return yaml.stringify(json);
    } catch (err: any) {
      throw new Error('YAML Conversion Error: ' + err.message);
    }
  };

  return (
    <div className="space-y-24">
      <ConverterInterface
        title="JSON to YAML Converter"
        description="Convert your JSON to human-readable YAML format. Ideal for Kubernetes configs, Docker Compose files, and CI/CD pipelines."
        conversionFn={convertToYaml}
        outputExtension="yml"
        sampleJson={sampleJson}
        mimeType="text/yaml"
      />

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-16">
        {/* Detailed Guide */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Industrial JSON to YAML Conversion</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            YAML (YAML Ain't Markup Language) is the backbone of modern DevOps and infrastructure. ToolCorners provides a clean, precise converter that transforms your JSON configuration files into <strong>beautifully indented YAML</strong> for Kubernetes, Docker, and CI/CD pipelines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                DevOps & Infrastructure
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you're writing <strong>Kubernetes manifests</strong> or <strong>GitHub Actions workflows</strong>, our tool ensures your YAML syntax is perfectly valid and easy to read for your entire team.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                Human-Readable Format
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                JSON can be hard to maintain as configuration. Converting to YAML provides a <strong>cleaner, comment-friendly structure</strong> that is much easier for humans to manage and version control.
              </p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-8 py-8 border-y border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Professional Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Block Style Output</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Generates clean block-style YAML, which is the most widely supported and readable format for configuration files.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Preserved Logic</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">Our engine maintains the logical hierarchy of your JSON data, ensuring arrays and nested objects are mapped correctly.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Instant Preview</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">As you modify your JSON on the left, the YAML preview updates in real-time, allowing for rapid iterative development.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-white/2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">No External Calls</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400">All conversion logic is executed on your local machine. Your infrastructure secrets and API keys never touch our servers.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <AccordionFAQ 
          items={[
            {
              question: "Is YAML better than JSON?",
              answer: "For configuration, yes. YAML supports comments and is more visually concise, making it the preferred choice for tools like Kubernetes, Docker Compose, and Ansible.",
              icon: <Terminal className="w-4 h-4" />
            },
            {
              question: "Does it support multiline strings?",
              answer: "Yes. Our converter correctly handles multiline strings and special characters, preserving formatting for valid YAML output.",
              icon: <FileText className="w-4 h-4" />
            },
            {
              question: "Why is indentation important in YAML?",
              answer: "Unlike JSON which uses braces, YAML uses whitespace to define structure. Our tool ensures your indentation is consistent and valid for all target systems.",
              icon: <Braces className="w-4 h-4" />
            },
            {
              question: "Is my data sent to any server?",
              answer: "No. ToolCorners is privacy-first. All conversion happens locally in your browser, ensuring your secrets and keys never leave your machine.",
              icon: <ShieldCheck className="w-4 h-4" />
            }
          ]}
        />
      </section>
    </div>
  );
}
