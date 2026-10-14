import React from 'react';
import { Compass, FileSpreadsheet, CheckCircle, ExternalLink, Github, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDocs }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Digital Growth <span className="text-emerald-400">Guide</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              An educational digital marketing and SEO resource built for beginners. Demonstrating
              rigorous keyword research, on-page optimization, and Answer Engine Optimization (AEO).
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                <CheckCircle className="w-3.5 h-3.5" />
                Vercel & GitHub Deployment Ready
              </span>
            </div>
          </div>

          {/* Col 2: Internal Educational Guides (Descriptive Anchors) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Educational Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/seo-guide-for-beginners/"
                  onClick={(e) => handleLinkClick(e, '/seo-guide-for-beginners/')}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Beginner SEO mechanics guide</span>
                </a>
              </li>
              <li>
                <a
                  href="/keyword-research-guide/"
                  onClick={(e) => handleLinkClick(e, '/keyword-research-guide/')}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Keyword research and intent guide</span>
                </a>
              </li>
              <li>
                <a
                  href="/on-page-seo-techniques/"
                  onClick={(e) => handleLinkClick(e, '/on-page-seo-techniques/')}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Practical on-page SEO techniques</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Digital marketing fundamentals homepage</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO Architecture & Standards */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              SEO Standards Applied
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Single H1 & Semantic Heading Hierarchy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Question-form H2s with AEO Direct Answers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Curated Title Tags (50–60 chars)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Actionable Meta Descriptions (140–160 chars)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Contextual Anchor Text (zero "click here")</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Clean WebP/SVG Imagery with Alt Attributes</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Assignment Matrix & Documentation */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Project Documentation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Step 7 Keyword Research Table featuring search intent, main keywords, and related
              keywords for evaluation and copy-paste submission.
            </p>
            <button
              onClick={onOpenDocs}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Open Keyword Research Matrix</span>
            </button>
            <div className="text-[11px] text-slate-500 flex items-center justify-between">
              <span>Sitemap: <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 underline">sitemap.xml</a></span>
              <span>Robots: <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 underline">robots.txt</a></span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Digital Growth Guide. Designed and developed for college SEO curriculum submission.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenDocs}
              className="hover:text-emerald-400 transition-colors underline"
            >
              Step 7 Internal Documentation Matrix
            </button>
            <span>•</span>
            <span className="text-emerald-400 font-mono">100% Static / Vercel SPA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
