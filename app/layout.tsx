import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolCorners | Professional JSON Converter Suite",
  description: "High-performance, client-side JSON conversion tools. Convert JSON to CSV, Excel, XML, YAML, and more securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 glass-morphism border-b border-white/5 mx-4 mt-4 px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            ToolCorners
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
            <Link href="/json-to-csv" className="hover:text-white transition-colors">CSV</Link>
            <Link href="/json-to-excel" className="hover:text-white transition-colors">Excel</Link>
            <Link href="/json-to-xml" className="hover:text-white transition-colors">XML</Link>
            <Link href="/json-to-yml" className="hover:text-white transition-colors">YAML</Link>
            <Link href="/json-to-string" className="hover:text-white transition-colors">String</Link>
            <Link href="/json-to-table" className="hover:text-white transition-colors">Table</Link>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>

        <footer className="border-t border-white/5 py-12 px-4 mt-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">ToolCorners</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Premium client-side developer tools. No data ever leaves your browser. Secure, fast, and high-performance JSON conversion utilities.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tools</h4>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li><Link href="/json-to-csv" className="hover:text-blue-400">JSON to CSV</Link></li>
                <li><Link href="/json-to-excel" className="hover:text-blue-400">JSON to Excel</Link></li>
                <li><Link href="/json-to-xml" className="hover:text-blue-400">JSON to XML</Link></li>
                <li><Link href="/json-to-yml" className="hover:text-blue-400">JSON to YAML</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-neutral-600 text-xs">
            © {new Date().getFullYear()} ToolCorners. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
