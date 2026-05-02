'use client';

import ConverterInterface from '@/components/ConverterInterface';
import yaml from 'json-to-pretty-yaml';

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

      <section className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">How to Convert JSON to YAML</h2>
          <p className="text-neutral-400 leading-relaxed">
            YAML is a human-friendly data serialization standard that is commonly used for configuration files.
          </p>
          <ul className="space-y-4 list-decimal list-inside text-neutral-300">
            <li><span className="font-semibold text-white">Paste:</span> Drop your JSON into the input area.</li>
            <li><span className="font-semibold text-white">Transform:</span> The tool converts it to a pretty, indented YAML structure.</li>
            <li><span className="font-semibold text-white">Save:</span> Copy the text or download it as a .yml file.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
