import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Globe,
  Share2,
  CheckCircle2,
  Layers,
  Search,
  Mail,
  BarChart3,
  Lightbulb,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { DigitalMarketingIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface DigitalMarketingGuidePageProps {
  onNavigate: (path: string) => void;
}

export const DigitalMarketingGuidePage: React.FC<DigitalMarketingGuidePageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['what-is-digital-marketing'];

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
          <span className="text-slate-800 font-semibold truncate">What Is Digital Marketing</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Foundations Guide
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
              <p className="text-slate-500">Educational Digital Marketing Curriculum</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,050 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <DigitalMarketingIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            If you are exploring modern business strategy for the first time, you have likely asked
            the central question: <strong>what is digital marketing</strong>? In simple terms, digital
            marketing is the comprehensive practice of connecting with prospects and customers through
            internet-connected platforms. Unlike legacy advertising models, grasping{' '}
            <strong>digital marketing basics</strong> gives creators, students, and entrepreneurs the
            ability to target specific audiences, test messaging with minimal risk, and quantify exactly
            how campaigns convert into real customer engagement.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Digital Marketing and Why Is It Essential for Modern Businesses?"
            directAnswer="Digital marketing is any promotional effort that leverages the internet and electronic devices to reach target audiences, encompassing search engines, content platforms, email, social networks, and paid ads. It is essential because consumers research, compare, and complete purchasing decisions online, making digital presence mandatory for visibility and sustainable growth."
          >
            <p>
              Traditional promotional channels—such as magazine placements, physical flyers, and
              radio broadcasts—broadcast a single message outward to a broad geographic territory.
              While this approach historically built brand awareness, it provided virtually zero data
              on who viewed the advertisement or whether it inspired an action.
            </p>
            <p>
              In contrast, digital marketing operates as a two-way dialogue. When someone encounters an
              educational guide on your blog, they can comment, share it across social networks, or sign
              up for your email list. By mastering these <strong>digital marketing basics</strong>, you
              can track visitor pathways from initial impression to final transaction, continuously
              refining your messaging to maximize return on investment.
            </p>
          </AeoBlock>

          {/* Section: Types of Digital Marketing */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Exploring the Core Types of Digital Marketing
            </h2>
            <p>
              Successful digital campaigns rarely depend on a single channel. Instead, modern
              practitioners combine several distinct <strong>types of digital marketing</strong> to
              guide users through each phase of the buying journey:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  1. Search Engine Optimization (SEO)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Organic Search Discovery</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The systematic optimization of website structure and content to rank on search
                  engines like Google. Learn how search engines index and rank pages in our{' '}
                  <a
                    href="/seo-guide-for-beginners/"
                    onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                    className="text-emerald-700 font-semibold underline"
                  >
                    SEO guide for beginners
                  </a>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  2. Content Marketing
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Value-First Education</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Publishing high-quality articles, how-to guides, and videos that solve audience
                  problems. Dive deeper into our{' '}
                  <a
                    href="/content-marketing-strategy/"
                    onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
                    className="text-blue-700 font-semibold underline"
                  >
                    content marketing strategy guide
                  </a>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">
                  3. Social Media Marketing
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Community Building</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Fostering authentic relationships on platforms like LinkedIn, Instagram, and YouTube.
                  Explore our practical{' '}
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
                  4. Email Marketing
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Owned Audience Nurture</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Direct communication with opt-in subscribers free from algorithmic throttling. Read
                  our step-by-step{' '}
                  <a
                    href="/email-marketing-guide/"
                    onClick={(e) => handleNav(e, '/email-marketing-guide/')}
                    className="text-amber-700 font-semibold underline"
                  >
                    email marketing for beginners guide
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="What Are the Main Types of Digital Marketing for Beginners?"
            directAnswer="The primary types of digital marketing for beginners include Search Engine Optimization (SEO) for organic search capture, Content Marketing for audience education, Social Media Marketing for community engagement, Email Marketing for direct subscriber retention, and Digital Analytics for performance measurement."
          >
            <p>
              Rather than attempting to master all channels overnight, beginners achieve the greatest
              momentum by selecting one discovery channel (such as search engine optimization paired with
              keyword research) and one retention channel (such as an email newsletter).
            </p>
            <p>
              When your search rankings bring qualified visitors from our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                keyword research guide
              </a>
              , you can capture their email addresses and nurture them into loyal advocates without
              relying on recurring paid advertising spend.
            </p>
          </AeoBlock>

          {/* Section: Inbound vs Outbound Strategy */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Inbound vs. Outbound Marketing: The Strategic Shift
            </h2>
            <p>
              To navigate digital marketing effectively, one must recognize the philosophical shift
              from outbound disruption to inbound attraction:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              <li>
                <strong>Outbound Marketing (Interruption):</strong> Cold cold-calling, intrusive banner
                ads, and unskippable pop-ups. While outbound tactics can deliver fast impressions, they
                suffer from diminishing returns and consumer ad-fatigue.
              </li>
              <li>
                <strong>Inbound Marketing (Attraction):</strong> Publishing solutions that match the
                exact queries users type into search engines. By applying{' '}
                <a
                  href="/on-page-seo-techniques/"
                  onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                  className="text-emerald-700 font-semibold underline"
                >
                  practical on-page SEO techniques
                </a>
                , your brand appears naturally as the authoritative answer at the exact moment a user
                needs help.
              </li>
            </ul>
          </section>

          {/* Section: Practical Roadmap for Beginners */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A 4-Step Practical Digital Marketing Roadmap
            </h2>
            <div className="space-y-4 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Define Your Ideal Customer Profile</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Identify who your content is for, their core pain points, and the search terms they
                    use when researching questions online.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Build a Fast, Crawlable Web Foundation</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Ensure your site has clean URLs, mobile responsiveness, and strong technical health
                    as outlined in our{' '}
                    <a
                      href="/technical-seo-basics/"
                      onClick={(e) => handleNav(e, '/technical-seo-basics/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      technical SEO basics guide
                    </a>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Publish High-Utility Content</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Answer user questions thoroughly with clear headings, original diagrams, and
                    snippet-ready AEO direct answer blocks.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Measure and Iterate with Analytics</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Track traffic channels, click-through rates, and goal conversions with our{' '}
                    <a
                      href="/digital-marketing-analytics/"
                      onClick={(e) => handleNav(e, '/digital-marketing-analytics/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      digital marketing analytics guide
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Laying the Groundwork for Long-Term Growth
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Answering the question of <strong>what is digital marketing</strong> is only the starting
              line. Sustainable digital growth comes from continuously connecting your web presence to
              real customer needs through SEO, quality content, and disciplined measurement.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Continue your educational journey by exploring our{' '}
              <a
                href="/content-marketing-strategy/"
                onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                content marketing strategy guide
              </a>
              , or review our fundamental{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                SEO guide for beginners
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Digital Marketing Basics
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
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage Overview</span>
            </a>

            <a
              href="/content-marketing-strategy/"
              onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Content Marketing Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
