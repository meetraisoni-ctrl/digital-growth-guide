import React from 'react';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Target,
  Key,
  Compass,
  Search,
  CheckCircle2,
  AlertTriangle,
  BarChart2,
  Layers,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { KeywordResearchIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface KeywordResearchPageProps {
  onNavigate: (path: string) => void;
}

export const KeywordResearchPage: React.FC<KeywordResearchPageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['keyword-research-guide'];

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
          <span className="text-slate-800 font-semibold truncate">Keyword Research Guide</span>
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

        {/* Editorial Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-emerald-400 font-bold flex items-center justify-center">
              DG
            </div>
            <div>
              <p className="font-semibold text-slate-900">Digital Growth Guide Editorial</p>
              <p className="text-slate-500">Keyword Taxonomy & Intent Specialization</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,180 words
            </span>
          </div>
        </div>
      </header>

      {/* Unique Article Image with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <KeywordResearchIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Welcome to our actionable <strong>keyword research guide</strong>. When creators begin
            their website journey, they frequently produce content based entirely on assumptions
            rather than validated user demand. Knowing <strong>how to find keywords</strong> that
            mirror the genuine questions and needs of your target audience is the foundation of
            sustainable search engine visibility. By incorporating dedicated{' '}
            <strong>keyword research tools</strong> and understanding search psychology, you bridge
            the gap between great writing and organic traffic.
          </p>

          {/* Section: What is Keyword Research and Why It Matters */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Is Keyword Research and Why It Dictates SEO Success
            </h2>
            <p>
              Keyword research is the analytical practice of discovering, analyzing, and selecting
              the search terms that users enter into search engines when looking for information,
              solutions, or products. Rather than guessing what topics might be popular, keyword
              research provides verifiable data regarding query volume, seasonal trends, and
              competitive difficulty.
            </p>
            <p>
              Without this foundational step, you risk investing dozens of hours crafting a guide
              that nobody is searching for—or conversely, attempting to rank for an impossibly broad
              search phrase dominated by trillion-dollar tech corporations. As explained in our{' '}
              <a
                href="/seo-guide-for-beginners/"
                onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                introductory SEO guide for beginners
              </a>
              , search engine bots look for semantic alignment between a page's content and the
              user's search query.
            </p>
          </section>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="How Do You Find the Right Keywords for Website Content?"
            directAnswer="You find the right keywords by brainstorming core seed topics relevant to your audience, analyzing search queries using keyword research tools, examining competitors' ranking content, evaluating search volume against realistic competition difficulty, and confirming that the keywords align with your audience's genuine search intent."
          >
            <p>
              The keyword discovery process begins by determining your website's primary niche
              themes. From these broad themes, you extract specific "seed keywords" and input them
              into research platforms to uncover long-tail variations, question-based modifiers, and
              related semantic phrases.
            </p>
            <p>
              Beginners should prioritize terms with manageable competition where smaller websites
              can realistically rank on page one of Google. Once viable candidates are identified, you
              will systematically weave them into your headings, body copy, and metadata, as detailed
              in our companion{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                on-page SEO techniques guide
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: Short-Tail vs Long-Tail Keywords */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Demystifying Short-Tail vs. Long-Tail Keywords
            </h2>
            <p>
              Search terms fall along a spectrum known as the search demand curve, which divides
              queries into two primary classifications:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold uppercase bg-red-100 text-red-800 mb-3">
                  Short-Tail Keywords (Head Terms)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Broad & High-Volume</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Consist of 1 to 2 words (e.g., "shoes" or "digital marketing"). While they boast
                  massive monthly search volume, they suffer from ambiguous user intent and extreme
                  ranking competition dominated by entrenched brands.
                </p>
                <div className="text-xs font-mono text-slate-700 bg-white p-2.5 rounded border border-slate-200">
                  Example: "coffee" (Ambiguous intent)
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <span className="inline-block px-2.5 py-1 rounded text-xs font-bold uppercase bg-emerald-100 text-emerald-800 mb-3">
                  Long-Tail Keywords (The Sweet Spot)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Specific & High-Intent</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Consist of 3 to 5+ words (e.g., "best organic dark roast coffee beans for cold brew").
                  They carry lower individual search volume, but collectively account for over 70% of
                  all searches and deliver dramatically higher conversion rates.
                </p>
                <div className="text-xs font-mono text-emerald-900 bg-white p-2.5 rounded border border-emerald-300">
                  Example: "how to clean espresso machine basket"
                </div>
              </div>
            </div>

            <p>
              For new websites, targeting long-tail queries is the most reliable strategy for winning
              initial organic search impressions and building domain relevance.
            </p>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="What Is Search Intent in Keyword Research and Why Does It Matter?"
            directAnswer="Search intent is the primary goal or motivation a person has when typing a query into a search engine. It matters because search engines prioritize results that precisely satisfy user intent—categorized into informational, navigational, commercial, and transactional queries—meaning content that mismatches intent will struggle to rank regardless of optimization."
          >
            <p>
              Search intent (also known as user intent) is the most critical algorithmic factor in
              modern search engine evaluation. If Google observes that users clicking on your page
              immediately bounce back to the search results to find a different answer, your rankings
              will drop because the algorithm senses an intent mismatch.
            </p>
            <p>
              SEO professionals analyze search intent across four distinct categories:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                <strong>Informational Intent:</strong> The user wants answers or tutorials (e.g.,{' '}
                <em>"how to do keyword research"</em>).
              </li>
              <li>
                <strong>Navigational Intent:</strong> The user is attempting to find a specific website
                or brand portal (e.g., <em>"Google Search Console login"</em>).
              </li>
              <li>
                <strong>Commercial Investigation Intent:</strong> The user is researching options,
                comparisons, or reviews prior to buying (e.g., <em>"best SEO tools for students"</em>).
              </li>
              <li>
                <strong>Transactional Intent:</strong> The user is ready to complete a purchase or
                download immediately (e.g., <em>"buy Ahrefs subscription discount"</em>).
              </li>
            </ul>
          </AeoBlock>

          {/* Section: Keyword Research Tools */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Essential Keyword Research Tools for Beginners
            </h2>
            <p>
              To discover real search behavior without guessing, beginners can leverage several
              trusted <strong>keyword research tools</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  1. Google Keyword Planner (Free)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Google's native tool for advertisers. Provides official historical search volume
                  ranges, related query suggestions, and competition indicators directly from Google's
                  internal database.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  2. Google Trends (Free)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visualizes relative search interest over time across regions, helping you identify
                  rising seasonal trends and verify whether interest in a topic is growing or declining.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  3. Google Autocomplete & People Also Ask (Free)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time query completions directly within Google search. Ideal for discovering the
                  exact question phrasing searchers use for AEO answers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  4. Semrush & Ahrefs (Freemium / Premium)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Industry-standard suites providing keyword difficulty scores (KD), competitive gap
                  analysis, and estimated click-through potential.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Selecting 1 Main Keyword and 2 Related Keywords */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The 1 Main + 2 Related Keyword Mapping Strategy
            </h2>
            <p>
              A common pitfall among beginners is attempting to cram fifty disparate keywords into a
              single article. A far more effective and disciplined architecture is the{' '}
              <strong>1 Primary Main Keyword + 2 Supporting Related Keywords</strong> formula:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-slate-900 text-sm">Assign One Primary Main Keyword:</strong>
                  <p className="text-xs text-slate-600">
                    Represents the central topic of the page (e.g., <em>keyword research guide</em>).
                    Place it in the H1, SEO title tag, introductory paragraph, and meta description.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-slate-900 text-sm">Integrate Two Semantic Related Keywords:</strong>
                  <p className="text-xs text-slate-600">
                    Supporting phrases that naturally describe sub-facets of the primary topic (e.g.,{' '}
                    <em>keyword research tools</em> and <em>how to find keywords</em>). Integrate them
                    into H2 subheadings and body paragraphs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-slate-900 text-sm">Map Keywords to Distinct URLs (Prevent Cannibalization):</strong>
                  <p className="text-xs text-slate-600">
                    Ensure each URL targets a distinct search intent so your own pages never compete
                    against one another in Google search results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Common Keyword Research Mistakes */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Common Keyword Research Mistakes to Avoid</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <h3 className="font-bold text-red-900 text-sm mb-1">Chasing Vanity Volume</h3>
                <p className="text-xs text-red-800 leading-relaxed">
                  Targeting terms solely because they show 100,000 monthly searches. If your site
                  lacks domain authority, you will rank on page 10 where zero traffic exists.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <h3 className="font-bold text-amber-900 text-sm mb-1">Ignoring Search Intent</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Writing an informational blog post for a transactional term where searchers only
                  want an eCommerce product checkout page.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Keyword Cannibalization</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Writing four different blog posts all targeting the exact same query, confusing
                  search crawlers and splitting ranking authority.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Fabricating Metrics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Guessing search difficulty or volume without relying on real tool databases or
                  first-party Search Console data.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Turning Keyword Insights into Ranking Content
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Keyword research is the ultimate bridge between what you want to write and what your
              audience actually wants to read. By uncovering clear search intent, prioritizing
              accessible long-tail keywords, and organizing your content logically, you establish a
              clear trajectory for organic search success.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Once you have selected your keywords, the next crucial step is placing them correctly
              on your pages. Continue to our companion guide on{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                essential on-page SEO techniques
              </a>{' '}
              to optimize your title tags, meta descriptions, headings, and internal links.
            </p>
          </section>

          {/* Interactive FAQs */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Keyword Research
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
              href="/seo-guide-for-beginners/"
              onClick={(e) => handleNav(e, '/seo-guide-for-beginners/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: SEO Guide for Beginners</span>
            </a>

            <a
              href="/on-page-seo-techniques/"
              onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: On-Page SEO Techniques</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
