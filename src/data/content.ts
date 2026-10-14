import { ArticleData, SeoMetadata } from '../types';

export const SITE_NAME = 'Digital Growth Guide';
export const BASE_URL = 'https://digitalgrowthguide.vercel.app';

export const HOMEPAGE_METADATA: SeoMetadata = {
  title: 'Digital Marketing Guide for Beginners | Digital Growth Guide',
  metaDescription:
    'Explore this digital marketing guide for beginners, covering SEO, keyword research and practical online marketing basics to improve your knowledge.',
  canonicalUrl: `${BASE_URL}/`,
  mainKeyword: 'digital marketing guide',
  relatedKeyword1: 'digital marketing for beginners',
  relatedKeyword2: 'online marketing basics',
  searchIntent: 'Informational',
  ogType: 'website',
};

export const KEYWORD_RESEARCH_TABLE_DATA = [
  {
    pageName: 'Homepage',
    pageUrl: '/',
    mainKeyword: 'digital marketing guide',
    relatedKeyword1: 'digital marketing for beginners',
    relatedKeyword2: 'online marketing basics',
    searchIntent: 'Informational',
    titleTag: 'Digital Marketing Guide for Beginners | Digital Growth Guide',
    titleLength: 58,
    metaDesc: 'Explore this digital marketing guide for beginners, covering SEO, keyword research and practical online marketing basics to improve your knowledge.',
    metaLength: 145,
    h1: 'Digital Marketing Guide: Strategic Fundamentals for Beginners',
    aeoHeadings: [
      'What Is a Digital Marketing Guide and Why Do Beginners Need One?',
      'How Does Organic Search Engine Optimization Fit into Online Marketing Basics?',
    ],
  },
  {
    pageName: 'Article 1: SEO Guide for Beginners',
    pageUrl: '/seo-guide-for-beginners/',
    mainKeyword: 'SEO guide for beginners',
    relatedKeyword1: 'search engine optimization basics',
    relatedKeyword2: 'how SEO works',
    searchIntent: 'Informational',
    titleTag: 'SEO Guide for Beginners: How SEO Works | Digital Growth Guide',
    titleLength: 58,
    metaDesc: 'Learn SEO basics with this beginner-friendly guide to search engines, keyword optimization, on-page SEO and practical ways to improve website visibility.',
    metaLength: 154,
    h1: 'SEO Guide for Beginners: How Search Engine Optimization Works',
    aeoHeadings: [
      'What Is SEO and Why Is It Important for Beginners?',
      'How Does SEO Work to Rank Websites in Search Results?',
    ],
  },
  {
    pageName: 'Article 2: Keyword Research Guide',
    pageUrl: '/keyword-research-guide/',
    mainKeyword: 'keyword research guide',
    relatedKeyword1: 'keyword research tools',
    relatedKeyword2: 'how to find keywords',
    searchIntent: 'Informational',
    titleTag: 'Keyword Research Guide: Find the Right Keywords',
    titleLength: 48,
    metaDesc: 'Learn how to find relevant keywords, understand search intent, evaluate keyword opportunities and organize keywords for your website content.',
    metaLength: 143,
    h1: 'Keyword Research Guide: How to Find the Right Keywords',
    aeoHeadings: [
      'How Do You Find the Right Keywords for Website Content?',
      'What Is Search Intent in Keyword Research and Why Does It Matter?',
    ],
  },
  {
    pageName: 'Article 3: On-Page SEO Techniques',
    pageUrl: '/on-page-seo-techniques/',
    mainKeyword: 'on-page SEO techniques',
    relatedKeyword1: 'on-page SEO checklist',
    relatedKeyword2: 'title tags and meta descriptions',
    searchIntent: 'Informational',
    titleTag: 'On-Page SEO Techniques: Practical Optimization Guide',
    titleLength: 53,
    metaDesc: 'Discover on-page SEO techniques for better content structure, title tags, meta descriptions, image alt text, internal links and website usability.',
    metaLength: 147,
    h1: 'On-Page SEO Techniques: A Practical Optimization Guide',
    aeoHeadings: [
      'What Are the Most Important On-Page SEO Techniques for Web Pages?',
      'How Do You Optimize Title Tags and Meta Descriptions for Search Engines?',
    ],
  },
];

export const ARTICLES_DATA: Record<string, ArticleData> = {
  'seo-guide-for-beginners': {
    id: 'seo-guide-for-beginners',
    slug: '/seo-guide-for-beginners/',
    title: 'SEO Guide for Beginners: How Search Engine Optimization Works',
    h1: 'SEO Guide for Beginners: How Search Engine Optimization Works',
    subtitle:
      'A complete breakdown of search engine mechanics, crawling, indexing, ranking algorithms, and foundational optimization practices.',
    readTime: '7 min read',
    imageAlt:
      'Diagram illustrating how search engine crawlers discover, crawl, index, and rank web pages for search results',
    seoMetadata: {
      title: 'SEO Guide for Beginners: How SEO Works | Digital Growth Guide',
      metaDescription:
        'Learn SEO basics with this beginner-friendly guide to search engines, keyword optimization, on-page SEO and practical ways to improve website visibility.',
      canonicalUrl: `${BASE_URL}/seo-guide-for-beginners/`,
      mainKeyword: 'SEO guide for beginners',
      relatedKeyword1: 'search engine optimization basics',
      relatedKeyword2: 'how SEO works',
      searchIntent: 'Informational',
      ogType: 'article',
      publishDate: '2026-10-14',
    },
    summary:
      'Discover how Google discovers and ranks web pages, the distinction between on-page, off-page, and technical optimization, and actionable steps to build organic visibility.',
    faqs: [
      {
        question: 'How long does SEO take to produce noticeable ranking results?',
        answer:
          'For a brand-new website, search engines usually require between 3 to 6 months to crawl, evaluate trust, and calculate initial authority before organic impressions and rankings stabilize.',
      },
      {
        question: 'What is the biggest difference between SEO and paid advertising (PPC)?',
        answer:
          'Paid search ads require an ongoing budget per click, stopping the moment funding pauses. In contrast, SEO builds compounding organic visibility where high-quality published content continues delivering free, high-intent visitors over years.',
      },
      {
        question: 'Can I do SEO myself as a beginner without expensive software?',
        answer:
          'Yes. Free tools like Google Search Console, Google Trends, and Google Analytics provide accurate first-party insights into what queries visitors use to reach your site and how your pages perform.',
      },
      {
        question: 'Is SEO only about optimizing for Google?',
        answer:
          'While Google holds the dominant market share, modern SEO and Answer Engine Optimization (AEO) also ensure content is parsed and cited accurately by alternative engines, Bing, and generative AI search assistants.',
      },
    ],
  },

  'keyword-research-guide': {
    id: 'keyword-research-guide',
    slug: '/keyword-research-guide/',
    title: 'Keyword Research Guide: How to Find the Right Keywords',
    h1: 'Keyword Research Guide: How to Find the Right Keywords',
    subtitle:
      'Master search intent, evaluate competition difficulty, uncover long-tail opportunities, and map queries to website content.',
    readTime: '8 min read',
    imageAlt:
      'Infographic illustrating the differences between short-tail and long-tail keywords and the four categories of search intent',
    seoMetadata: {
      title: 'Keyword Research Guide: Find the Right Keywords',
      metaDescription:
        'Learn how to find relevant keywords, understand search intent, evaluate keyword opportunities and organize keywords for your website content.',
      canonicalUrl: `${BASE_URL}/keyword-research-guide/`,
      mainKeyword: 'keyword research guide',
      relatedKeyword1: 'keyword research tools',
      relatedKeyword2: 'how to find keywords',
      searchIntent: 'Informational',
      ogType: 'article',
      publishDate: '2026-10-14',
    },
    summary:
      'Learn how to uncover what your ideal audience is searching for, differentiate between short-tail and long-tail terms, evaluate search volume, and map keywords to individual pages.',
    faqs: [
      {
        question: 'What is the difference between short-tail and long-tail keywords?',
        answer:
          'Short-tail keywords are broad 1-2 word queries with high search volume but ambiguous intent (e.g., "running shoes"). Long-tail keywords are specific 3-5+ word phrases with lower search volume but far higher conversion intent (e.g., "best waterproof trail running shoes for women").',
      },
      {
        question: 'What free keyword research tools are best for college students and beginners?',
        answer:
          'Google Keyword Planner, Google Trends, Google Search Console, AnswerThePublic, and Google Autocomplete are premier free tools that provide real search query data without monthly subscriptions.',
      },
      {
        question: 'How many keywords should I target per page?',
        answer:
          'A reliable best practice is to assign one primary main keyword and two to four closely related semantic secondary keywords to a single page to maintain focused topical relevance without cannibalization.',
      },
      {
        question: 'Why does search intent matter more than raw search volume?',
        answer:
          'Targeting a high-volume keyword with mismatched intent will produce high bounce rates and poor conversions. Search engines reward pages that precisely fulfill what the user wanted when typing the query.',
      },
    ],
  },

  'on-page-seo-techniques': {
    id: 'on-page-seo-techniques',
    slug: '/on-page-seo-techniques/',
    title: 'On-Page SEO Techniques: A Practical Optimization Guide',
    h1: 'On-Page SEO Techniques: A Practical Optimization Guide',
    subtitle:
      'Step-by-step optimization for title tags, meta descriptions, semantic headings, image alt attributes, internal links, and Core Web Vitals.',
    readTime: '8 min read',
    imageAlt:
      'Visual diagram showing the anatomy of an on-page SEO optimized web page including title tag, H1 heading, alt text, and internal links',
    seoMetadata: {
      title: 'On-Page SEO Techniques: Practical Optimization Guide',
      metaDescription:
        'Discover on-page SEO techniques for better content structure, title tags, meta descriptions, image alt text, internal links and website usability.',
      canonicalUrl: `${BASE_URL}/on-page-seo-techniques/`,
      mainKeyword: 'on-page SEO techniques',
      relatedKeyword1: 'on-page SEO checklist',
      relatedKeyword2: 'title tags and meta descriptions',
      searchIntent: 'Informational',
      ogType: 'article',
      publishDate: '2026-10-14',
    },
    summary:
      'Master the elements you directly control on your website: crafting compelling title tags, writing meta descriptions that drive clicks, structuring headings, and optimizing image alt text.',
    faqs: [
      {
        question: 'Do meta descriptions directly impact Google search rankings?',
        answer:
          'Meta descriptions are not a direct algorithmic ranking factor, but they heavily influence the Organic Click-Through Rate (CTR) in search results. A compelling snippet attracts more clicks, signaling relevance to search engines.',
      },
      {
        question: 'What is the recommended character length for title tags and meta descriptions?',
        answer:
          'Aim for 50 to 60 characters (under 600 pixels) for SEO title tags to avoid truncation on desktop and mobile SERPs. Keep meta descriptions between 140 and 160 characters for clean snippet presentation.',
      },
      {
        question: 'Why is descriptive anchor text so important for internal linking?',
        answer:
          'Descriptive anchor text provides crawlers and screen readers with immediate context regarding the destination page topic. Generic anchors like "click here" or "read more" waste valuable contextual relevance.',
      },
      {
        question: 'How do image alt text and compression help on-page SEO?',
        answer:
          'Image compression (such as using WebP format) speeds up page load times, a known Core Web Vitals ranking factor. Descriptive alt text enables search engines to index images in visual search while ensuring accessibility for visually impaired readers.',
      },
    ],
  },
};
