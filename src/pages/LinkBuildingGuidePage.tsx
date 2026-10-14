import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Link,
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Globe2,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { LinkBuildingIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface LinkBuildingGuidePageProps {
  onNavigate: (path: string) => void;
}

export const LinkBuildingGuidePage: React.FC<LinkBuildingGuidePageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['link-building-guide'];

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
          <span className="text-slate-800 font-semibold truncate">Link Building Guide</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Off-Page Guide
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
              <p className="text-slate-500">Domain Authority & Editorial Outreach</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,080 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <LinkBuildingIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Welcome to this definitive <strong>link building guide</strong>. While on-page SEO ensures
            your content is structured properly and technical SEO guarantees crawlability, off-page
            authority is what differentiates page-one leaders from pages buried in obscurity. Earning{' '}
            <strong>quality backlinks</strong> from established, reputable domains signals to search
            algorithms that your content is trustworthy and reliable. By implementing ethical{' '}
            <strong>off-page SEO techniques</strong>, you build sustainable domain authority that
            resists algorithmic updates.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is Link Building and Why Are Quality Backlinks Essential for SEO?"
            directAnswer="Link building is the process of acquiring hyperlinks from other external websites pointing back to your own web pages. Quality backlinks are essential for SEO because search engines treat them as independent votes of confidence, transferring PageRank and authority that directly elevate your organic search rankings."
          >
            <p>
              Originally conceptualized in Google's foundational PageRank algorithm, hyperlinks were
              designed to mimic academic citations. Just as a research paper with fifty citations from
              peer-reviewed journals is considered more authoritative than an uncited paper, a webpage
              with links from recognized publications ranks higher in search results.
            </p>
            <p>
              However, modern search engines evaluate quality far above quantity. A single editorial
              backlink from an accredited university or respected industry journal provides vastly more
              ranking value than hundreds of spam comments on unrelated blogs. To understand how
              search algorithms calculate this ranking trust, review our introductory{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                SEO guide for beginners
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: Anatomy of a Quality Backlink */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Anatomy of a High-Quality Backlink
            </h2>
            <p>
              Before reaching out to other webmasters, understand the four criteria that characterize
              truly valuable <strong>quality backlinks</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Topical Relevance
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Contextual Synergy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The linking page and your destination page must share a logical topic. An educational
                  blog linking to our SEO guides passes immense relevance, whereas a link from an
                  unrelated automotive repair site carries little weight.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Domain Authority & Trust
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Editorial Credibility</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Websites with genuine human traffic, verified editorial standards, and clean backlink
                  profiles transmit genuine algorithmic trust to your domain.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-1">
                  Editorial Context Placement
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">In-Content Links</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Links embedded naturally within the body text of an article pass significantly more
                  PageRank than links tucked away in footers, sidebars, or automated author bios.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Descriptive Anchor Text
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Natural Phrasing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The anchor text surrounding the link should naturally describe the destination topic
                  without exact-match manipulation, aligning with principles taught in our{' '}
                  <a
                    href="/on-page-seo-techniques/"
                    onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                    className="text-amber-700 font-semibold underline"
                  >
                    on-page SEO techniques guide
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do Beginners Earn High-Quality Backlinks Without Spam Tactics?"
            directAnswer="Beginners earn high-quality backlinks without spam tactics by creating 'linkable assets'—such as comprehensive tutorials, original infographics, and research studies—and conducting personalized outreach to journalists, bloggers, and resource curators who cover that topic."
          >
            <p>
              The most reliable link building strategy begins with content excellence. If your website
              only features superficial posts, no webmaster has a compelling reason to reference your
              work. In contrast, when you produce an original research infographic or an interactive
              checklist—as demonstrated in our{' '}
              <a
                href="/content-marketing-strategy/"
                onClick={(e) => handleNav(e, '/content-marketing-strategy/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                content marketing strategy framework
              </a>
              —creators naturally cite your page as a primary source.
            </p>
            <p>
              Ethical outreach is about relationship building: email publishers with a genuine note
              explaining how your visual guide or dataset will enrich an existing article they have
              already published.
            </p>
          </AeoBlock>

          {/* Section: Ethical Off-Page SEO Techniques */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Proven Off-Page SEO Techniques for Beginners
            </h2>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 not-prose">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Broken Link Building:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Find reputable resource pages in your niche that contain broken 404 links. Alert the
                    webmaster politely and offer your high-quality, live article as an updated replacement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Original Research & Data Summaries:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Synthesize publicly available government, academic, or industry data into an easy-to-read
                    table or chart. Writers love citing statistics with source attribution links.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 text-sm">Digital PR & Expert Commentary:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Respond to queries from journalists on platforms like Connectively (formerly HARO) to
                    provide expert quotes in exchange for accredited editorial citations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Toxic Link Mistakes */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <span>Dangerous Link Tactics to Avoid at All Costs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <h3 className="font-bold text-red-900 text-sm mb-1">Purchasing Fiverr Backlink Packages</h3>
                <p className="text-xs text-red-800 leading-relaxed">
                  Buying "1,000 backlinks for $10" blasts spam across low-tier web rings that triggers
                  Google Penguin penalties and can result in total de-indexing.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <h3 className="font-bold text-amber-900 text-sm mb-1">Excessive Reciprocal Link Swapping</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  "I'll link to you if you link to me" schemes leave obvious footprint patterns that
                  search engine algorithms actively discount.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Authority Is Earned Through Utility
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Link building is not an exercise in tricking algorithms; it is the discipline of creating
              such immense value that peers in your field cannot help but point to your work. By adhering
              to the white-hat principles in this <strong>link building guide</strong>, you will build
              enduring authority that elevates all of your published content.
            </p>
            <p className="text-slate-700 leading-relaxed">
              To understand how to convert your acquired search traffic into loyal subscribers, proceed
              to our{' '}
              <a
                href="/email-marketing-guide/"
                onClick={(e) => handleNav(e, '/email-marketing-guide/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                email marketing for beginners guide
              </a>
              , or review our fundamental{' '}
              <a
                href="/technical-seo-basics/"
                onClick={(e) => handleNav(e, '/technical-seo-basics/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                technical SEO basics guide
              </a>.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Link Building
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
              href="/technical-seo-basics/"
              onClick={(e) => handleNav(e, '/technical-seo-basics/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Technical SEO Basics</span>
            </a>

            <a
              href="/email-marketing-guide/"
              onClick={(e) => handleNav(e, '/email-marketing-guide/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Email Marketing Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
