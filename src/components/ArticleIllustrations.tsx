import React from 'react';

interface IllustrationProps {
  className?: string;
  alt: string;
}

/**
 * Article 1 Illustration:
 * Crawling -> Indexing -> Ranking Architecture Diagram
 */
export const SeoEngineIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={alt}
      >
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-1" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="emerald-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="navy-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="960" height="480" fill="url(#bg-grad-1)" />
        <rect width="960" height="480" fill="url(#grid-pattern)" />

        {/* Top Header Label */}
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          SEARCH ENGINE ARCHITECTURE PIPELINE
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          How Search Engines Discover, Index, and Rank Web Pages
        </text>

        {/* STAGE 1: CRAWLING */}
        <g transform="translate(60, 110)">
          <rect width="250" height="280" rx="16" fill="url(#navy-card)" stroke="#334155" strokeWidth="1.5" />
          <circle cx="45" cy="45" r="22" fill="#0EA5E9" fillOpacity="0.15" />
          <path d="M37 45h16M45 37v16" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <text x="80" y="42" fill="#38BDF8" fontSize="11" fontWeight="700" letterSpacing="0.08em">PHASE 01</text>
          <text x="80" y="58" fill="#FFFFFF" fontSize="18" fontWeight="700">Crawling</text>
          
          <rect x="24" y="90" width="202" height="42" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="36" y="115" fill="#E2E8F0" fontSize="12" fontWeight="500">Googlebot & Web Spiders</text>

          <rect x="24" y="142" width="202" height="42" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="36" y="167" fill="#E2E8F0" fontSize="12" fontWeight="500">Discover Links & Sitemaps</text>

          <rect x="24" y="194" width="202" height="42" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="36" y="219" fill="#E2E8F0" fontSize="12" fontWeight="500">Checks robots.txt Rules</text>

          <path d="M24 250h202" stroke="#334155" strokeDasharray="4 4" />
          <text x="125" y="268" textAnchor="middle" fill="#94A3B8" fontSize="11">Detects new & updated URLs</text>
        </g>

        {/* ARROW 1 -> 2 */}
        <g transform="translate(325, 240)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" />
          <polygon points="35,-6 47,0 35,6" fill="#10B981" />
        </g>

        {/* STAGE 2: INDEXING */}
        <g transform="translate(385, 110)">
          <rect width="250" height="280" rx="16" fill="url(#navy-card)" stroke="#10B981" strokeWidth="2" />
          <circle cx="45" cy="45" r="22" fill="#10B981" fillOpacity="0.15" />
          <rect x="36" y="36" width="18" height="18" rx="4" stroke="#10B981" strokeWidth="2" fill="none" />
          <line x1="41" y1="42" x2="49" y2="42" stroke="#10B981" strokeWidth="1.5" />
          <line x1="41" y1="48" x2="49" y2="48" stroke="#10B981" strokeWidth="1.5" />
          <text x="80" y="42" fill="#34D399" fontSize="11" fontWeight="700" letterSpacing="0.08em">PHASE 02</text>
          <text x="80" y="58" fill="#FFFFFF" fontSize="18" fontWeight="700">Indexing</text>

          <rect x="24" y="90" width="202" height="42" rx="8" fill="#0F172A" stroke="#10B981" strokeOpacity="0.4" />
          <text x="36" y="115" fill="#E2E8F0" fontSize="12" fontWeight="500">Parses HTML & Text Content</text>

          <rect x="24" y="142" width="202" height="42" rx="8" fill="#0F172A" stroke="#10B981" strokeOpacity="0.4" />
          <text x="36" y="167" fill="#E2E8F0" fontSize="12" fontWeight="500">Understands Topic & Entity</text>

          <rect x="24" y="194" width="202" height="42" rx="8" fill="#0F172A" stroke="#10B981" strokeOpacity="0.4" />
          <text x="36" y="219" fill="#E2E8F0" fontSize="12" fontWeight="500">Stores in Giant Index Database</text>

          <path d="M24 250h202" stroke="#334155" strokeDasharray="4 4" />
          <text x="125" y="268" textAnchor="middle" fill="#34D399" fontSize="11">Only indexed pages can rank</text>
        </g>

        {/* ARROW 2 -> 3 */}
        <g transform="translate(650, 240)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" />
          <polygon points="35,-6 47,0 35,6" fill="#10B981" />
        </g>

        {/* STAGE 3: RANKING */}
        <g transform="translate(710, 110)">
          <rect width="210" height="280" rx="16" fill="url(#navy-card)" stroke="#334155" strokeWidth="1.5" />
          <circle cx="45" cy="45" r="22" fill="#F59E0B" fillOpacity="0.15" />
          <path d="M38 52l5-14 4 9 4-6 3 11" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="80" y="42" fill="#FBBF24" fontSize="11" fontWeight="700" letterSpacing="0.08em">PHASE 03</text>
          <text x="80" y="58" fill="#FFFFFF" fontSize="18" fontWeight="700">Ranking</text>

          <rect x="20" y="90" width="170" height="38" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="30" y="113" fill="#E2E8F0" fontSize="11" fontWeight="500">Relevance to Search Query</text>

          <rect x="20" y="136" width="170" height="38" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="30" y="159" fill="#E2E8F0" fontSize="11" fontWeight="500">Domain Authority & Links</text>

          <rect x="20" y="182" width="170" height="38" rx="8" fill="#0F172A" stroke="#334155" />
          <text x="30" y="205" fill="#E2E8F0" fontSize="11" fontWeight="500">Page Speed & User UX</text>

          <path d="M20 236h170" stroke="#334155" strokeDasharray="4 4" />
          <rect x="35" y="246" width="140" height="24" rx="12" fill="url(#emerald-glow)" />
          <text x="105" y="262" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">Top 10 SERP Result</text>
        </g>

        {/* Footer Note */}
        <text x="480" y="435" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational SEO Curriculum • Practical Guide for Beginners
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 1.1: The Three Essential Steps of Search Engine Processing</span>
        <span className="font-mono text-emerald-400">SEO Technical Workflow</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 2 Illustration:
 * Keyword Intent Funnel and Short-Tail vs Long-Tail Distribution
 */
export const KeywordResearchIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={alt}
      >
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-2" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
          </linearGradient>
          <pattern id="grid-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="960" height="480" fill="url(#bg-grad-2)" />
        <rect width="960" height="480" fill="url(#grid-pattern-2)" />

        {/* Header */}
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          KEYWORD TAXONOMY & SEARCH INTENT MATRIX
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Short-Tail vs. Long-Tail Demand Curve & The 4 Intent Types
        </text>

        {/* Left Side: The Long Tail Curve */}
        <g transform="translate(60, 100)">
          {/* Box container */}
          <rect width="400" height="290" rx="16" fill="#1E293B" fillOpacity="0.8" stroke="#334155" strokeWidth="1.5" />
          
          <text x="24" y="32" fill="#38BDF8" fontSize="11" fontWeight="700" letterSpacing="0.08em">SEARCH DEMAND CURVE</text>
          <text x="24" y="52" fill="#FFFFFF" fontSize="16" fontWeight="700">Volume vs. Conversion Intent</text>

          {/* Axes */}
          <line x1="50" y1="240" x2="360" y2="240" stroke="#64748B" strokeWidth="2" />
          <line x1="50" y1="75" x2="50" y2="240" stroke="#64748B" strokeWidth="2" />

          {/* Axis Labels */}
          <text x="45" y="70" textAnchor="end" fill="#94A3B8" fontSize="10">High Volume</text>
          <text x="45" y="240" textAnchor="end" fill="#94A3B8" fontSize="10">Low</text>
          <text x="360" y="258" textAnchor="end" fill="#94A3B8" fontSize="10">High Conversion Rate →</text>

          {/* Curve Area */}
          <path
            d="M 60 90 Q 90 190, 160 215 T 350 230 L 350 240 L 60 240 Z"
            fill="url(#curve-fill)"
          />
          <path
            d="M 60 90 Q 90 190, 160 215 T 350 230"
            stroke="#10B981"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Short Tail Tag */}
          <circle cx="78" cy="115" r="5" fill="#EF4444" />
          <rect x="90" y="100" width="115" height="32" rx="6" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
          <text x="96" y="114" fill="#F87171" fontSize="9" fontWeight="700">SHORT-TAIL (1-2 words)</text>
          <text x="96" y="126" fill="#E2E8F0" fontSize="10">"shoes" (Vague intent)</text>

          {/* Long Tail Tag */}
          <circle cx="280" cy="226" r="5" fill="#10B981" />
          <rect x="180" y="165" width="180" height="42" rx="6" fill="#0F172A" stroke="#10B981" strokeWidth="1" />
          <text x="188" y="180" fill="#34D399" fontSize="9" fontWeight="700">LONG-TAIL (3-5+ words)</text>
          <text x="188" y="193" fill="#E2E8F0" fontSize="10">"best trail running shoes women"</text>
          <text x="188" y="203" fill="#94A3B8" fontSize="8.5">Higher intent • Lower competition</text>
        </g>

        {/* Right Side: 4 Search Intent Pillars */}
        <g transform="translate(490, 100)">
          <rect width="410" height="290" rx="16" fill="#1E293B" fillOpacity="0.8" stroke="#334155" strokeWidth="1.5" />
          
          <text x="24" y="32" fill="#34D399" fontSize="11" fontWeight="700" letterSpacing="0.08em">THE 4 TYPES OF SEARCH INTENT</text>
          <text x="24" y="52" fill="#FFFFFF" fontSize="16" fontWeight="700">Satisfying User Search Psychology</text>

          {/* Intent 1: Informational */}
          <g transform="translate(20, 68)">
            <rect width="370" height="44" rx="8" fill="#0F172A" stroke="#334155" />
            <rect x="8" y="8" width="28" height="28" rx="6" fill="#3B82F6" fillOpacity="0.2" />
            <text x="22" y="26" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="700">?</text>
            <text x="46" y="20" fill="#FFFFFF" fontSize="12" fontWeight="700">Informational</text>
            <text x="46" y="34" fill="#94A3B8" fontSize="10.5">"What is keyword research?" • Learning & research</text>
          </g>

          {/* Intent 2: Navigational */}
          <g transform="translate(20, 120)">
            <rect width="370" height="44" rx="8" fill="#0F172A" stroke="#334155" />
            <rect x="8" y="8" width="28" height="28" rx="6" fill="#8B5CF6" fillOpacity="0.2" />
            <text x="22" y="26" textAnchor="middle" fill="#A78BFA" fontSize="12" fontWeight="700">↗</text>
            <text x="46" y="20" fill="#FFFFFF" fontSize="12" fontWeight="700">Navigational</text>
            <text x="46" y="34" fill="#94A3B8" fontSize="10.5">"Google Search Console login" • Finding a specific site</text>
          </g>

          {/* Intent 3: Commercial */}
          <g transform="translate(20, 172)">
            <rect width="370" height="44" rx="8" fill="#0F172A" stroke="#334155" />
            <rect x="8" y="8" width="28" height="28" rx="6" fill="#F59E0B" fillOpacity="0.2" />
            <text x="22" y="26" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="700">★</text>
            <text x="46" y="20" fill="#FFFFFF" fontSize="12" fontWeight="700">Commercial Investigation</text>
            <text x="46" y="34" fill="#94A3B8" fontSize="10.5">"Ahrefs vs Semrush review" • Evaluating solutions</text>
          </g>

          {/* Intent 4: Transactional */}
          <g transform="translate(20, 224)">
            <rect width="370" height="44" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
            <rect x="8" y="8" width="28" height="28" rx="6" fill="#10B981" fillOpacity="0.2" />
            <text x="22" y="26" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="700">$</text>
            <text x="46" y="20" fill="#FFFFFF" fontSize="12" fontWeight="700">Transactional</text>
            <text x="46" y="34" fill="#94A3B8" fontSize="10.5">"Buy SEO tool subscription" • Ready to purchase</text>
          </g>
        </g>

        {/* Footer Note */}
        <text x="480" y="435" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational SEO Curriculum • Practical Guide for Beginners
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 2.1: Search Demand Curve and the Four Categories of User Search Intent</span>
        <span className="font-mono text-emerald-400">Keyword Strategy Matrix</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 3 Illustration:
 * Anatomy of an On-Page SEO Web Page
 */
export const OnPageSeoIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={alt}
      >
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-3" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-3" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="960" height="480" fill="url(#bg-grad-3)" />
        <rect width="960" height="480" fill="url(#grid-pattern-3)" />

        {/* Header */}
        <text x="480" y="40" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          ON-PAGE SEO ANATOMY BLUEPRINT
        </text>
        <text x="480" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Essential HTML & Content Elements for On-Page Optimization
        </text>

        {/* Browser Mockup Window */}
        <g transform="translate(60, 95)">
          {/* Main frame */}
          <rect width="530" height="310" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          
          {/* Browser Top Bar */}
          <rect width="530" height="36" rx="12" fill="#F1F5F9" />
          <path d="M0 24h530v12H0z" fill="#F1F5F9" />
          <circle cx="20" cy="18" r="4.5" fill="#EF4444" />
          <circle cx="34" cy="18" r="4.5" fill="#F59E0B" />
          <circle cx="48" cy="18" r="4.5" fill="#10B981" />

          {/* Browser Address Bar */}
          <rect x="75" y="8" width="370" height="20" rx="5" fill="#FFFFFF" stroke="#CBD5E1" />
          <text x="88" y="22" fill="#334155" fontSize="10.5" fontFamily="monospace">
            https://example.com/on-page-seo-techniques/
          </text>

          {/* Inside Page Content */}
          <g transform="translate(30, 52)">
            {/* Title / H1 */}
            <rect x="0" y="0" width="320" height="18" rx="4" fill="#0F172A" />
            <text x="8" y="13" fill="#FFFFFF" fontSize="11" fontWeight="700">&lt;h1&gt; Primary Keyword Included &lt;/h1&gt;</text>

            {/* Intro paragraph lines */}
            <rect x="0" y="28" width="460" height="8" rx="3" fill="#E2E8F0" />
            <rect x="0" y="42" width="420" height="8" rx="3" fill="#E2E8F0" />
            <rect x="0" y="56" width="390" height="8" rx="3" fill="#E2E8F0" />

            {/* Subheading H2 */}
            <rect x="0" y="78" width="260" height="15" rx="4" fill="#1E293B" />
            <text x="8" y="90" fill="#34D399" fontSize="10" fontWeight="700">&lt;h2&gt; Question-Form Subheading &lt;/h2&gt;</text>

            {/* Image mockup with alt tag */}
            <rect x="0" y="105" width="220" height="85" rx="8" fill="#F8FAFC" stroke="#94A3B8" strokeDasharray="3 3" />
            <rect x="20" y="125" width="180" height="20" rx="4" fill="#E2E8F0" />
            <text x="110" y="139" textAnchor="middle" fill="#64748B" fontSize="9.5" fontWeight="600">Compressed WebP Image</text>
            <rect x="20" y="152" width="180" height="16" rx="4" fill="#ECFDF5" stroke="#10B981" />
            <text x="110" y="163" textAnchor="middle" fill="#047857" fontSize="8.5" fontFamily="monospace">alt="Descriptive keyword-rich phrase"</text>

            {/* Content with Internal Link */}
            <g transform="translate(240, 105)">
              <rect x="0" y="0" width="225" height="7" rx="3.5" fill="#E2E8F0" />
              <rect x="0" y="14" width="215" height="7" rx="3.5" fill="#E2E8F0" />
              <rect x="0" y="28" width="100" height="7" rx="3.5" fill="#E2E8F0" />
              {/* Internal Link Anchor */}
              <rect x="105" y="26" width="115" height="11" rx="3" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.8" />
              <text x="112" y="34.5" fill="#1D4ED8" fontSize="8" fontWeight="600">descriptive anchor text ↗</text>

              <rect x="0" y="44" width="220" height="7" rx="3.5" fill="#E2E8F0" />
              <rect x="0" y="58" width="180" height="7" rx="3.5" fill="#E2E8F0" />
            </g>

            {/* Direct Answer AEO box mockup */}
            <rect x="0" y="202" width="465" height="38" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
            <text x="12" y="217" fill="#166534" fontSize="9" fontWeight="700">AEO DIRECT ANSWER BLOCK</text>
            <text x="12" y="230" fill="#374151" fontSize="8.5">40-60 word succinct summary answering the exact search query for featured snippets.</text>
          </g>
        </g>

        {/* Right Side: Key Optimization Callouts */}
        <g transform="translate(620, 95)">
          {/* Card 1 */}
          <g transform="translate(0, 0)">
            <rect width="280" height="68" rx="10" fill="#1E293B" stroke="#334155" />
            <text x="16" y="22" fill="#38BDF8" fontSize="10" fontWeight="700">1. TITLE TAG (50–60 Chars)</text>
            <text x="16" y="40" fill="#FFFFFF" fontSize="12" fontWeight="600">Front-load primary keyword</text>
            <text x="16" y="56" fill="#94A3B8" fontSize="10.5">Crucial ranking & click-through signal</text>
          </g>

          {/* Card 2 */}
          <g transform="translate(0, 80)">
            <rect width="280" height="68" rx="10" fill="#1E293B" stroke="#334155" />
            <text x="16" y="22" fill="#34D399" fontSize="10" fontWeight="700">2. META DESCRIPTION (140–160 Chars)</text>
            <text x="16" y="40" fill="#FFFFFF" fontSize="12" fontWeight="600">Compelling call-to-action summary</text>
            <text x="16" y="56" fill="#94A3B8" fontSize="10.5">Drives higher CTR from Google search</text>
          </g>

          {/* Card 3 */}
          <g transform="translate(0, 160)">
            <rect width="280" height="68" rx="10" fill="#1E293B" stroke="#334155" />
            <text x="16" y="22" fill="#FBBF24" fontSize="10" fontWeight="700">3. HEADING HIERARCHY (H1, H2, H3)</text>
            <text x="16" y="40" fill="#FFFFFF" fontSize="12" fontWeight="600">Single H1 • Question-form H2s</text>
            <text x="16" y="56" fill="#94A3B8" fontSize="10.5">AEO answers optimize for AI search</text>
          </g>

          {/* Card 4 */}
          <g transform="translate(0, 240)">
            <rect width="280" height="68" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
            <text x="16" y="22" fill="#34D399" fontSize="10" fontWeight="700">4. INTERNAL LINKS & ALT TEXT</text>
            <text x="16" y="40" fill="#FFFFFF" fontSize="12" fontWeight="600">Contextual links • Never "click here"</text>
            <text x="16" y="56" fill="#94A3B8" fontSize="10.5">Passes PageRank and context cleanly</text>
          </g>
        </g>

        {/* Footer Note */}
        <text x="480" y="435" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational SEO Curriculum • Practical Guide for Beginners
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 3.1: Complete On-Page SEO Component Structure and Heading Architecture</span>
        <span className="font-mono text-emerald-400">On-Page Blueprint</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 4 Illustration:
 * Digital Marketing Ecosystem: Core Channels & Strategy Framework
 */
export const DigitalMarketingIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-4" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-4" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-4)" />
        <rect width="960" height="480" fill="url(#grid-pattern-4)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          DIGITAL MARKETING ECOSYSTEM
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Integrated Growth Channels for Beginners
        </text>
        <g transform="translate(60, 110)">
          {/* Channel 1: SEO */}
          <g transform="translate(0, 0)">
            <rect width="155" height="260" rx="14" fill="#1E293B" stroke="#334155" />
            <circle cx="77" cy="45" r="22" fill="#10B981" fillOpacity="0.15" />
            <text x="77" y="52" textAnchor="middle" fill="#10B981" fontSize="18" fontWeight="bold">SEO</text>
            <text x="77" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Search Engine</text>
            <text x="77" y="115" textAnchor="middle" fill="#94A3B8" fontSize="11">Organic visibility</text>
            <text x="77" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">High-intent intent</text>
            <rect x="20" y="160" width="115" height="26" rx="6" fill="#0F172A" />
            <text x="77" y="177" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="600">Compounding</text>
          </g>
          {/* Channel 2: Content */}
          <g transform="translate(170, 0)">
            <rect width="155" height="260" rx="14" fill="#1E293B" stroke="#334155" />
            <circle cx="77" cy="45" r="22" fill="#3B82F6" fillOpacity="0.15" />
            <text x="77" y="52" textAnchor="middle" fill="#3B82F6" fontSize="16" fontWeight="bold">CONTENT</text>
            <text x="77" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Storytelling</text>
            <text x="77" y="115" textAnchor="middle" fill="#94A3B8" fontSize="11">Educational blogs</text>
            <text x="77" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">Value creation</text>
            <rect x="20" y="160" width="115" height="26" rx="6" fill="#0F172A" />
            <text x="77" y="177" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="600">Authority</text>
          </g>
          {/* Channel 3: Social */}
          <g transform="translate(340, 0)">
            <rect width="155" height="260" rx="14" fill="#1E293B" stroke="#334155" />
            <circle cx="77" cy="45" r="22" fill="#A855F7" fillOpacity="0.15" />
            <text x="77" y="52" textAnchor="middle" fill="#A855F7" fontSize="18" fontWeight="bold">SOCIAL</text>
            <text x="77" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Social Media</text>
            <text x="77" y="115" textAnchor="middle" fill="#94A3B8" fontSize="11">Community reach</text>
            <text x="77" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">Brand dialogue</text>
            <rect x="20" y="160" width="115" height="26" rx="6" fill="#0F172A" />
            <text x="77" y="177" textAnchor="middle" fill="#C084FC" fontSize="10" fontWeight="600">Engagement</text>
          </g>
          {/* Channel 4: Email */}
          <g transform="translate(510, 0)">
            <rect width="155" height="260" rx="14" fill="#1E293B" stroke="#334155" />
            <circle cx="77" cy="45" r="22" fill="#F59E0B" fillOpacity="0.15" />
            <text x="77" y="52" textAnchor="middle" fill="#F59E0B" fontSize="18" fontWeight="bold">EMAIL</text>
            <text x="77" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Owned Audience</text>
            <text x="77" y="115" textAnchor="middle" fill="#94A3B8" fontSize="11">Direct nurture</text>
            <text x="77" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">High conversion</text>
            <rect x="20" y="160" width="115" height="26" rx="6" fill="#0F172A" />
            <text x="77" y="177" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="600">Retention</text>
          </g>
          {/* Channel 5: Analytics */}
          <g transform="translate(680, 0)">
            <rect width="155" height="260" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <circle cx="77" cy="45" r="22" fill="#10B981" fillOpacity="0.2" />
            <text x="77" y="52" textAnchor="middle" fill="#34D399" fontSize="17" fontWeight="bold">DATA</text>
            <text x="77" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Analytics</text>
            <text x="77" y="115" textAnchor="middle" fill="#94A3B8" fontSize="11">Measurement</text>
            <text x="77" y="130" textAnchor="middle" fill="#94A3B8" fontSize="11">Continuous ROI</text>
            <rect x="20" y="160" width="115" height="26" rx="6" fill="#059669" />
            <text x="77" y="177" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Optimization</text>
          </g>
        </g>
        <text x="480" y="425" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Modern Digital Marketing Architecture
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 4.1: The Five Core Pillars of a Balanced Digital Marketing Strategy</span>
        <span className="font-mono text-emerald-400">Marketing Framework</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 5 Illustration:
 * Content Marketing Strategy Lifecycle
 */
export const ContentMarketingIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-5" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-5" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-5)" />
        <rect width="960" height="480" fill="url(#grid-pattern-5)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          CONTENT MARKETING STRATEGY CYCLE
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          The 4-Step Flywheel: Ideate, Create, Distribute, Analyze
        </text>
        <g transform="translate(80, 115)">
          <g transform="translate(0, 0)">
            <rect width="180" height="240" rx="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="35" cy="35" r="16" fill="#0284C7" fillOpacity="0.3" />
            <text x="35" y="41" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="bold">01</text>
            <text x="65" y="40" fill="#FFFFFF" fontSize="16" fontWeight="bold">Research</text>
            <text x="20" y="85" fill="#94A3B8" fontSize="11">• Audience personas</text>
            <text x="20" y="110" fill="#94A3B8" fontSize="11">• Keyword intent mapping</text>
            <text x="20" y="135" fill="#94A3B8" fontSize="11">• Competitor gap review</text>
            <rect x="20" y="180" width="140" height="30" rx="6" fill="#0F172A" />
            <text x="90" y="200" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="600">Topical Authority</text>
          </g>
          <g transform="translate(210, 0)">
            <rect width="180" height="240" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <circle cx="35" cy="35" r="16" fill="#10B981" fillOpacity="0.3" />
            <text x="35" y="41" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">02</text>
            <text x="65" y="40" fill="#FFFFFF" fontSize="16" fontWeight="bold">Creation</text>
            <text x="20" y="85" fill="#94A3B8" fontSize="11">• Comprehensive guides</text>
            <text x="20" y="110" fill="#94A3B8" fontSize="11">• Original visuals & data</text>
            <text x="20" y="135" fill="#94A3B8" fontSize="11">• AEO question answers</text>
            <rect x="20" y="180" width="140" height="30" rx="6" fill="#059669" />
            <text x="90" y="200" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600">High Utility Value</text>
          </g>
          <g transform="translate(420, 0)">
            <rect width="180" height="240" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="35" cy="35" r="16" fill="#D97706" fillOpacity="0.3" />
            <text x="35" y="41" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">03</text>
            <text x="65" y="40" fill="#FFFFFF" fontSize="16" fontWeight="bold">Distribution</text>
            <text x="20" y="85" fill="#94A3B8" fontSize="11">• Search optimization</text>
            <text x="20" y="110" fill="#94A3B8" fontSize="11">• Social syndication</text>
            <text x="20" y="135" fill="#94A3B8" fontSize="11">• Email newsletter loops</text>
            <rect x="20" y="180" width="140" height="30" rx="6" fill="#0F172A" />
            <text x="90" y="200" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="600">Audience Reach</text>
          </g>
          <g transform="translate(630, 0)">
            <rect width="180" height="240" rx="14" fill="#1E293B" stroke="#8B5CF6" strokeWidth="1.5" />
            <circle cx="35" cy="35" r="16" fill="#7C3AED" fillOpacity="0.3" />
            <text x="35" y="41" textAnchor="middle" fill="#A78BFA" fontSize="12" fontWeight="bold">04</text>
            <text x="65" y="40" fill="#FFFFFF" fontSize="16" fontWeight="bold">Refinement</text>
            <text x="20" y="85" fill="#94A3B8" fontSize="11">• Engagement metrics</text>
            <text x="20" y="110" fill="#94A3B8" fontSize="11">• Content refreshes</text>
            <text x="20" y="135" fill="#94A3B8" fontSize="11">• Conversion tracking</text>
            <rect x="20" y="180" width="140" height="30" rx="6" fill="#0F172A" />
            <text x="90" y="200" textAnchor="middle" fill="#A78BFA" fontSize="11" fontWeight="600">Iterative Growth</text>
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Strategic Content Production Model
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 5.1: The Content Marketing Strategy Lifecycle and Continuous Growth Flywheel</span>
        <span className="font-mono text-emerald-400">Content Model</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 6 Illustration:
 * Social Media Marketing Framework
 */
export const SocialMediaIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-6" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-6" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-6)" />
        <rect width="960" height="480" fill="url(#grid-pattern-6)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          SOCIAL MEDIA MARKETING STRATEGY
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          From Audience Awareness to Active Community Engagement
        </text>
        <g transform="translate(100, 110)">
          <rect width="760" height="260" rx="16" fill="#1E293B" stroke="#334155" />
          {/* Step 1 */}
          <g transform="translate(40, 30)">
            <circle cx="40" cy="40" r="26" fill="#EC4899" fillOpacity="0.2" />
            <text x="40" y="46" textAnchor="middle" fill="#F472B6" fontSize="16" fontWeight="bold">01</text>
            <text x="90" y="35" fill="#FFFFFF" fontSize="16" fontWeight="bold">Platform Selection</text>
            <text x="90" y="55" fill="#94A3B8" fontSize="12">Target where your audience spends real time (LinkedIn, X, YouTube, Instagram)</text>
          </g>
          {/* Step 2 */}
          <g transform="translate(40, 105)">
            <circle cx="40" cy="40" r="26" fill="#8B5CF6" fillOpacity="0.2" />
            <text x="40" y="46" textAnchor="middle" fill="#A78BFA" fontSize="16" fontWeight="bold">02</text>
            <text x="90" y="35" fill="#FFFFFF" fontSize="16" fontWeight="bold">Content Value Pillars</text>
            <text x="90" y="55" fill="#94A3B8" fontSize="12">80% educational insight and helpful takeaways, 20% direct promotional invitations</text>
          </g>
          {/* Step 3 */}
          <g transform="translate(40, 180)">
            <circle cx="40" cy="40" r="26" fill="#10B981" fillOpacity="0.2" />
            <text x="40" y="46" textAnchor="middle" fill="#34D399" fontSize="16" fontWeight="bold">03</text>
            <text x="90" y="35" fill="#FFFFFF" fontSize="16" fontWeight="bold">Community & Referral Traffic</text>
            <text x="90" y="55" fill="#94A3B8" fontSize="12">Meaningful replies, active discussions, and strategic referral links to website blog posts</text>
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Social Engagement Fundamentals
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 6.1: The Three Stages of Strategic Social Media Audience Acquisition</span>
        <span className="font-mono text-emerald-400">Social Architecture</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 7 Illustration:
 * Technical SEO Pillars
 */
export const TechnicalSeoIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-7" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-7" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-7)" />
        <rect width="960" height="480" fill="url(#grid-pattern-7)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          TECHNICAL SEO ARCHITECTURE
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Crawlability, Core Web Vitals, and Site Health Infrastructure
        </text>
        <g transform="translate(60, 110)">
          {/* Card 1 */}
          <g transform="translate(0, 0)">
            <rect width="195" height="250" rx="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="20" y="40" fill="#38BDF8" fontSize="13" fontWeight="bold">1. CRAWL & INDEX</text>
            <text x="20" y="65" fill="#FFFFFF" fontSize="16" fontWeight="bold">Access Control</text>
            <text x="20" y="100" fill="#94A3B8" fontSize="11">• XML Sitemap validity</text>
            <text x="20" y="125" fill="#94A3B8" fontSize="11">• robots.txt directives</text>
            <text x="20" y="150" fill="#94A3B8" fontSize="11">• Canonical tags (rel=canonical)</text>
            <text x="20" y="175" fill="#94A3B8" fontSize="11">• Zero 404 broken links</text>
            <rect x="20" y="200" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="217" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="600">Spider Navigation</text>
          </g>
          {/* Card 2 */}
          <g transform="translate(215, 0)">
            <rect width="195" height="250" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <text x="20" y="40" fill="#34D399" fontSize="13" fontWeight="bold">2. CORE WEB VITALS</text>
            <text x="20" y="65" fill="#FFFFFF" fontSize="16" fontWeight="bold">Speed & Polish</text>
            <text x="20" y="100" fill="#94A3B8" fontSize="11">• LCP &lt; 2.5 seconds</text>
            <text x="20" y="125" fill="#94A3B8" fontSize="11">• INP (Interaction responsiveness)</text>
            <text x="20" y="150" fill="#94A3B8" fontSize="11">• CLS &lt; 0.1 layout shift</text>
            <text x="20" y="175" fill="#94A3B8" fontSize="11">• WebP / asset compression</text>
            <rect x="20" y="200" width="155" height="26" rx="6" fill="#059669" />
            <text x="97" y="217" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Google Ranking Signal</text>
          </g>
          {/* Card 3 */}
          <g transform="translate(430, 0)">
            <rect width="195" height="250" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="20" y="40" fill="#FBBF24" fontSize="13" fontWeight="bold">3. STRUCTURE & DATA</text>
            <text x="20" y="65" fill="#FFFFFF" fontSize="16" fontWeight="bold">Schema.org</text>
            <text x="20" y="100" fill="#94A3B8" fontSize="11">• JSON-LD structured data</text>
            <text x="20" y="125" fill="#94A3B8" fontSize="11">• FAQPage rich snippets</text>
            <text x="20" y="150" fill="#94A3B8" fontSize="11">• BreadcrumbList navigation</text>
            <text x="20" y="175" fill="#94A3B8" fontSize="11">• OpenGraph & Twitter tags</text>
            <rect x="20" y="200" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="217" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="600">Rich SERP Snippets</text>
          </g>
          {/* Card 4 */}
          <g transform="translate(645, 0)">
            <rect width="195" height="250" rx="14" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            <text x="20" y="40" fill="#CBD5E1" fontSize="13" fontWeight="bold">4. SECURITY & MOBILITY</text>
            <text x="20" y="65" fill="#FFFFFF" fontSize="16" fontWeight="bold">Foundation</text>
            <text x="20" y="100" fill="#94A3B8" fontSize="11">• Enforce HTTPS / SSL</text>
            <text x="20" y="125" fill="#94A3B8" fontSize="11">• Responsive viewport meta</text>
            <text x="20" y="150" fill="#94A3B8" fontSize="11">• HTTP/2 or HTTP/3 server</text>
            <text x="20" y="175" fill="#94A3B8" fontSize="11">• Clean canonical routing</text>
            <rect x="20" y="200" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="217" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="600">Security & Trust</text>
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Technical SEO Blueprint
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 7.1: Key Components of Technical SEO Crawlability and Performance</span>
        <span className="font-mono text-emerald-400">Technical Audit</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 8 Illustration:
 * Link Building & Backlink Authority Network
 */
export const LinkBuildingIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-8" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-8" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-8)" />
        <rect width="960" height="480" fill="url(#grid-pattern-8)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          LINK BUILDING & DOMAIN AUTHORITY MATRIX
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          How Quality Editorial Backlinks Transmit Search Authority
        </text>
        <g transform="translate(80, 115)">
          {/* External Authoritative Site */}
          <g transform="translate(0, 40)">
            <rect width="230" height="170" rx="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="25" y="35" fill="#38BDF8" fontSize="12" fontWeight="bold">HIGH AUTHORITY SITE</text>
            <text x="25" y="60" fill="#FFFFFF" fontSize="16" fontWeight="bold">Industry Resource</text>
            <text x="25" y="90" fill="#94A3B8" fontSize="11">Domain Rating: 75+</text>
            <text x="25" y="110" fill="#94A3B8" fontSize="11">Relevant contextual topic</text>
            <rect x="25" y="125" width="180" height="26" rx="6" fill="#0F172A" />
            <text x="115" y="142" textAnchor="middle" fill="#38BDF8" fontSize="10">Editorial Anchor Link ↗</text>
          </g>
          {/* Flow Link Arrow */}
          <g transform="translate(245, 120)">
            <line x1="0" y1="0" x2="110" y2="0" stroke="#10B981" strokeWidth="4" strokeDasharray="6 6" />
            <polygon points="110,-8 126,0 110,8" fill="#10B981" />
            <text x="60" y="-14" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">Link Equity (PageRank)</text>
          </g>
          {/* Your Website */}
          <g transform="translate(390, 20)">
            <rect width="400" height="210" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <text x="25" y="35" fill="#34D399" fontSize="12" fontWeight="bold">YOUR TARGET WEB PAGE</text>
            <text x="25" y="60" fill="#FFFFFF" fontSize="17" fontWeight="bold">Digital Growth Guide Article</text>
            <text x="25" y="95" fill="#E2E8F0" fontSize="12">✓ Earns organic ranking trust from search crawlers</text>
            <text x="25" y="120" fill="#E2E8F0" fontSize="12">✓ Receives referral visitors from high-intent readers</text>
            <text x="25" y="145" fill="#E2E8F0" fontSize="12">✓ Passes internal equity downward to supporting pages</text>
            <rect x="25" y="165" width="350" height="30" rx="8" fill="#059669" />
            <text x="200" y="185" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Compounding Organic Rankings & Visibility</text>
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Off-Page Authority Foundations
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 8.1: The Mechanism of Editorial Backlink Equity Transfer in Search Algorithms</span>
        <span className="font-mono text-emerald-400">Link Equity Network</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 9 Illustration:
 * Email Marketing Strategy & Subscriber Lifecycle
 */
export const EmailMarketingIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-9" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-9" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-9)" />
        <rect width="960" height="480" fill="url(#grid-pattern-9)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          EMAIL MARKETING CONVERSION FUNNEL
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Subscriber Lifecycle: Lead Magnet, Welcome Flow, and Retention
        </text>
        <g transform="translate(60, 115)">
          {/* Phase 1 */}
          <g transform="translate(0, 0)">
            <rect width="195" height="240" rx="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="20" y="35" fill="#38BDF8" fontSize="11" fontWeight="bold">PHASE 01</text>
            <text x="20" y="60" fill="#FFFFFF" fontSize="16" fontWeight="bold">Lead Magnet</text>
            <text x="20" y="95" fill="#94A3B8" fontSize="11">• Free SEO checklist</text>
            <text x="20" y="118" fill="#94A3B8" fontSize="11">• Opt-in forms & popups</text>
            <text x="20" y="141" fill="#94A3B8" fontSize="11">• Transparent consent</text>
            <rect x="20" y="185" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="202" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="600">List Building</text>
          </g>
          {/* Phase 2 */}
          <g transform="translate(215, 0)">
            <rect width="195" height="240" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <text x="20" y="35" fill="#34D399" fontSize="11" fontWeight="bold">PHASE 02</text>
            <text x="20" y="60" fill="#FFFFFF" fontSize="16" fontWeight="bold">Welcome Sequence</text>
            <text x="20" y="95" fill="#94A3B8" fontSize="11">• 3-day onboarding series</text>
            <text x="20" y="118" fill="#94A3B8" fontSize="11">• Introduce core mission</text>
            <text x="20" y="141" fill="#94A3B8" fontSize="11">• Best educational posts</text>
            <rect x="20" y="185" width="155" height="26" rx="6" fill="#059669" />
            <text x="97" y="202" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">Immediate Trust</text>
          </g>
          {/* Phase 3 */}
          <g transform="translate(430, 0)">
            <rect width="195" height="240" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="20" y="35" fill="#FBBF24" fontSize="11" fontWeight="bold">PHASE 03</text>
            <text x="20" y="60" fill="#FFFFFF" fontSize="16" fontWeight="bold">Segmentation</text>
            <text x="20" y="95" fill="#94A3B8" fontSize="11">• Group by reader goals</text>
            <text x="20" y="118" fill="#94A3B8" fontSize="11">• Tailored weekly advice</text>
            <text x="20" y="141" fill="#94A3B8" fontSize="11">• Click engagement tags</text>
            <rect x="20" y="185" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="202" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="600">Relevance</text>
          </g>
          {/* Phase 4 */}
          <g transform="translate(645, 0)">
            <rect width="195" height="240" rx="14" fill="#1E293B" stroke="#A855F7" strokeWidth="1.5" />
            <text x="20" y="35" fill="#C084FC" fontSize="11" fontWeight="bold">PHASE 04</text>
            <text x="20" y="60" fill="#FFFFFF" fontSize="16" fontWeight="bold">Conversion & ROI</text>
            <text x="20" y="95" fill="#94A3B8" fontSize="11">• 38:1 average return</text>
            <text x="20" y="118" fill="#94A3B8" fontSize="11">• Repeat traffic driver</text>
            <text x="20" y="141" fill="#94A3B8" fontSize="11">• Direct subscriber bond</text>
            <rect x="20" y="185" width="155" height="26" rx="6" fill="#0F172A" />
            <text x="97" y="202" textAnchor="middle" fill="#C084FC" fontSize="10" fontWeight="600">Owned Channel</text>
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Email Nurture Mechanics
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 9.1: The Four Stages of the Email Marketing Subscriber Journey</span>
        <span className="font-mono text-emerald-400">Subscriber Journey</span>
      </figcaption>
    </figure>
  );
};

/**
 * Article 10 Illustration:
 * Digital Marketing Analytics Dashboard
 */
export const MarketingAnalyticsIllustration: React.FC<IllustrationProps> = ({ className = '', alt }) => {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
      <svg viewBox="0 0 960 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
        <title>{alt}</title>
        <defs>
          <linearGradient id="bg-grad-10" x1="0" y1="0" x2="960" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1329" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <pattern id="grid-pattern-10" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="960" height="480" fill="url(#bg-grad-10)" />
        <rect width="960" height="480" fill="url(#grid-pattern-10)" />
        <text x="480" y="44" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="0.1em">
          DIGITAL MARKETING ANALYTICS DASHBOARD
        </text>
        <text x="480" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="700">
          Tracking Traffic Acquisition, User Behavior, and Conversion KPIs
        </text>
        <g transform="translate(60, 105)">
          {/* KPI 1 */}
          <g transform="translate(0, 0)">
            <rect width="195" height="110" rx="12" fill="#1E293B" stroke="#334155" />
            <text x="18" y="32" fill="#94A3B8" fontSize="11" fontWeight="600">TOTAL SESSIONS</text>
            <text x="18" y="68" fill="#FFFFFF" fontSize="26" fontWeight="bold">24,580</text>
            <text x="18" y="92" fill="#10B981" fontSize="11" fontWeight="bold">+34.2% MoM Organic</text>
          </g>
          {/* KPI 2 */}
          <g transform="translate(215, 0)">
            <rect width="195" height="110" rx="12" fill="#1E293B" stroke="#334155" />
            <text x="18" y="32" fill="#94A3B8" fontSize="11" fontWeight="600">AVG. ENGAGEMENT TIME</text>
            <text x="18" y="68" fill="#FFFFFF" fontSize="26" fontWeight="bold">3m 42s</text>
            <text x="18" y="92" fill="#10B981" fontSize="11" fontWeight="bold">+18% Content Depth</text>
          </g>
          {/* KPI 3 */}
          <g transform="translate(430, 0)">
            <rect width="195" height="110" rx="12" fill="#1E293B" stroke="#334155" />
            <text x="18" y="32" fill="#94A3B8" fontSize="11" fontWeight="600">CONVERSION RATE</text>
            <text x="18" y="68" fill="#FFFFFF" fontSize="26" fontWeight="bold">4.8%</text>
            <text x="18" y="92" fill="#10B981" fontSize="11" fontWeight="bold">+1.2% Qualified Leads</text>
          </g>
          {/* KPI 4 */}
          <g transform="translate(645, 0)">
            <rect width="195" height="110" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
            <text x="18" y="32" fill="#34D399" fontSize="11" fontWeight="700">ORGANIC REVENUE / ROI</text>
            <text x="18" y="68" fill="#FFFFFF" fontSize="26" fontWeight="bold">$18,450</text>
            <text x="18" y="92" fill="#10B981" fontSize="11" fontWeight="bold">4.2x ROAS Equivalent</text>
          </g>
          {/* Bar Chart Area */}
          <g transform="translate(0, 130)">
            <rect width="840" height="135" rx="14" fill="#1E293B" stroke="#334155" />
            <text x="25" y="30" fill="#FFFFFF" fontSize="14" fontWeight="bold">Traffic Acquisition by Channel</text>
            <text x="25" y="62" fill="#94A3B8" fontSize="11">Organic Search (58%)</text>
            <rect x="180" y="52" width="380" height="14" rx="4" fill="#10B981" />
            <text x="25" y="87" fill="#94A3B8" fontSize="11">Direct / Bookmarks (22%)</text>
            <rect x="180" y="77" width="160" height="14" rx="4" fill="#3B82F6" />
            <text x="25" y="112" fill="#94A3B8" fontSize="11">Social & Referral (20%)</text>
            <rect x="180" y="102" width="130" height="14" rx="4" fill="#A855F7" />
          </g>
        </g>
        <text x="480" y="420" textAnchor="middle" fill="#64748B" fontSize="12">
          Source: Digital Growth Guide Educational Curriculum • Analytics & Performance Reporting
        </text>
      </svg>
      <figcaption className="bg-slate-900/95 px-6 py-3 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <span>Figure 10.1: Key Performance Indicators (KPIs) in Digital Marketing Analytics</span>
        <span className="font-mono text-emerald-400">Analytics Dashboard</span>
      </figcaption>
    </figure>
  );
};
