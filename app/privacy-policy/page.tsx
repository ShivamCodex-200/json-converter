import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ToolCorners',
  description: 'Learn about our commitment to privacy. ToolCorners is a client-side utility suite where your data never leaves your device.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black tracking-tighter">
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
          Your data is your business. We keep it that way.
        </p>
      </div>

      <section className="glass-morphism p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">1. Data Sovereignty</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            At ToolCorners, we believe in absolute data privacy. Unlike traditional online converters, 100% of the data processing happens locally in your web browser. We do not have a backend server that stores, processes, or even sees the data you input into our tools.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">2. No Tracking</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We do not use invasive tracking scripts. We don't sell your data to third parties because we simply don't collect it in the first place. Your session remains anonymous and private.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">3. Browser Security</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our tools run in the sandboxed environment provided by your browser. This means they cannot access your files or system without your explicit permission (such as when you choose to download a converted file).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">4. Policy Updates</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            As we add more tools to the suite, our core commitment to 100% client-side privacy will never change. Any updates to this policy will be posted here immediately.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 font-medium italic">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>
    </div>
  );
}
