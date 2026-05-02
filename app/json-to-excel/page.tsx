import { Metadata } from 'next';
import JsonToExcelClient from './JsonToExcelClient';

export const metadata: Metadata = {
  title: 'JSON to Excel Converter | Export XLSX Online | ToolCorners',
  description: 'Convert JSON to Excel (XLSX) format online. Fast, secure, and client-side conversion for large JSON datasets. Professional Excel export tool.',
};

export default function JsonToExcelPage() {
  return <JsonToExcelClient />;
}
