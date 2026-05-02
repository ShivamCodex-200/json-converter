import { Metadata } from 'next';
import JsonToTableClient from './JsonToTableClient';

export const metadata: Metadata = {
  title: 'JSON to Table Converter | Visualize JSON Data | ToolCorners',
  description: 'Convert JSON to an HTML Table online. Visualize your nested JSON data in a clean, readable table format instantly.',
};

export default function JsonToTablePage() {
  return <JsonToTableClient />;
}
