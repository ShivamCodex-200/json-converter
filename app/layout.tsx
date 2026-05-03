import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolCorners | Premium JSON Conversion Suite",
  description: "High-performance, industrial-grade client-side JSON tools. Convert JSON to CSV, Excel, XML, and YAML securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col transition-colors duration-500`}>
        <ThemeProvider>
          <div className="mesh-gradient" />
          
          <header className="sticky top-0 z-[100] w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 backdrop-blur-md transition-all">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                    Tool<span className="text-indigo-500">Corners</span>
                  </span>
                </Link>
              </div>

              <nav className="hidden xl:flex flex-[2] justify-center items-center gap-8">
                <div className="flex gap-6 text-[13px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-400">
                  <Link href="/json-to-csv" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to CSV</Link>
                  <Link href="/json-to-excel" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to Excel</Link>
                  <Link href="/json-to-xml" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to XML</Link>
                  <Link href="/json-to-yml" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to YAML</Link>
                  <Link href="/json-to-string" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to String</Link>
                  <Link href="/json-to-table" className="hover:text-indigo-600 dark:hover:text-slate-50 transition-colors whitespace-nowrap">JSON to Table</Link>
                </div>
              </nav>

              <div className="flex-1 flex justify-end items-center gap-6">
                <div className="hidden xl:block h-5 w-px bg-slate-200 dark:bg-slate-800" />
                <ThemeSwitcher />
              </div>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-6 py-12">
            {children}
          </main>

          <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="col-span-1 space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                    ToolCorners
                  </span>
                </Link>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                  Industrial-grade developer utilities. Built for speed, privacy, and precision. No data ever leaves your device.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500 mb-4">Tools</h4>
                <ul className="text-slate-700 dark:text-slate-400 text-sm space-y-2 font-medium">
                  <li><Link href="/json-to-csv" className="hover:text-indigo-500 transition-colors">JSON to CSV Converter</Link></li>
                  <li><Link href="/json-to-excel" className="hover:text-indigo-500 transition-colors">JSON to Excel Converter</Link></li>
                  <li><Link href="/json-to-xml" className="hover:text-indigo-500 transition-colors">JSON to XML Converter</Link></li>
                  <li><Link href="/json-to-yml" className="hover:text-indigo-500 transition-colors">JSON to YAML Converter</Link></li>
                  <li><Link href="/json-to-string" className="hover:text-indigo-500 transition-colors">JSON to String Converter</Link></li>
                  <li><Link href="/json-to-table" className="hover:text-indigo-500 transition-colors">JSON to Table Viewer</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-500 mb-4">Company</h4>
                <ul className="text-slate-700 dark:text-slate-400 text-sm space-y-2 font-medium">
                  <li><Link href="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 text-center">
              <p className="text-slate-600 dark:text-slate-600 text-[11px] font-medium">
                © {new Date().getFullYear()} ToolCorners. Engineered for privacy.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
