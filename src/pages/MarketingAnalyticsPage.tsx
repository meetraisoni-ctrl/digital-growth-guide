import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  LineChart,
  Activity,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { MarketingAnalyticsIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface MarketingAnalyticsPageProps {
  onNavigate: (path: string) => void;
}

export const MarketingAnalyticsPage: React.FC<MarketingAnalyticsPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['digital-marketing-analytics'];

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
          <span className="text-slate-800 font-semibold truncate">Digital Marketing Analytics</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Analytics Guide
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
              <p className="text-slate-500">Performance Measurement & Conversion Tracking</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,070 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <MarketingAnalyticsIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            A celebrated adage in traditional business states: "Half the money I spend on advertising
            is wasted; the trouble is I don’t know which half." In the digital age, this problem is
            completely solved through <strong>digital marketing analytics</strong>. Rather than
            relying on gut feelings, learning how to conduct rigorous{' '}
            <strong>website traffic analysis</strong> and monitor essential{' '}
            <strong>marketing performance metrics</strong> empowers you to identify which content
            resonates, which channels drive real engagement, and where to invest your future energy for
            maximum organic impact.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Digital Marketing Analytics and Why Does It Matter for Growth?"
            directAnswer="Digital marketing analytics is the systematic collection, tracking, analysis, and reporting of user behavior and campaign data across online channels. It matters for growth because it replaces subjective guesswork with verifiable data, revealing exactly how visitors discover, navigate, and convert on your website."
          >
            <p>
              Every time someone clicks an organic search result, reads an article, or registers for an
              email newsletter, they leave behind an informative digital footprint. Analytics software
              aggregates these individual interactions into patterns, uncovering user preferences,
              geographic distribution, and conversion friction points.
            </p>
            <p>
              For content creators and beginners, analytics is the compass that guides editorial
              refinements. If your data reveals that articles focusing on technical optimization have
              double the average session duration compared to general summaries, you can strategically
              expand your coverage of{' '}
              <a
                href="/technical-seo-basics/"
                onClick={(e) => handleNav(e, '/technical-seo-basics/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                technical SEO basics
              </a>{' '}
              to satisfy proven audience demand.
            </p>
          </AeoBlock>

          {/* Section: Core Channels in Website Traffic Analysis */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Deconstructing Website Traffic Analysis by Channel
            </h2>
            <p>
              When evaluating web traffic in tools like Google Analytics 4 (GA4), visitors are grouped
              into primary acquisition channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Organic Search (Google, Bing)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">High-Intent Inbound</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Users who typed a query and clicked your non-paid search listing. Represents the most
                  sustainable, high-intent traffic source when powered by disciplined keyword targeting
                  from our{' '}
                  <a
                    href="/keyword-research-guide/"
                    onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                    className="text-emerald-700 font-semibold underline"
                  >
                    keyword research guide
                  </a>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Direct Traffic
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Brand Loyalty</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visitors who typed your URL directly into their browser address bar or opened a saved
                  bookmark. High direct traffic indicates strong brand recall and reader loyalty.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">
                  Social & Community
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Referral Conversations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Traffic arriving via platforms like LinkedIn, X, and YouTube as a result of active
                  engagement discussed in our{' '}
                  <a
                    href="/social-media-marketing-guide/"
                    onClick={(e) => handleNav(e, '/social-media-marketing-guide/')}
                    className="text-purple-700 font-semibold underline"
                  >
                    social media marketing guide
                  </a>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Email Referrals
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Owned Audience Loyalty</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Subscribers clicking links inside newsletters and automated onboarding sequences, as
                  detailed in our{' '}
                  <a
                    href="/email-marketing-guide/"
                    onClick={(e) => handleNav(e, '/email-marketing-guide/')}
                    className="text-amber-700 font-semibold underline"
                  >
                    email marketing guide
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="What Are the Most Critical Marketing Performance Metrics to Track?"
            directAnswer="The most critical marketing performance metrics include Organic Sessions (traffic volume), Average Engagement Time (content depth and satisfaction), Click-Through Rate (CTR in search results), Conversion Rate (percentage of visitors taking a desired action), and Bounce Rate / Exit Rate (user retention health)."
          >
            <p>
              Beginners frequently obsess over "vanity metrics" such as raw pageviews or impressions.
              However, 10,000 pageviews with an average visit duration of 4 seconds and zero email
              sign-ups deliver virtually zero business value.
            </p>
            <p>
              Instead, prioritize "actionable metrics." When visitors spend over 3 minutes reading a
              1,200-word tutorial structured with clear subheadings—as modeled in our{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                on-page SEO techniques guide
              </a>
              —search engines recognize high user satisfaction and reward the page with higher ranking
              stability.
            </p>
          </AeoBlock>

          {/* Section: Practical Measurement Workflow */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A 3-Step Measurement Routine for Beginners
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 not-prose">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Step 1: Check Weekly Search Impressions:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Open Google Search Console weekly to observe which search queries your pages are
                    starting to show up for. Rising impressions precede rising clicks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Step 2: Review Content Engagement & Exit Pages:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Identify articles where users spend the most time and articles with high early exit
                    rates. Add helpful internal links and visual diagrams to keep readers engaged.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Step 3: Measure Conversions & Set Targets:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Define a clear micro-conversion (such as joining the newsletter or clicking an
                    internal guide link) and track whether monthly improvements reflect your marketing
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Closing the Growth Loop
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Mastering <strong>digital marketing analytics</strong> completes the circle of your
              educational journey. By continuously listening to what your data reveals about user
              behavior, search intent, and channel effectiveness, you can iterate with confidence and
              build a truly sustainable web property.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Review all 10 modules starting from our foundational{' '}
              <a
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                homepage curriculum overview
              </a>
              , or revisit our core{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                beginner SEO mechanics guide
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Marketing Analytics
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
              href="/email-marketing-guide/"
              onClick={(e) => handleNav(e, '/email-marketing-guide/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Email Marketing Guide</span>
            </a>

            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Return to Homepage Overview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
