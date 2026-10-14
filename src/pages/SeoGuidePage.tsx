import React from 'react';
import {
  Clock,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Search,
  Globe,
  Share2,
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AeoBlock } from '../components/AeoBlock';
import { SeoEngineIllustration } from '../components/ArticleIllustrations';
import { ARTICLES_DATA } from '../data/content';

interface SeoGuidePageProps {
  onNavigate: (path: string) => void;
}

export const SeoGuidePage: React.FC<SeoGuidePageProps> = ({ onNavigate }) => {
  const article = ARTICLES_DATA['seo-guide-for-beginners'];

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

      {/* Breadcrumb Header */}
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
          <span className="text-slate-800 font-semibold truncate">SEO Guide for Beginners</span>
        </div>
      </nav>

      {/* Article Header Container */}
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

        {/* Author & Verification Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-emerald-400 font-bold flex items-center justify-center">
              DG
            </div>
            <div>
              <p className="font-semibold text-slate-900">Digital Growth Guide Editorial</p>
              <p className="text-slate-500">Educational Curriculum Review • 2026 Edition</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-mono text-[11px]">
              Word Count: ~1,150 words
            </span>
          </div>
        </div>
      </header>

      {/* Main Image with Descriptive Alt Text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <SeoEngineIllustration alt={article.imageAlt} className="w-full" />
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Welcome to this comprehensive <strong>SEO guide for beginners</strong>. If you are
            setting out to establish a website, launch an online project, or build an audience,
            mastering <strong>search engine optimization basics</strong> is one of the most
            impactful investments you can make. Search engines process billions of searches every
            single day, connecting curious users with relevant websites. Understanding{' '}
            <strong>how SEO works</strong> empowers you to position your content directly in front
            of people seeking answers.
          </p>

          {/* AEO QUESTION 1 */}
          <AeoBlock
            question="What Is SEO and Why Is It Important for Beginners?"
            directAnswer="SEO (Search Engine Optimization) is the process of improving a website's structure, content, and authority so search engines like Google can easily discover, index, and rank its pages in organic search results. It is important because it delivers high-intent, compounding organic traffic without recurring advertising expenses."
          >
            <p>
              At its core, search engine optimization transforms an ordinary web document into an
              easily interpretable, high-authority resource for both human readers and search engine
              algorithms. When someone enters a query into a search bar, algorithms evaluate hundreds
              of potential candidate pages to display the most reliable and relevant answers.
            </p>
            <p>
              For beginners and small business owners, SEO provides an equalizer against massive
              advertising budgets. Unlike social media algorithms that deprecate post visibility
              within 24 hours, an optimized article continues gathering organic visitors month after
              month. By mastering <strong>search engine optimization basics</strong>, you build an
              enduring digital asset that compounds over time.
            </p>
          </AeoBlock>

          {/* Section: Crawling, Indexing, and Ranking Pipeline */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How Search Engines Discover, Crawl, and Index Websites
            </h2>
            <p>
              To appreciate <strong>how SEO works</strong>, one must examine the three sequential
              phases search engines perform before any web page can ever appear on a results page
              (SERP):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  Stage 1: Crawling
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Discovery & Spiders</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated web crawlers (such as Googlebot) continuously traverse the web by
                  following hyperlinks and reading XML sitemaps to discover new and updated pages.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  Stage 2: Indexing
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Parsing & Storage</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The crawler processes the page's HTML, renders JavaScript, extracts text and
                  metadata, categorizes semantic entities, and registers the page in a massive global
                  index.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Stage 3: Ranking
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Algorithmic Scoring</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When a user types a query, ranking algorithms analyze hundreds of signals
                  (relevance, backlinks, user experience, Core Web Vitals) to present the most
                  helpful results in milliseconds.
                </p>
              </div>
            </div>

            <p>
              If a web crawler encounters blocking directives inside a <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">robots.txt</code> file or detects a <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">noindex</code> meta tag, it will exclude that page from the index entirely.
            </p>
          </section>

          {/* AEO QUESTION 2 */}
          <AeoBlock
            question="How Does SEO Work to Rank Websites in Search Results?"
            directAnswer="SEO works through a three-stage pipeline: discovery and crawling (where automated search bots scan web pages), indexing (where page contents and semantic topics are analyzed and stored in a massive global database), and ranking (where algorithmic algorithms evaluate hundreds of factors like relevance, authority, page speed, and user experience to order the most helpful results)."
          >
            <p>
              When evaluating a search query, ranking systems do not browse the live internet in real
              time; they query their indexed copy. Algorithms weigh topical relevance (how closely the
              vocabulary and concepts match the user's intent), domain authority (the volume and
              editorial quality of external links pointing to the site), and user experience signals
              (page responsiveness, mobile compatibility, and clear navigation).
            </p>
            <p>
              For example, if two pages offer similarly accurate information, Google will prioritize
              the page that loads swiftly on mobile devices, features clear heading hierarchies, and
              avoids intrusive pop-ups. To understand how to discover the queries users search for,
              explore our dedicated{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                keyword research guide for beginners
              </a>
              .
            </p>
          </AeoBlock>

          {/* Section: The Three Core Pillars of SEO */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Three Core Pillars: On-Page, Off-Page, and Technical SEO
            </h2>
            <p>
              Search engine optimization is not a single repetitive task. Rather, successful web
              creators categorize their strategy into three complementary pillars:
            </p>

            <div className="space-y-4 not-prose">
              <div className="p-5 rounded-xl border-l-4 border-emerald-500 bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  1. On-Page SEO (Content & Semantics)
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Focuses on elements within your direct control: creating informative content,
                  crafting optimized title tags, writing meta descriptions, using semantic heading
                  tags (H1, H2, H3), and adding descriptive image alt text. Dive deeper into our{' '}
                  <a
                    href="/on-page-seo-techniques/"
                    onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                    className="text-emerald-700 font-bold underline hover:text-emerald-900"
                  >
                    practical on-page SEO techniques
                  </a>{' '}
                  to master these elements.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-blue-500 bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  2. Off-Page SEO (Authority & Backlinks)
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Involves activities conducted outside your website to build reputation and trust.
                  The most crucial factor is earning editorial backlinks from reputable websites,
                  which act like digital votes of confidence in the eyes of search engines.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-purple-500 bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  3. Technical SEO (Crawlability & Performance)
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Ensures search engine bots can efficiently access, crawl, and render your site.
                  This includes maintaining clean URL structures, providing XML sitemaps, managing
                  robots.txt directives, enforcing HTTPS security, and optimizing Core Web Vitals.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Practical Beginner Examples */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Practical SEO Examples for Beginners
            </h2>
            <p>
              Consider a local specialty coffee roaster named "Summit Coffee." If Summit Coffee only
              creates a homepage with a single photo and the words "Welcome to our shop," search
              engines have almost no contextual clues to determine what the business offers.
            </p>
            <p>
              However, when the owner applies foundational <strong>search engine optimization basics</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>
                They update the page title to: <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Summit Coffee | Organic Fair-Trade Coffee Beans in Seattle</code>.
              </li>
              <li>
                They craft an informative meta description highlighting their roast profiles and local pickup options.
              </li>
              <li>
                They publish educational guides targeting queries like "how to grind French press beans."
              </li>
              <li>
                They implement internal links connecting their brewing tutorials to their product catalog.
              </li>
            </ul>
            <p>
              As a result, search crawlers can index the site for high-intent coffee queries,
              steadily driving local customers and mail-order purchasers.
            </p>
          </section>

          {/* Section: Common SEO Mistakes */}
          <section className="my-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Common SEO Mistakes to Avoid</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                <h3 className="font-bold text-red-900 text-sm mb-1">Keyword Stuffing</h3>
                <p className="text-xs text-red-800 leading-relaxed">
                  Unnaturally repeating exact match keywords over and over. Modern search algorithms
                  use semantic natural language processing and penalize artificial keyword density.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <h3 className="font-bold text-amber-900 text-sm mb-1">Ignoring Mobile Usability</h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Google uses mobile-first indexing, meaning it predominantly uses the mobile version
                  of content for indexing and ranking. Non-responsive designs will struggle.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Missing or Duplicate Metadata</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Publishing pages without unique title tags or meta descriptions causes search
                  engines to generate generic snippets, lowering click-through rates.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-1">Generic Anchor Text</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Using anchor phrases like "click here" or "read more" instead of descriptive text
                  robs search bots of valuable topical context about the destination page.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Conclusion and Key Takeaways */}
          <section className="my-10 space-y-4 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Conclusion: Building Long-Term Organic Momentum
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Search engine optimization is not an overnight hack; it is a methodical discipline of
              delivering genuine value to users while maintaining clean technical architecture. By
              understanding <strong>how SEO works</strong>—from crawling and indexing to intent-driven
              keyword targeting and semantic on-page structure—beginners can systematically grow
              their web properties.
            </p>
            <p className="text-slate-700 leading-relaxed">
              To proceed on your educational path, review our{' '}
              <a
                href="/keyword-research-guide/"
                onClick={(e) => handleNav(e, '/keyword-research-guide/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                step-by-step keyword research guide
              </a>{' '}
              to discover the exact terms your audience searches for, followed by our{' '}
              <a
                href="/on-page-seo-techniques/"
                onClick={(e) => handleNav(e, '/on-page-seo-techniques/')}
                className="text-emerald-800 font-bold underline hover:text-emerald-950"
              >
                detailed on-page SEO techniques
              </a>{' '}
              to perfect your page formatting.
            </p>
          </section>

          {/* Interactive FAQ Section (AEO and Schema.org enriched) */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions About Beginner SEO
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

          {/* Internal Navigation Between Articles */}
          <div className="pt-10 border-t border-slate-200 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Digital Marketing Homepage</span>
            </a>

            <a
              href="/keyword-research-guide/"
              onClick={(e) => handleNav(e, '/keyword-research-guide/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next: Keyword Research Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
