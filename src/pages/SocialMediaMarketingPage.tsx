import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Users,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { SocialMediaIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface SocialMediaMarketingPageProps {
  onNavigate: (path: string) => void;
}

export const SocialMediaMarketingPage: React.FC<SocialMediaMarketingPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['social-media-marketing-guide'];

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
          <span className="text-slate-800 font-semibold truncate">Social Media Marketing</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Channel Guide
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
              <p className="text-slate-500">Social Audience Strategy & Community Engagement</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,020 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <SocialMediaIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            For creators and emerging organizations, <strong>social media marketing for beginners</strong>{' '}
            offers an unparalleled opportunity to build authentic human connections. Yet many newcomers
            confuse constant posting with actual business results. Without an intentional{' '}
            <strong>social media strategy</strong>, social media quickly becomes a time sink that
            delivers negligible web traffic. By implementing structured{' '}
            <strong>social media marketing tips</strong>, you can transform social networks into a
            powerful referral engine for your owned website and educational guides.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Social Media Marketing and How Does It Drive Growth for Beginners?"
            directAnswer="Social media marketing is the practice of creating and sharing targeted content across platforms like LinkedIn, X, Instagram, and YouTube to build brand awareness, foster audience engagement, and guide followers toward owned web properties. It drives growth by building community trust and generating high-converting referral traffic."
          >
            <p>
              Unlike static advertisements, social platforms thrive on social proof and direct dialogue.
              When someone engages with your content by commenting or reposting, your message is
              exposed to their extended network, creating organic viral loops.
            </p>
            <p>
              For beginners, social channels act as a testing ground for messaging. The topics that
              provoke discussions on social media can immediately inform the comprehensive guides you
              write for your website, as outlined in our{' '}
              <a
                href="/content-marketing-strategy/"
                onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                content marketing strategy guide
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: Platform Selection */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Selecting the Right Social Platforms for Your Audience
            </h2>
            <p>
              A major trap for beginners is attempting to maintain an active profile across five
              different networks simultaneously. Instead, concentrate on the channels where your ideal
              readers already congregate:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  LinkedIn & X (Professional / B2B)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Industry Discussions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Best for educational breakdowns, business tutorials, data insights, and networking
                  with fellow marketing professionals and college researchers.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block mb-1">
                  YouTube & Instagram (Visual / Consumer)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Visual Storytelling</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal for behind-the-scenes tutorials, bite-sized infographic carousels, and video
                  walkthroughs explaining complex technical concepts.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do You Build an Effective Social Media Strategy from Scratch?"
            directAnswer="You build an effective social media strategy by choosing one or two primary platforms, establishing three core content pillars based on audience needs, committing to a predictable weekly schedule, actively engaging in community replies, and directing followers to in-depth resources on your owned website."
          >
            <p>
              Content pillars give your social profiles consistency and purpose. For example, an
              educational website might establish three core pillars:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Pillar 1 (Tactical Tips):</strong> Quick, actionable optimization advice derived
                from our{' '}
                <a
                  href="/on-page-seo-techniques/"
                  onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                  className="text-emerald-700 font-semibold underline"
                >
                  on-page SEO techniques checklist
                </a>.
              </li>
              <li>
                <strong>Pillar 2 (Industry Debunking):</strong> Clarifying misconceptions about search
                algorithms and keyword stuffing.
              </li>
              <li>
                <strong>Pillar 3 (Resource Highlights):</strong> Sharing direct links to comprehensive
                modules like our{' '}
                <a
                  href="/seo-guide-for-beginners/"
                  onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                  className="text-emerald-700 font-semibold underline"
                >
                  SEO guide for beginners
                </a>.
              </li>
            </ul>
          </AeoBlock>

          {/* Section: Practical Social Media Marketing Tips */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Essential Social Media Marketing Tips for Beginners
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 not-prose">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Focus on Conversation, Not Broadcasting:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Reply to every comment, participate in discussions under peers' posts, and treat
                    social networks like interactive forums rather than billboards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Convert Followers into Email Subscribers:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Social algorithms constantly adjust their organic reach formulas. Use your social bio
                    to invite followers to join your email newsletter, as detailed in our{' '}
                    <a
                      href="/email-marketing-guide/"
                      onClick={(e) => handleNav(e, '/email-marketing-guide/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      email marketing guide
                    </a>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Track Referral Links with UTMs:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Always append campaign parameters to social links so you can evaluate true referral
                    traffic and session duration inside our{' '}
                    <a
                      href="/digital-marketing-analytics/"
                      onClick={(e) => handleNav(e, '/digital-marketing-analytics/')}
                      className="text-emerald-700 font-bold underline"
                    >
                      marketing analytics dashboard
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Social as a Conduit to Owned Audience Growth
            </h2>
            <p className="text-slate-700 leading-relaxed">
              When practiced with intention, <strong>social media marketing for beginners</strong> is not
              about chasing viral vanity metrics; it is about building reliable relationships that funnel
              curious readers toward your high-authority website assets.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Ready to verify that your website's technical foundation can handle incoming social traffic?
              Explore our comprehensive{' '}
              <a
                href="/technical-seo-basics/"
                onClick={(e) => handleNav(e, '/technical-seo-basics/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                technical SEO basics guide
              </a>
              , or review our fundamental{' '}
              <a
                href="/what-is-digital-marketing/"
                onClick={(e) => handleNav(e, '/what-is-digital-marketing/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                what is digital marketing guide
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Social Strategy
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
              href="/content-marketing-strategy/"
              onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Content Marketing Strategy</span>
            </a>

            <a
              href="/technical-seo-basics/"
              onClick={(e) => handleNav(e, '/technical-seo-basics/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Technical SEO Basics</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
