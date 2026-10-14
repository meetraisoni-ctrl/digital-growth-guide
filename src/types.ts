export interface SeoMetadata {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  mainKeyword: string;
  relatedKeyword1: string;
  relatedKeyword2: string;
  searchIntent: string;
  ogType: 'website' | 'article';
  publishDate?: string;
  modifiedDate?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  h1: string;
  subtitle: string;
  readTime: string;
  seoMetadata: SeoMetadata;
  imageAlt: string;
  summary: string;
  faqs: FaqItem[];
}
