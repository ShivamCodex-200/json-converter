import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToExcelClient = dynamic(() => import('./JsonToExcelClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Warming Up Excel Engine...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'JSON to Excel Converter: Download .xlsx Files Online | ToolCorners',
  description: 'Turn complex JSON data into professional Excel spreadsheets instantly. Supports nested objects and arrays. Secure, private, and 100% browser-based.',
  keywords: ['JSON to Excel', 'convert JSON to XLSX', 'JSON to spreadsheet', 'online JSON to Excel', 'secure data export', 'online json converter', 'free json converter', 'online json to excel converter'],
  openGraph: {
    title: 'JSON to Excel Converter: Download .xlsx Files Online | ToolCorners',
    description: 'Transform complex JSON datasets into native Excel spreadsheets instantly and securely.',
    url: 'https://json.toolcorners.com/json-to-excel',
  },
};

export default function JsonToExcelPage() {
  return <JsonToExcelClient />;
}
