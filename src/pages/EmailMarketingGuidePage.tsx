import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Mail,
  Send,
  Inbox,
  CheckCircle2,
  Users,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { EmailMarketingIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface EmailMarketingGuidePageProps {
  onNavigate: (path: string) => void;
}

export const EmailMarketingGuidePage: React.FC<EmailMarketingGuidePageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['email-marketing-guide'];

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
          <span className="text-slate-800 font-semibold truncate">Email Marketing Guide</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Retention Guide
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
              <p className="text-slate-500">Owned Channel Strategy & Subscriber Nurture</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,040 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <EmailMarketingIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            In the rapidly evolving online landscape, social algorithms fluctuate, paid advertising
            costs rise, and search engine SERPs frequently update. For web publishers, understanding{' '}
            <strong>email marketing for beginners</strong> represents the ultimate insurance policy.
            Unlike third-party networks where a corporate algorithm dictates who sees your content, your
            email subscriber list is an owned asset. By establishing a thoughtful{' '}
            <strong>email marketing strategy</strong> and following tested{' '}
            <strong>email campaign tips</strong>, you establish a direct, unmediated lifeline to your
            most engaged audience.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Email Marketing and Why Is It So Effective for Audience Retention?"
            directAnswer="Email marketing is the practice of sending targeted, value-driven messages directly to the personal inboxes of subscribers who have explicitly granted permission to receive updates. It is effective because it bypasses third-party social algorithms, boasts an industry-leading average ROI of 38:1, and fosters direct, personal relationships."
          >
            <p>
              When a visitor lands on your educational website via Google Search after reading our{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                SEO guide for beginners
              </a>
              , there is a strong probability they may never return unless you provide a clear reason to
              stay connected.
            </p>
            <p>
              By offering a compelling lead magnet—such as an actionable on-page SEO checklist—you convert
              transient search traffic into a permanent subscriber base. Whenever you publish new
              educational resources, you can notify your audience immediately, generating predictable
              referral visits that signal high engagement to search crawlers.
            </p>
          </AeoBlock>

          {/* Section: The 4 Phases of Email Funnel */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Four Phases of an Email Subscriber Funnel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  1. The Lead Magnet
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">High-Value Opt-In</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offer a specific, high-utility resource (such as a PDF cheat sheet, checklist, or 5-day
                  crash course) in exchange for the visitor's email address.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  2. Automated Welcome Sequence
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Immediate Onboarding</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deliver the promised resource instantly. Over the subsequent 3–5 days, send automated
                  emails introducing your core mission, your best articles, and setting expectations for
                  future emails.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  3. Regular Editorial Newsletter
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Consistent Value</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Send weekly or bi-weekly newsletters featuring original commentary, tactical takeaways,
                  and links to new modules on your website.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">
                  4. Segmentation & Re-engagement
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Relevance & Hygiene</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Group subscribers by their demonstrated interests and prune unengaged contacts every
                  few months to protect sender deliverability.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do You Build an Email Marketing Strategy with High Open and Click Rates?"
            directAnswer="You build an email marketing strategy with high open and click rates by writing benefit-driven, spam-free subject lines under 50 characters, personalizing content to subscriber interests, delivering genuine educational value before pitching products, ensuring clean mobile responsiveness, and sending from a verified domain."
          >
            <p>
              Deliverability is the foundation of email success. If your emails end up in the spam or
              promotions tab, your open rates will plummet. Ensure your domain has proper authentication
              records (DKIM, SPF, and DMARC) configured with your DNS host.
            </p>
            <p>
              Secondly, write emails as if speaking directly to an individual colleague. Avoid overly
              complex HTML newsletter layouts with heavy banner graphics that look like corporate flyers.
              Simple, text-focused emails with readable typography and clean contextual links—identical to
              the principles we advocate in our{' '}
              <a
                href="/content-marketing-strategy/"
                onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                content marketing strategy guide
              </a>
              —consistently generate the highest engagement and click-through rates.
            </p>
          </AeoBlock>

          {/* Section: Practical Campaign Tips */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Essential Email Campaign Tips for Beginners
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 not-prose">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Focus on One Primary Call-to-Action (CTA):</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Don't overwhelm readers with twelve different links. Guide them toward one clear next
                    step—such as reading a newly published guide or taking a quick survey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Preview on Mobile Devices:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Over 60% of all emails are opened on smartphones. Ensure your font sizes are legible
                    without pinching and zooming, and make buttons tap-friendly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Measure Clicks with Analytics:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Tag links with UTM campaign parameters to monitor how email subscribers navigate
                    your website in our{' '}
                    <a
                      href="/digital-marketing-analytics/"
                      onClick={(e) => handleNav(e, '/digital-marketing-analytics/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      marketing analytics guide
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Your Most Resilient Owned Asset
            </h2>
            <p className="text-slate-700 leading-relaxed">
              When executed with care and respect for subscriber inboxes,{' '}
              <strong>email marketing for beginners</strong> delivers an enduring bridge between your
              educational writing and loyal readers. As search algorithms and social platforms evolve,
              an active email list remains your most dependable traffic and revenue engine.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Now that you understand the full promotional landscape, explore how to measure campaign
              success with data in our final module:{' '}
              <a
                href="/digital-marketing-analytics/"
                onClick={(e) => handleNav(e, '/digital-marketing-analytics/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                how to measure digital marketing performance using analytics
              </a>
              , or review our foundational{' '}
              <a
                href="/what-is-digital-marketing/"
                onClick={(e) => handleNav(e, '/what-is-digital-marketing/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                digital marketing beginner's guide
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Email Marketing
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
              href="/link-building-guide/"
              onClick={(e) => handleNav(e, '/link-building-guide/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Link Building Guide</span>
            </a>

            <a
              href="/digital-marketing-analytics/"
              onClick={(e) => handleNav(e, '/digital-marketing-analytics/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Marketing Analytics Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
