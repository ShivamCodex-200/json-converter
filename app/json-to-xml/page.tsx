import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const JsonToXmlClient = dynamic(() => import('./JsonToXmlClient'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Booting XML Mapper...</p>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'JSON to XML Converter - Clean & Validated Output | ToolCorners',
  description: 'Transform JSON objects into well-formatted XML tags. Perfect for API integration and legacy system compatibility. No data collection, just pure performance.',
  keywords: ['JSON to XML', 'convert JSON to XML', 'JSON to XML mapper', 'SOAP API data', 'online XML generator', 'online json converter', 'free json converter', 'online json to xml converter'],
  openGraph: {
    title: 'JSON to XML Converter - Clean & Validated Output | ToolCorners',
    description: 'Map your modern JSON objects to valid, well-structured XML tags instantly and securely.',
    url: 'https://json.toolcorners.com/json-to-xml',
  },
};

export default function JsonToXmlPage() {
  return <JsonToXmlClient />;
}
