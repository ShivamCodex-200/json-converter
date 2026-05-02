import { Metadata } from 'next';
import JsonToStringClient from './JsonToStringClient';

export const metadata: Metadata = {
  title: 'JSON to String Converter | Fast & Minified | ToolCorners',
  description: 'Convert JSON objects to string format instantly. Fast, secure, and optimized JSON stringification tool for developers.',
};

export default function JsonToStringPage() {
  return <JsonToStringClient />;
}
