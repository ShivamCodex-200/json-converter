import { Metadata } from 'next';
import JsonToCsvClient from './JsonToCsvClient';

export const metadata: Metadata = {
  title: 'JSON to CSV Converter | Online & Secure | ToolCorners',
  description: 'Convert JSON to CSV online for free. Fast, secure, and client-side JSON to CSV conversion. Export your JSON data to comma-separated values easily.',
};

export default function JsonToCsvPage() {
  return <JsonToCsvClient />;
}
