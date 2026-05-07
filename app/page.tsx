import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { 
  FileJson, 
  FileSpreadsheet, 
  FileCode, 
  FileText, 
  Table, 
  Braces,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
  Activity,
  Lock,
  Cpu
} from "lucide-react";
import AccordionFAQ from "@/components/AccordionFAQ";

const inter = Inter({ subsets: ["latin"] });

const tools = [
  {
    title: 'JSON to CSV',
    description: 'Convert structured JSON to professional CSV files for analysis.',
    href: '/json-to-csv',
    icon: <FileSpreadsheet className="w-6 h-6 text-emerald-500" />,
    iconBg: 'bg-emerald-500/10'
  },
  {
    title: 'JSON to Excel',
    description: 'Export large JSON datasets to native XLSX spreadsheets instantly.',
    href: '/json-to-excel',
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    iconBg: 'bg-blue-500/10'
  },
  {
    title: 'JSON to XML',
    description: 'Generate clean, validated XML tags from any JSON object.',
    href: '/json-to-xml',
    icon: <FileCode className="w-6 h-6 text-orange-500" />,
    iconBg: 'bg-orange-500/10'
  },
  {
    title: 'JSON to YAML',
    description: 'Transform JSON to human-readable YAML for configuration.',
    href: '/json-to-yml',
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    iconBg: 'bg-purple-500/10'
  },
  {
    title: 'JSON to String',
    description: 'Minify and optimize JSON payloads for production transmission.',
    href: '/json-to-string',
    icon: <Braces className="w-6 h-6 text-indigo-500" />,
    iconBg: 'bg-indigo-500/10'
  },
  {
    title: 'JSON to Table',
    description: 'Visualize complex nested JSON data in a responsive table.',
    href: '/json-to-table',
    icon: <Table className="w-6 h-6 text-rose-500" />,
    iconBg: 'bg-rose-500/10'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-32 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="text-center space-y-10 pt-2 pb-12 relative">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Zap className="w-3 h-3" /> Professional Developer Suite
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            Modern <span className="gradient-text">JSON Utilities</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            High-fidelity client-side conversion tools. Engineered for privacy, optimized for speed.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 text-sm font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-indigo-500" /> 100% Client Side
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 text-sm font-bold shadow-sm">
            <Zap className="w-4 h-4 text-orange-500" /> Instant Processing
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 text-sm font-bold shadow-sm">
            <Cpu className="w-4 h-4 text-emerald-500" /> High Performance
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link 
            key={tool.href} 
            href={tool.href}
            className="group glass-morphism p-6 hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className={`w-14 h-14 ${tool.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-indigo-500 transition-colors">
                {tool.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
            <div className="mt-6 flex items-center text-[10px] font-bold text-indigo-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
              Launch Utility <span className="ml-2">→</span>
            </div>
          </Link>
        ))}
      </section>

      {/* SEO Content Section */}
      <section className="space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50">Why Choose ToolCorners?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            In an era where data privacy is paramount, ToolCorners provides a <strong>100% client-side conversion suite</strong>. Whether you're a data analyst converting JSON to Excel or a DevOps engineer generating YAML, our tools ensure your workflow is fast, secure, and professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              Developer-First Design
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We understand that developers need tools that just work. Our interface is designed with an industrial aesthetic that stays out of your way while providing advanced features like <strong>real-time validation, automatic schema detection, and instant downloads</strong>.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              High Performance Engine
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Powered by optimized JavaScript libraries and modern browser APIs, our conversion engine handles <strong>large JSON files</strong> with ease. Say goodbye to server timeouts and slow uploads. Everything happens instantly on your machine.
            </p>
          </div>
        </div>

        {/* Home FAQ */}
        <AccordionFAQ 
          items={[
            {
              question: "Is JSON Master really free?",
              answer: "Yes, 100%. Our mission is to provide high-performance developer utilities without the friction of subscriptions, accounts, or 'pro' versions.",
              icon: <Zap className="w-4 h-4" />
            },
            {
              question: "Is it safe to use with corporate data?",
              answer: "Absolutely. JSON Master is designed with a zero-server-upload architecture. Your data is processed entirely within your browser's sandbox and is never transmitted to our infrastructure.",
              icon: <ShieldCheck className="w-4 h-4" />
            },
            {
              question: "Can I use it offline?",
              answer: "Yes. Once the app is loaded, you can disconnect from the internet and continue using all conversion utilities. It is also available as an installable PWA (Progressive Web App).",
              icon: <Globe className="w-4 h-4" />
            },
            {
              question: "How do you handle large JSON files?",
              answer: "We use high-efficiency streaming parsers and recursive algorithms that can handle files upwards of 50MB-100MB depending on your device's memory.",
              icon: <Cpu className="w-4 h-4" />
            }
          ]}
        />
      </section>

      <section className="text-center py-12 px-6 border-t border-slate-100 dark:border-slate-900">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Built for Professionals</h2>
        <div className="flex flex-wrap justify-center gap-10 opacity-30 grayscale contrast-125">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter italic">LEGACY</div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter italic">ENTERPRISE</div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter italic">DEVOPS</div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter italic">COMPLIANT</div>
        </div>
      </section>
    </div>
  );
}
