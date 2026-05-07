import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToStringClient = dynamic(() => import('./JsonToStringClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Optimizing Logic Engine...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'JSON to String Converter | Minify & Escape JSON Online | JSON Master',
  description: 'Convert JSON to a single-line string or escaped string. Professional JSON minifier and stringifier for API payloads and compact storage.',
  keywords: ['JSON to string', 'JSON minifier', 'JSON stringify', 'minify JSON online', 'JSON escaping tool', 'online json converter', 'free json converter', 'online json to string converter'],
  openGraph: {
    title: 'JSON to String Converter | Minify & Escape JSON Online | JSON Master',
    description: 'Compress and optimize your JSON payloads instantly for production use.',
    url: 'https://json.toolcorners.com/json-to-string',
  },
};

export default function JsonToStringPage() {
  return <JsonToStringClient />;
}
