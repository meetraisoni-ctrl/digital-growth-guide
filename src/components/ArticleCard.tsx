import React from 'react';
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { ArticleData } from '../types';
import {
  SeoEngineIllustration,
  KeywordResearchIllustration,
  OnPageSeoIllustration,
  DigitalMarketingIllustration,
  ContentMarketingIllustration,
  SocialMediaIllustration,
  TechnicalSeoIllustration,
  LinkBuildingIllustration,
  EmailMarketingIllustration,
  MarketingAnalyticsIllustration,
} from './ArticleIllustrations';

interface ArticleCardProps {
  article: ArticleData;
  onNavigate: (path: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onNavigate,
  featured = false,
}) => {
  const renderIllustration = () => {
    switch (article.id) {
      case 'seo-guide-for-beginners':
        return <SeoEngineIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'keyword-research-guide':
        return <KeywordResearchIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'on-page-seo-techniques':
        return <OnPageSeoIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'what-is-digital-marketing':
        return <DigitalMarketingIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'content-marketing-strategy':
        return <ContentMarketingIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'social-media-marketing-guide':
        return <SocialMediaIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'technical-seo-basics':
        return <TechnicalSeoIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'link-building-guide':
        return <LinkBuildingIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'email-marketing-guide':
        return <EmailMarketingIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      case 'digital-marketing-analytics':
        return <MarketingAnalyticsIllustration alt={article.imageAlt} className="w-full h-48 sm:h-52" />;
      default:
        return null;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(article.slug);
  };

  return (
    <article
      className={`group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden ${
        featured ? 'ring-2 ring-emerald-500/20' : ''
      }`}
    >
      {/* Visual Header / Illustration */}
      <div className="relative overflow-hidden bg-slate-900">
        <a
          href={article.slug}
          onClick={handleClick}
          tabIndex={-1}
          aria-hidden="true"
          className="block transition-transform duration-300 group-hover:scale-[1.02]"
        >
          {renderIllustration()}
        </a>
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Core SEO Module</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
              <Tag className="w-3 h-3" />
              {article.seoMetadata.mainKeyword}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
            <a href={article.slug} onClick={handleClick} className="focus:outline-none focus:underline">
              {article.title}
            </a>
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {article.summary}
          </p>
        </div>

        {/* Footer with Descriptive Anchor Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {article.slug}
          </span>
          <a
            href={article.slug}
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors"
            aria-label={`Read the complete ${article.title}`}
          >
            <span>Read full guide</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};
