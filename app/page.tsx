import Link from 'next/link';

const tools = [
  {
    title: 'JSON to CSV',
    description: 'Convert JSON to comma-separated values for Excel or Sheets.',
    href: '/json-to-csv',
    icon: '📊'
  },
  {
    title: 'JSON to Excel',
    description: 'Export JSON data directly to professional .xlsx files.',
    href: '/json-to-excel',
    icon: '📈'
  },
  {
    title: 'JSON to XML',
    description: 'Transform JSON into well-formatted XML tags.',
    href: '/json-to-xml',
    icon: '🔗'
  },
  {
    title: 'JSON to YAML',
    description: 'Convert JSON to human-friendly YAML format.',
    href: '/json-to-yml',
    icon: '📝'
  },
  {
    title: 'JSON to String',
    description: 'Minify and compact JSON into a single string.',
    href: '/json-to-string',
    icon: '🧵'
  },
  {
    title: 'JSON to Table',
    description: 'Visualize nested JSON data in a structured table.',
    href: '/json-to-table',
    icon: '📅'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      <section className="text-center space-y-6 pt-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Modern <span className="gradient-text">JSON Utilities</span>
        </h1>
        <p className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed">
          The ultimate conversion suite for developers. Secure, client-side, and high-performance tools for all your JSON transformation needs.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold">
            100% Client Side
          </div>
          <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-semibold">
            Secure & Private
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.href} 
            href={tool.href}
            className="group glass-morphism p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {tool.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-6 flex items-center text-xs font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              OPEN TOOL <span className="ml-1">→</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="glass-morphism p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Why ToolCorners?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h4 className="text-blue-400 font-semibold">No Data Collection</h4>
            <p className="text-neutral-500 text-sm">Your data is processed locally in your browser. We never see it, and it never touches our servers.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-semibold">Lightning Fast</h4>
            <p className="text-neutral-500 text-sm">Built with Next.js 14 and optimized client-side libraries for near-instant results.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-semibold">Developer Friendly</h4>
            <p className="text-neutral-500 text-sm">Clean UI, keyboard shortcuts, and one-click copy/download functionality.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
