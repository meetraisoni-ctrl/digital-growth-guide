import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Shield,
  Zap,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Server,
  Globe,
  Gauge,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { TechnicalSeoIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface TechnicalSeoBasicsPageProps {
  onNavigate: (path: string) => void;
}

export const TechnicalSeoBasicsPage: React.FC<TechnicalSeoBasicsPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['technical-seo-basics'];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="min-h-screen bg-white">
      <SeoHead
        metadata={article.seoMetadata}
        path={article.slug}
        articleHeadline={article.title}
        faqs={article.faqs}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" onClick={(e) => handleNav(e, '/')} className="hover:text-emerald-700 font-medium">
            Home
          </a>
          <span>/</span>
          <span className="text-slate-400">Guides</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">Technical SEO Basics</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Technical Guide
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            {article.readTime}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500 font-mono">
            Target Keyword: {article.seoMetadata.mainKeyword}
          </span>
        </div>

        {/* Single Clear H1 Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          {article.h1}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 font-normal">
          {article.subtitle}
        </p>

        {/* Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-emerald-400 font-bold flex items-center justify-center">
              DG
            </div>
            <div>
              <p className="font-semibold text-slate-900">Digital Growth Guide Editorial</p>
              <p className="text-slate-500">Search Engine Infrastructure & Performance</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,120 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <TechnicalSeoIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Even the most compelling, research-backed content will fail to achieve organic rankings if
            search engine spiders encounter technical barriers. Understanding{' '}
            <strong>technical SEO basics</strong> is about ensuring your website can be seamlessly
            discovered, crawled, rendered, and indexed by automated search bots. By learning how to
            conduct a foundational <strong>website SEO audit</strong> and evaluating your site's{' '}
            <strong>website crawlability</strong>, you eliminate hidden roadblocks that suppress your
            organic search potential.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Technical SEO and Why Is It Vital for Search Rankings?"
            directAnswer="Technical SEO encompasses website and server optimizations—such as XML sitemaps, robots.txt configuration, page speed, mobile responsiveness, HTTPS security, and structured data—that assist search engine crawlers in discovering, reading, and indexing pages efficiently. It is vital because pages that cannot be cleanly crawled cannot rank, regardless of content quality."
          >
            <p>
              While on-page optimization concerns visible text and heading tags, technical SEO operates
              beneath the surface. It ensures that search spiders like Googlebot do not waste their
              finite crawl budget on duplicate parameters, broken redirect chains, or bloated JavaScript
              files.
            </p>
            <p>
              As explored in our foundational{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                SEO guide for beginners
              </a>
              , search engines follow a strict three-phase process: Crawling, Indexing, and Ranking.
              Technical SEO guarantees that the first two stages occur smoothly without friction.
            </p>
          </AeoBlock>

          {/* Section: Core Pillars of Technical SEO */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Four Cornerstones of Technical Site Health
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  1. Crawlability & Indexation
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Robots & Sitemaps</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide an accurate XML sitemap (such as <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">/sitemap.xml</code>)
                  and ensure <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">/robots.txt</code> allows
                  crawlers to parse your primary educational guides without accidental disallow rules.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  2. Core Web Vitals Performance
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Speed Benchmarks</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keep Largest Contentful Paint (LCP) under 2.5 seconds, Interaction to Next Paint (INP)
                  responsive, and Cumulative Layout Shift (CLS) near zero by compressing images into WebP
                  or SVG formats.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  3. Canonical Tags & Clean URLs
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Duplicate Prevention</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every page must declare a self-referential <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">&lt;link rel="canonical"&gt;</code>{' '}
                  to prevent search engines from indexing query variations as duplicate content.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">
                  4. Structured Data (Schema.org)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Rich Snippets</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inject JSON-LD schemas such as BlogPosting and FAQPage to help search engines extract
                  direct answers for featured snippets and conversational Answer Engines (AEO).
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do You Perform a Basic Website SEO Audit for Crawlability?"
            directAnswer="You perform a basic website SEO audit by verifying your robots.txt file, submitting an XML sitemap to Google Search Console, inspecting the Coverage/Indexing report for 404 or 500 errors, checking for self-referential canonical tags, and running PageSpeed Insights to verify Core Web Vitals compliance."
          >
            <p>
              When conducting an audit, start by checking whether your website enforces HTTPS security.
              Unencrypted HTTP connections trigger browser warnings that immediately drive users away.
            </p>
            <p>
              Next, examine your internal linking architecture. If an important article is buried ten
              clicks deep without internal pathways from your homepage or related articles, search
              spiders will rarely crawl it. Creating descriptive contextual internal links—as emphasized
              throughout our{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                on-page SEO techniques guide
              </a>
              —ensures PageRank and bot attention circulate evenly across your domain.
            </p>
          </AeoBlock>

          {/* Section: Common Technical SEO Errors */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Common Technical SEO Mistakes to Avoid</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <h3 className="font-bold text-red-900 text-sm mb-1">Accidental "noindex" Directives</h3>
                <p className="text-xs text-red-800 leading-relaxed">
                  Leaving a <code className="bg-red-100 px-1 py-0.5 rounded text-red-950">&lt;meta name="robots" content="noindex"&gt;</code>{' '}
                  tag on production pages instructs Google never to display your content in search results.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <h3 className="font-bold text-amber-900 text-sm mb-1">Uncompressed Media Bloat</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Uploading 8MB uncompressed images ruins mobile page load speed and severely degrades
                  your Largest Contentful Paint (LCP) score.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Broken Internal Hyperlinks</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Linking to old URLs that return 404 Not Found waste crawler equity and create
                  frustrating dead ends for readers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Non-Responsive Viewports</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Missing viewport meta tags cause pages to render incorrectly on mobile devices,
                  violating Google's strict mobile-first indexing standards.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: A Clean Foundation for Content Success
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Mastering <strong>technical SEO basics</strong> provides the dependable bedrock upon
              which all content and link building efforts rest. When search engines can crawl, render,
              and index your web pages without impediments, your chances of winning high-intent search
              rankings increase dramatically.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Once your technical infrastructure is pristine, the next critical step is acquiring
              external search authority. Continue to our comprehensive{' '}
              <a
                href="/link-building-guide/"
                onClick={(e) => handleNav(e, '/link-building-guide/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                link building guide
              </a>
              , or review our practical{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                on-page SEO techniques
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Technical SEO
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, index) => (
                <div key={index} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">Q{index + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Bar */}
          <div className="pt-10 border-t border-slate-200 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/social-media-marketing-guide/"
              onClick={(e) => handleNav(e, '/social-media-marketing-guide/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Social Media Marketing Guide</span>
            </a>

            <a
              href="/link-building-guide/"
              onClick={(e) => handleNav(e, '/link-building-guide/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Link Building Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
