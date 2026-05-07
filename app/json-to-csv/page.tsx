import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToCsvClient = dynamic(() => import('./JsonToCsvClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Initializing Secure Engine...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'Convert JSON to CSV Online - Free & Secure | JSON Master',
  description: 'Fastest way to convert JSON to CSV for Excel or Google Sheets. No file uploads required—data is processed locally for maximum privacy. Download your CSV in one click.',
  keywords: ['JSON to CSV', 'convert JSON to CSV', 'online JSON converter', 'JSON to CSV tool', 'secure JSON conversion', 'free json converter', 'online json to csv converter'],
  openGraph: {
    title: 'Convert JSON to CSV Online - Free & Secure | JSON Master',
    description: 'Transform your JSON data into clean, formatted CSV files instantly and securely.',
    url: 'https://json.toolcorners.com/json-to-csv',
  },
};

export default function JsonToCsvPage() {
  return <JsonToCsvClient />;
}
