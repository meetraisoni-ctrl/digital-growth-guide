import React from 'react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
  Key,
  Layers,
  CheckCircle2,
  BookOpen,
  Award,
  BarChart3,
  Globe2,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { ArticleCard } from '../components/ArticleCard';
import {
  HOMEPAGE_METADATA,
  ARTICLES_DATA,
  KEYWORD_RESEARCH_TABLE_DATA,
} from '../data/content';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenDocs: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDocs }) => {
  const articlesList = Object.values(ARTICLES_DATA);

  return (
    <div className="min-h-screen bg-white">
      <SeoHead metadata={HOMEPAGE_METADATA} path="/" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* College SEO Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Educational Resource • Digital Growth Guide</span>
            </div>

            {/* Exactly One Clear H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Digital Marketing Guide:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Strategic Fundamentals
              </span>{' '}
              for Beginners
            </h1>

            {/* Natural main & related keyword usage in intro */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              Welcome to our foundational <strong>digital marketing guide</strong>. Whether you are
              navigating <strong>digital marketing for beginners</strong> for the first time or seeking
              a structured refresher on <strong>online marketing basics</strong>, our educational
              curriculum bridges search engine mechanics, targeted keyword discovery, and on-page
              optimization into actionable, measurable steps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/seo-guide-for-beginners/');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 group"
              >
                <span>Start SEO Beginners Course</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenDocs}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                <span>View Step 7 Keyword Matrix</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Educational Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Editorial Introduction Section */}
        <section className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Marketing Fundamentals</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Understanding Digital Marketing in the Modern Search Era
          </h2>

          <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-5 leading-relaxed text-base sm:text-lg">
            <p>
              Digital marketing represents the strategic promotion of brands, products, and ideas
              through electronic media channels. Unlike traditional advertising methods—such as print
              billboards, newspaper spreads, and broadcast television—modern online marketing enables
              publishers and businesses to communicate directly with highly specific audiences at the
              precise moment those users exhibit interest or need.
            </p>
            <p>
              When studying <strong>digital marketing for beginners</strong>, the broad spectrum of
              channels can initially appear daunting. Marketers typically balance five core
              disciplines:
            </p>

            {/* Core Channel Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Search Engine Optimization
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attracting high-intent organic traffic through technical health, crawling
                  hygiene, and topical content depth.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Keyword Research & Intent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deciphering user psychology to ensure your published articles match what your
                  target readers actually search for.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  On-Page Content Structuring
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formatting title tags, meta descriptions, image alt tags, and internal link
                  networks to optimize user engagement.
                </p>
              </div>
            </div>

            <p>
              Understanding these <strong>online marketing basics</strong> allows content creators,
              entrepreneurs, and college students to construct resilient web properties. While paid
              advertising delivers immediate bursts of visitors that cease the second advertising
              spend is paused, organic search optimization creates a compounding growth engine that
              retains long-term value.
            </p>
          </div>
        </section>

        {/* SECTION: 3 Attractive Article Cards (Core Curriculum) */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Structured Learning Path
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Explore the Complete Educational Guides
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Each module includes in-depth explanations, visual architecture diagrams, AEO answer
              blocks, and practical checklists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesList.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onNavigate={onNavigate}
                featured={article.id === 'seo-guide-for-beginners'}
              />
            ))}
          </div>
        </section>

        {/* SECTION: Deep Dive on Importance of SEO & Keyword Research */}
        <section className="mb-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-5">
              Why SEO and Keyword Research Form the Backbone of Online Marketing
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
              Many beginners mistakenly assume that publishing great content is sufficient on its
              own. However, without systematic search engine optimization and diligent keyword
              research, high-quality writing remains invisible in Google's index.
            </p>
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Direct Alignment with Search Intent:</strong>{' '}
                  Keyword research reveals the exact queries real people type into search engines.
                  By consulting our{' '}
                  <a
                    href="/keyword-research-guide/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/keyword-research-guide/');
                    }}
                    className="text-emerald-700 font-semibold underline hover:text-emerald-900"
                  >
                    detailed keyword research guide
                  </a>
                  , beginners learn how to match content formats with informational and commercial
                  user motivations.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Cost-Effective Scalability:</strong> Unlike
                  pay-per-click ads where costs escalate with traffic, organic SEO traffic is
                  fundamentally scalable. Once your website establishes topical authority through our{' '}
                  <a
                    href="/seo-guide-for-beginners/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/seo-guide-for-beginners/');
                    }}
                    className="text-emerald-700 font-semibold underline hover:text-emerald-900"
                  >
                    comprehensive SEO guide for beginners
                  </a>
                  , impressions compound without recurring budget drains.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Enhanced Reader Experience:</strong> On-page
                  SEO techniques do not just satisfy search crawler algorithms; they elevate user
                  accessibility through clean heading structures, descriptive image alt text, and
                  fast mobile loading, as detailed in our{' '}
                  <a
                    href="/on-page-seo-techniques/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/on-page-seo-techniques/');
                    }}
                    className="text-emerald-700 font-semibold underline hover:text-emerald-900"
                  >
                    practical on-page SEO techniques
                  </a>{' '}
                  framework.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Two Mandatory Question-Form H2s with AEO Direct Answers */}
        <section className="max-w-4xl space-y-12 mb-20">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Answer Engine Optimization (AEO)
            </span>
            <p className="text-xs text-slate-500 mt-2">
              The following sections are formatted specifically for search engine featured snippets
              and AI conversational answers.
            </p>
          </div>

          {/* Question-form H2 #1 */}
          <AeoBlock
            question="What Is a Digital Marketing Guide and Why Do Beginners Need One?"
            directAnswer="A digital marketing guide is a structured educational resource designed to introduce fundamental promotional channels—including search engine optimization, content strategy, email outreach, and social media—to help beginners systematically build audience visibility, drive website traffic, and convert visitors without getting overwhelmed by jargon."
          >
            <p>
              For any newcomer entering the online ecosystem, the volume of marketing tactics can
              feel overwhelming. A well-crafted <strong>digital marketing guide</strong> provides a
              coherent roadmap that separates proven principles from fleeting trends. Instead of
              scattering effort across dozens of platforms haphazardly, beginners benefit from
              focusing first on foundational assets: a fast, crawlable website and high-quality,
              keyword-targeted content.
            </p>
            <p>
              By establishing this core baseline, learners discover how search algorithms index
              pages, how visitors arrive via search engines, and how continuous analytics feedback
              informs content revisions. As explored in our companion{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/seo-guide-for-beginners/');
                }}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                beginner-friendly SEO mechanics guide
              </a>
              , understanding the architecture of search early on prevents expensive structural
              mistakes down the road.
            </p>
          </AeoBlock>

          {/* Question-form H2 #2 */}
          <AeoBlock
            question="How Does Organic Search Engine Optimization Fit into Online Marketing Basics?"
            directAnswer="Organic search engine optimization serves as the foundational anchor of online marketing basics because it captures high-intent users actively searching for answers, providing compounding, cost-effective web traffic that continues delivering value long after initial publication, unlike paid advertising."
          >
            <p>
              Within the broader context of <strong>online marketing basics</strong>, traffic sources
              are generally divided into paid, earned, and owned channels. While social media
              algorithms often restrict organic reach to push paid sponsorships, search engine
              optimization is uniquely meritocratic: pages that offer the most comprehensive,
              technically sound, and intent-satisfying answers earn top placement.
            </p>
            <p>
              When a searcher types a question into Google, they demonstrate active intent rather than
              passive browsing. By combining sound keyword discovery from our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/keyword-research-guide/');
                }}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                strategic keyword research guide
              </a>{' '}
              with the meticulous page styling highlighted in our{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/on-page-seo-techniques/');
                }}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                on-page SEO techniques checklist
              </a>
              , you create web pages that sustainably attract targeted organic visits for years.
            </p>
          </AeoBlock>
        </section>

        {/* SECTION: Quick Internal Links Table / Assignment Matrix Callout */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                College SEO Assignment Documentation & Matrix
              </h3>
              <p className="text-sm text-slate-600">
                Inspect the full Step 7 table including main keywords, related keywords, title
                lengths, and search intent mappings.
              </p>
            </div>
            <button
              onClick={onOpenDocs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>Open Assignment Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
