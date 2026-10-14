import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Calendar,
  PenTool,
  Share2,
  TrendingUp,
  Lightbulb,
  FileText,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { ContentMarketingIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface ContentMarketingStrategyPageProps {
  onNavigate: (path: string) => void;
}

export const ContentMarketingStrategyPage: React.FC<ContentMarketingStrategyPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['content-marketing-strategy'];

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

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs text-slate-500">
          <a href="/" onClick={(e) => handleNav(e, '/')} className="hover:text-emerald-700 font-medium">
            Home
          </a>
          <span>/</span>
          <span className="text-slate-400">Guides</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">Content Marketing Strategy</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Strategy Guide
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

        {/* Exactly One Clear H1 Heading */}
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
              <p className="text-slate-500">Content Planning & Editorial Excellence</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,100 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <ContentMarketingIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Developing a successful <strong>content marketing strategy</strong> is the single most
            dependable method for turning casual website visitors into dedicated advocates. In an era
            where internet users can instantly sniff out empty sales pitches, adopting{' '}
            <strong>content marketing for beginners</strong> means committing to answering real
            questions with clarity and empathy. By combining research-backed editorial planning with
            practical <strong>content creation tips</strong>, you establish enduring topical authority
            that search engines and readers reward.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is a Content Marketing Strategy and Why Do Businesses Need One?"
            directAnswer="A content marketing strategy is a structured operational plan for creating, publishing, distributing, and measuring valuable educational content to attract and retain a clearly defined target audience. Businesses need one to generate sustainable organic search traffic, establish market credibility, and guide prospects through the purchasing funnel without high advertising costs."
          >
            <p>
              Without a formalized strategy, content creation often degenerates into random acts of
              blogging. Content creators frequently invest days writing articles based on intuition,
              only to realize no one is searching for those topics. A disciplined strategy anchors
              every article to validated user search intent discovered through our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                keyword research guide
              </a>
              .
            </p>
            <p>
              Furthermore, when an educational article answers a question comprehensively, it
              earns natural citations and social shares, amplifying your off-page reputation and
              feeding the overarching ecosystem introduced in our{' '}
              <a
                href="/what-is-digital-marketing/"
                onClick={(e) => handleNav(e, '/what-is-digital-marketing/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                beginner's guide to digital marketing
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: The 4 Stages of the Content Flywheel */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Four Phases of the Content Marketing Lifecycle
            </h2>
            <p>
              To keep your content pipeline productive and sustainable, organize your workflow into
              four sequential phases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Phase 1: Audience & Query Research
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Intent Mapping</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Analyze what questions your ideal readers ask on search engines, industry forums,
                  and customer support tickets. Group queries into educational clusters to build
                  topical authority.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  Phase 2: Comprehensive Creation
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">In-Depth Craftsmanship</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Draft authoritative guides (800–1,200+ words) that answer the user's primary query
                  better than competing resources, incorporating clear subheadings, custom visuals,
                  and snippet-ready summaries.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Phase 3: Multi-Channel Distribution
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Amplification Loops</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Publish on your owned website with optimized on-page formatting, then syndicate key
                  insights across social channels and your email newsletter as detailed in our{' '}
                  <a
                    href="/social-media-marketing-guide/"
                    onClick={(e) => handleNav(e, '/social-media-marketing-guide/')}
                    className="text-amber-700 font-semibold underline"
                  >
                    social media marketing guide
                  </a>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">
                  Phase 4: Content Refinement & Audits
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Continuous Updates</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regularly update published articles with fresh examples, new statistics, and internal
                  links to maintain search rankings and reader trust over time.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do Beginners Create a High-Impact Content Marketing Strategy?"
            directAnswer="Beginners create a high-impact content marketing strategy by defining a specific reader persona, conducting search intent keyword research, committing to a consistent publishing cadence, formatting articles with semantic HTML headings, and systematically repurposing key insights across social media and email."
          >
            <p>
              The most common mistake newcomers make in <strong>content marketing for beginners</strong> is
              prioritizing publishing speed over editorial depth. Search engines have evolved beyond
              rewarding thin 300-word blog posts. Today, algorithms reward content that comprehensively
              satisfies search intent without forcing the user to return to the search results.
            </p>
            <p>
              By structuring your articles using the exact semantic guidelines laid out in our{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                on-page SEO techniques framework
              </a>
              , you ensure both human readers and search engine crawlers immediately grasp the value of
              your writing.
            </p>
          </AeoBlock>

          {/* Section: Actionable Content Creation Tips */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Actionable Content Creation Tips for Greater Engagement
            </h2>
            <p>
              Incorporate these proven <strong>content creation tips</strong> into every draft before
              hitting publish:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Write Compelling First Paragraphs:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Hook the reader immediately by stating the problem they are facing and promising the
                    exact solution the article will deliver.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Use Skimmable Formatting:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Break up walls of text with bold bullet points, short 2-3 sentence paragraphs,
                    informative callout boxes, and descriptive subheadings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Include Original Visual Graphics:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Use clear diagrams, charts, or workflow maps with descriptive alt text to explain
                    complex concepts quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Weave Contextual Internal Links:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Connect relevant articles together using descriptive anchor text, guiding readers to
                    advanced modules like our{' '}
                    <a
                      href="/link-building-guide/"
                      onClick={(e) => handleNav(e, '/link-building-guide/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      link building guide
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Building an Enduring Content Asset
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A well-executed <strong>content marketing strategy</strong> transforms your website into an
              indispensable educational hub. By maintaining disciplined research, producing thorough
              guides, and serving your audience with genuine utility, your organic visibility will
              compound steadily over time.
            </p>
            <p className="text-slate-700 leading-relaxed">
              To amplify your published content across modern networks, proceed to our{' '}
              <a
                href="/social-media-marketing-guide/"
                onClick={(e) => handleNav(e, '/social-media-marketing-guide/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                social media marketing for beginners guide
              </a>
              , or review our core{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                keyword research guide
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Content Strategy
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
              href="/what-is-digital-marketing/"
              onClick={(e) => handleNav(e, '/what-is-digital-marketing/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: What Is Digital Marketing?</span>
            </a>

            <a
              href="/social-media-marketing-guide/"
              onClick={(e) => handleNav(e, '/social-media-marketing-guide/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Social Media Marketing Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
