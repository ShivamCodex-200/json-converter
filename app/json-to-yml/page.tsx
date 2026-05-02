import { Metadata } from 'next';
import JsonToYamlClient from './JsonToYamlClient';

export const metadata: Metadata = {
  title: 'JSON to YAML Converter | Clean & Pretty Output | ToolCorners',
  description: 'Convert JSON to YAML (YML) online. Fast, secure, and beautiful YAML formatting for your JSON data. Perfect for configuration files.',
};

export default function JsonToYamlPage() {
  return <JsonToYamlClient />;
}
