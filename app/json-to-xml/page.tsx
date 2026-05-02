import { Metadata } from 'next';
import JsonToXmlClient from './JsonToXmlClient';

export const metadata: Metadata = {
  title: 'JSON to XML Converter | Professional Online Tool | ToolCorners',
  description: 'Convert JSON to XML instantly with ToolCorners. Secure, client-side conversion for developers. Export your JSON data to XML format for free.',
};

export default function JsonToXmlPage() {
  return <JsonToXmlClient />;
}
