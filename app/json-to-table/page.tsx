import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToTableClient = dynamic(() => import('./JsonToTableClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Rendering Visual Grid...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'JSON to Table Viewer | Interactive JSON Grid Online | ToolCorners',
  description: 'Visualize your JSON data as an interactive table. Flatten nested JSON into a readable grid, search, sort, and export to multiple formats securely.',
  keywords: ['JSON to table', 'JSON viewer', 'JSON grid', 'visualize JSON', 'interactive data table', 'online json converter', 'free json converter', 'online json to table converter'],
  openGraph: {
    title: 'JSON to Table Viewer | Interactive JSON Grid Online | ToolCorners',
    description: 'Transform raw JSON into a high-performance interactive grid for easy analysis.',
    url: 'https://json.toolcorners.com/json-to-table',
  },
};

export default function JsonToTablePage() {
  return <JsonToTableClient />;
}
