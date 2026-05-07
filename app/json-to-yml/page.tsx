import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToYamlClient = dynamic(() => import('./JsonToYamlClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Loading YAML Engine...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'JSON to YAML Converter | Clean YAML Formatting Online | JSON Master',
  description: 'Convert JSON to YAML (YML) for Kubernetes, Docker, and CI/CD configs. High-performance, secure, and beautiful YAML output for your JSON objects.',
  keywords: ['JSON to YAML', 'JSON to YML', 'Kubernetes config generator', 'online YAML converter', 'DevOps tools', 'online json converter', 'free json converter', 'online json to yaml converter'],
  openGraph: {
    title: 'JSON to YAML Converter | Clean YAML Formatting Online | JSON Master',
    description: 'Transform your JSON configuration files into beautifully indented YAML instantly and securely.',
    url: 'https://json.toolcorners.com/json-to-yml',
  },
};

export default function JsonToYamlPage() {
  return <JsonToYamlClient />;
}
