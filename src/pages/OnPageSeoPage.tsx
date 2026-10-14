import React, { useState } from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  AlertTriangle,
  Link2,
  Image as ImageIcon,
  Smartphone,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { OnPageSeoIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface OnPageSeoPageProps {
  onNavigate: (path: string) => void;
}

export const OnPageSeoPage: React.FC<OnPageSeoPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['on-page-seo-techniques'];
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checklistItems = [
    { title: 'Title Tag Optimization', desc: '50–60 characters, front-loaded primary keyword, appended brand name.' },
    { title: 'Compelling Meta Description', desc: '140–160 characters, includes supporting keywords, ends with a clear action.' },
    { title: 'Single H1 Heading', desc: 'Exactly one descriptive H1 tag per page representing the central theme.' },
    { title: 'Semantic Heading Hierarchy', desc: 'Logical flow of H2 subheadings (including question-form AEO headers) and H3 sub-points.' },
    { title: 'Natural Keyword Distribution', desc: 'Primary keyword in intro, naturally recurring secondary keywords without stuffing.' },
    { title: 'Image Compression & WebP', desc: 'Properly compressed image formats to ensure fast page load speeds.' },
    { title: 'Descriptive Image Alt Text', desc: 'Accurate descriptions for accessibility and Google Image indexing.' },
    { title: 'Contextual Internal Linking', desc: 'Meaningful anchor text describing target pages—strictly no generic "click here".' },
    { title: 'Clean, Short URL Slug', desc: 'Lowercase, descriptive words separated by hyphens (e.g., /on-page-seo-techniques/).' },
    { title: 'Mobile Responsiveness & Fast UX', desc: 'Passes Core Web Vitals, touch-friendly tap targets, and legible typography.' },
  ];

  const copyChecklist = () => {
    const text = checklistItems.map((item, i) => `${i + 1}. [ ] ${item.title}: ${item.desc}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2500);
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
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="hover:text-emerald-700 font-medium"
          >
            Home
          </a>
          <span>/</span>
          <span className="text-slate-400">Guides</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">On-Page SEO Techniques</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
            Core Guide
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
              <p className="text-slate-500">On-Page Architecture & Semantic Standards</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,200 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Illustration with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <OnPageSeoIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Welcome to this comprehensive guide on <strong>on-page SEO techniques</strong>. While off-page
            SEO involves acquiring external links and technical SEO governs server health, on-page
            optimization represents the elements directly under your authorial control. From
            meticulously crafted <strong>title tags and meta descriptions</strong> to clean heading
            architectures and descriptive media attributes, following an actionable{' '}
            <strong>on-page SEO checklist</strong> guarantees that every article you publish communicates
            its maximum value to human readers and search engine crawlers alike.
          </p>

          {/* Section: What is On-Page SEO and Why It Matters */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Is On-Page SEO and Why It Is Critical for Ranking
            </h2>
            <p>
              On-page SEO refers to the practice of optimizing individual web page elements—both
              visible content and underlying HTML source code—to help search engines understand the
              topic, evaluate relevance against specific search queries, and deliver an outstanding
              user experience.
            </p>
            <p>
              Even the most insightful article will fail to achieve visibility if search bots cannot
              discern what the page is about. As established in our{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                foundational SEO guide for beginners
              </a>
              , search crawlers rely heavily on HTML semantic tags to construct their knowledge graph.
              By applying intentional on-page adjustments, you remove ambiguity, boost organic click-through
              rates (CTR), and reduce bounce rates.
            </p>
          </section>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Are the Most Important On-Page SEO Techniques for Web Pages?"
            directAnswer="The most important on-page SEO techniques include crafting descriptive title tags and meta descriptions with primary keywords, organizing content with semantic heading tags (H1, H2, H3), providing descriptive alt text for images, creating logical internal links with descriptive anchor text, and ensuring fast mobile-friendly page experience."
          >
            <p>
              These core techniques work in unison to provide search algorithms with unambiguous
              topical signals. For example, placing your primary keyword within the first 60 characters
              of a title tag alerts crawlers to the page's core focus, while well-placed H2 subheadings
              indicate semantic subtopics.
            </p>
            <p>
              Equally crucial is the user engagement signal: when visitors arrive on a well-formatted
              page with clear typography, intuitive internal navigation, and zero intrusive layout shifts,
              they remain longer, reinforcing positive ranking metrics in Google's algorithms. To identify
              which keywords to prioritize across these tags, review our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                strategic keyword research guide
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: Title Tags and Meta Descriptions */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Mastering Title Tags and Meta Descriptions
            </h2>
            <p>
              Your title tag and meta description constitute your website's organic billboard on
              Google's search engine results page (SERP). Getting them right directly impacts your
              ranking and your organic click-through rate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  1. Title Tag Optimization (50–60 Chars)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Primary Direct Signal</h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li>• Front-load the primary target keyword near the beginning of the title.</li>
                  <li>• Keep length under 600 pixels (roughly 50 to 60 characters) to prevent truncation.</li>
                  <li>• Append your brand or website name separated by a pipe (|) or hyphen (-).</li>
                  <li>• Ensure every single page on your site has a 100% unique title tag.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  2. Meta Description Crafting (140–160 Chars)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Click-Through Catalyst</h3>
                <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <li>• Summarize the core value proposition and reader benefit concisely.</li>
                  <li>• Incorporate secondary related keywords naturally to highlight bold matches.</li>
                  <li>• Maintain length between 140 and 160 characters for complete display.</li>
                  <li>• Conclude with an active invitation or call to action (e.g., "Learn practical ways...").</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Do You Optimize Title Tags and Meta Descriptions for Search Engines?"
            directAnswer="You optimize title tags by placing the primary keyword near the beginning, keeping length between 50 to 60 characters, and appending your brand name. You optimize meta descriptions by summarizing the page value in 140 to 160 characters, including supporting keywords naturally, and ending with an actionable reason for searchers to click."
          >
            <p>
              Search engines measure click-through performance carefully. If your page ranks in
              position 4 but generates more clicks than position 2 due to an irresistible, highly
              relevant title and description snippet, search algorithms often promote your page higher.
            </p>
            <p>
              Avoid generic titles like "Home" or "Article 1" at all costs. Instead, create descriptive,
              human-friendly titles such as{' '}
              <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">
                SEO Guide for Beginners: How SEO Works | Digital Growth Guide
              </code>{' '}
              which accurately conveys topic depth and builds brand credibility.
            </p>
          </AeoBlock>

          {/* Section: Headings and Semantic Structure */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Structuring H1, H2, and H3 Headings Semantically
            </h2>
            <p>
              Heading tags form an outline of your content. Screen readers and search engine crawlers
              rely on this hierarchy to navigate the document:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-xs">&lt;h1&gt;</span>
                  <span>Single Main Heading (Only One per Page)</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Communicates the overarching topic. Must always incorporate the page's primary
                  keyword naturally.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono text-xs">&lt;h2&gt;</span>
                  <span>Major Conceptual Sections & Question-Form AEO Headers</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Breaks the article into thematic blocks. Using natural questions as H2s is the
                  standard methodology for winning Google's featured snippet answer boxes.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs">&lt;h3&gt;</span>
                  <span>Sub-Points and Specific Item Breakdowns</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Nests neatly under corresponding H2s to group detailed examples, tools, or checklists
                  without disrupting the macro outline.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Image Compression & Alt Text */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-emerald-600" />
              <span>Image Compression and Descriptive Alt Text</span>
            </h2>
            <p>
              Unoptimized images are the single most common cause of slow web pages. High-resolution
              uncompressed photos can bloat a page to multiple megabytes, resulting in poor Core Web
              Vitals scores and lost mobile rankings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Modern WebP & SVG Formats</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Convert heavy JPEG and PNG assets into modern formats like WebP or lightweight vector
                  SVGs. WebP provides 25–35% superior compression without perceptual quality loss.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Descriptive Alt Text</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Alt attributes allow screen readers to vocalize image contents for visually impaired
                  visitors and help Google Images index the asset. Avoid keyword stuffing; describe the
                  image accurately with natural context.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Internal Linking & Descriptive Anchors */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Link2 className="w-6 h-6 text-blue-600" />
              <span>Internal Linking with Descriptive Anchor Text</span>
            </h2>
            <p>
              Internal links connect pages within the same website. They distribute ranking equity
              (PageRank) across your domain and guide crawlers along logical discovery paths.
            </p>
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60 text-xs text-amber-950 leading-relaxed">
              <strong className="block text-sm text-amber-900 mb-1">
                Why Generic Anchor Text Like "Click Here" Destroys SEO Value:
              </strong>
              Search engines use the words inside a hyperlink—the anchor text—to deduce the subject
              matter of the target page. Writing "For more details,{' '}
              <span className="line-through text-red-600 font-bold">click here</span>" tells Google
              nothing. In contrast, linking with descriptive anchor text such as "explore our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-800 font-bold underline"
              >
                detailed keyword research guide
              </a>
              " provides explicit semantic context that strengthens ranking signals for both pages.
            </div>
          </section>

          {/* Section: URL Structure and Readability */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              URL Structure and Slug Readability
            </h2>
            <p>
              Clean, human-readable URLs improve user trust and CTR when links are shared across social
              media, email, or chat applications. Adhere to these golden rules:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Use clean, lowercase words:</strong> Avoid capitalized characters or random
                session IDs (e.g., <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">/on-page-seo-techniques/</code> instead of <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">/Page?id=83921&cat=seo</code>).
              </li>
              <li>
                <strong>Separate words with hyphens:</strong> Search engines recognize hyphens as word
                delimiters, whereas underscores can concatenate words into confusing strings.
              </li>
              <li>
                <strong>Keep slugs concise:</strong> Focus on your primary keyword and omit unnecessary
                stop words like "and", "the", or "of" when possible.
              </li>
            </ul>
          </section>

          {/* Section: Practical On-Page SEO Checklist Table */}
          <section className="my-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl not-prose">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Quick Reference
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                  Practical On-Page SEO Checklist
                </h3>
              </div>
              <button
                onClick={copyChecklist}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                {copiedChecklist ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Checklist!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Checklist</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Common On-Page SEO Mistakes */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Common On-Page SEO Mistakes to Avoid</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <h3 className="font-bold text-red-900 text-sm mb-1">Multiple H1 Tags</h3>
                <p className="text-xs text-red-800 leading-relaxed">
                  Using multiple H1 headings across a single page confuses search bots regarding the
                  primary topic. Restrict each page to exactly one primary H1.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <h3 className="font-bold text-amber-900 text-sm mb-1">Uncompressed Massive Images</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Uploading raw camera files (5MB+) drastically degrades mobile loading times and fails
                  Google's Core Web Vitals assessment.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Empty Alt Attributes</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Leaving image alt tags blank excludes visually impaired users relying on screen
                  readers and misses visual search indexing opportunities.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Broken Internal Links</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Links leading to 404 error pages frustrate visitors and drain crawler efficiency.
                  Verify all internal routes before publishing.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Complete On-Page Mastery for Beginners
            </h2>
            <p className="text-slate-700 leading-relaxed">
              On-page SEO is the disciplined craft of creating content that respects human readers
              while remaining crystal clear to automated search algorithms. By combining rigorous
              keyword targeting, semantic HTML tags, descriptive media elements, and fast mobile
              usability, you establish the baseline required to rank in competitive search landscapes.
            </p>
            <p className="text-slate-700 leading-relaxed">
              To review how these on-page elements harmonize with crawling and indexing, visit our{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                SEO guide for beginners
              </a>
              , or return to our{' '}
              <a
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                digital marketing fundamentals homepage
              </a>
              .
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About On-Page SEO
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs"
                >
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">Q{index + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Bar */}
          <div className="pt-10 border-t border-slate-200 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/keyword-research-guide/"
              onClick={(e) => handleNav(e, '/keyword-research-guide/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Keyword Research Guide</span>
            </a>

            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Back to Homepage Overview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
