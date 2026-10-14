import React, { useEffect } from 'react';
import { SeoMetadata, FaqItem } from '../types';

interface SeoHeadProps {
  metadata: SeoMetadata;
  path: string;
  articleHeadline?: string;
  faqs?: FaqItem[];
  imageUrl?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  metadata,
  path,
  articleHeadline,
  faqs,
}) => {
  useEffect(() => {
    // 1. Update Title Tag
    document.title = metadata.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metadata.metaDescription);

    // 3. Update Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metadata.canonicalUrl);

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metadata.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metadata.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', metadata.canonicalUrl);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', metadata.ogType);

    // 5. Update Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', metadata.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', metadata.metaDescription);

    // 6. Update Schema.org JSON-LD
    let scriptTag = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (metadata.ogType === 'article' && articleHeadline) {
      const schemaData: Record<string, any> = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            headline: articleHeadline,
            description: metadata.metaDescription,
            url: metadata.canonicalUrl,
            inLanguage: 'en-US',
            author: {
              '@type': 'Organization',
              name: 'Digital Growth Guide Editorial Team',
              url: 'https://digitalgrowthguide.vercel.app/',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Digital Growth Guide',
              url: 'https://digitalgrowthguide.vercel.app/',
            },
            datePublished: metadata.publishDate || '2026-10-14',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': metadata.canonicalUrl,
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://digitalgrowthguide.vercel.app/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: articleHeadline,
                item: metadata.canonicalUrl,
              },
            ],
          },
        ],
      };

      // Add FAQ Schema if FAQs are provided (Answer Engine Optimization)
      if (faqs && faqs.length > 0) {
        schemaData['@graph'].push({
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        });
      }

      scriptTag.textContent = JSON.stringify(schemaData, null, 2);
    } else {
      // Homepage WebSite schema
      const siteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Digital Growth Guide',
        url: 'https://digitalgrowthguide.vercel.app/',
        description: metadata.metaDescription,
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://digitalgrowthguide.vercel.app/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
      scriptTag.textContent = JSON.stringify(siteSchema, null, 2);
    }
  }, [metadata, path, articleHeadline, faqs]);

  return null;
};
