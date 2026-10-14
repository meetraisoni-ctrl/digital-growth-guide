import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Search,
  BookOpen,
} from 'lucide-react';
import { KEYWORD_RESEARCH_TABLE_DATA } from '../data/content';

interface ProjectDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const ProjectDocsModal: React.FC<ProjectDocsModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyMarkdown = () => {
    const mdHeader = `| Page Name | Page URL | Main Keyword | Related Keyword 1 | Related Keyword 2 | Search Intent |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
    const mdRows = KEYWORD_RESEARCH_TABLE_DATA.map(
      (r) =>
        `| ${r.pageName} | \`${r.pageUrl}\` | **${r.mainKeyword}** | ${r.relatedKeyword1} | ${r.relatedKeyword2} | ${r.searchIntent} |`
    ).join('\n');

    navigator.clipboard.writeText(mdHeader + mdRows);
    setCopiedFormat('markdown');
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const copyCsv = () => {
    const csvHeader = `"Page name","Page URL","Main keyword","Related keyword 1","Related keyword 2","Search intent"\n`;
    const csvRows = KEYWORD_RESEARCH_TABLE_DATA.map(
      (r) =>
        `"${r.pageName}","${r.pageUrl}","${r.mainKeyword}","${r.relatedKeyword1}","${r.relatedKeyword2}","${r.searchIntent}"`
    ).join('\n');

    navigator.clipboard.writeText(csvHeader + csvRows);
    setCopiedFormat('csv');
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-headline" className="text-lg font-bold">
                College SEO Project Matrix & Documentation
              </h2>
              <p className="text-xs text-slate-300">
                Digital Growth Guide • Official Keyword Research Table & On-Page Audit
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Step 7 Requirement
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mt-1">
                Keyword Research Strategy Table
              </h3>
              <p className="text-xs text-slate-600">
                Standardized mapping across Homepage and the 3 specialized article guides.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm"
              >
                {copiedFormat === 'markdown' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy as Markdown</span>
                  </>
                )}
              </button>
              <button
                onClick={copyCsv}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm"
              >
                {copiedFormat === 'csv' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied CSV!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy as CSV</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-3 px-4 border-b border-slate-800">Page name</th>
                  <th className="py-3 px-4 border-b border-slate-800">Page URL</th>
                  <th className="py-3 px-4 border-b border-slate-800">Main keyword</th>
                  <th className="py-3 px-4 border-b border-slate-800">Related keyword 1</th>
                  <th className="py-3 px-4 border-b border-slate-800">Related keyword 2</th>
                  <th className="py-3 px-4 border-b border-slate-800">Search intent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {KEYWORD_RESEARCH_TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      <button
                        onClick={() => {
                          onClose();
                          onNavigate(row.pageUrl);
                        }}
                        className="text-left hover:text-emerald-700 hover:underline flex items-center gap-1"
                      >
                        {row.pageName}
                        <ExternalLink className="w-3 h-3 text-slate-400 inline" />
                      </button>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-slate-600 bg-slate-50/50">
                      {row.pageUrl}
                    </td>
                    <td className="py-3 px-4 font-medium text-emerald-800 bg-emerald-50/40">
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100/70 border border-emerald-200/60 font-semibold">
                        {row.mainKeyword}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{row.relatedKeyword1}</td>
                    <td className="py-3 px-4 text-slate-700">{row.relatedKeyword2}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        {row.searchIntent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep Audit & Quality Verification Table */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              SEO Quality Audit: Titles, Meta Descriptions & AEO Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KEYWORD_RESEARCH_TABLE_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2.5 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{item.pageName}</span>
                    <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.pageUrl}
                    </span>
                  </div>

                  {/* Title tag with character counter */}
                  <div>
                    <div className="flex items-center justify-between text-slate-500 mb-1">
                      <span className="font-semibold text-slate-700">SEO Title Tag:</span>
                      <span
                        className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                          item.titleLength >= 45 && item.titleLength <= 65
                            ? 'bg-emerald-100 text-emerald-800 font-bold'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.titleLength} characters (Optimal 50–60)
                      </span>
                    </div>
                    <p className="font-mono text-slate-800 bg-slate-50 p-2 rounded border border-slate-200 text-[11.5px] leading-relaxed">
                      {item.titleTag}
                    </p>
                  </div>

                  {/* Meta description with character counter */}
                  <div>
                    <div className="flex items-center justify-between text-slate-500 mb-1">
                      <span className="font-semibold text-slate-700">Meta Description:</span>
                      <span
                        className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                          item.metaLength >= 135 && item.metaLength <= 165
                            ? 'bg-emerald-100 text-emerald-800 font-bold'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.metaLength} characters (Optimal 140–160)
                      </span>
                    </div>
                    <p className="text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 text-[11.5px] leading-relaxed">
                      {item.metaDesc}
                    </p>
                  </div>

                  {/* H1 Heading */}
                  <div>
                    <span className="font-semibold text-slate-700 block mb-0.5">H1 Heading:</span>
                    <p className="font-medium text-slate-900 text-xs">{item.h1}</p>
                  </div>

                  {/* Question-form H2s (AEO) */}
                  <div>
                    <span className="font-semibold text-emerald-800 block mb-1">
                      Verified AEO Question-Form H2 Headings:
                    </span>
                    <ul className="space-y-1 pl-1">
                      {item.aeoHeadings.map((h2, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{h2}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Guide Note */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
            <h4 className="font-bold text-sm text-blue-950 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-700" />
              GitHub & Vercel Deployment Instructions
            </h4>
            <p className="mb-2">
              To deploy this website for your college submission, initialize a Git repository, commit
              the files, push to GitHub, and import it into Vercel with framework preset Vite.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>
                <strong>Client-side Rewrites:</strong> Included in <code className="bg-white px-1.5 py-0.5 rounded border border-blue-300">vercel.json</code> so that all 4 URLs load directly without 404 errors.
              </li>
              <li>
                <strong>Sitemap & Robots:</strong> Provided at <code className="bg-white px-1.5 py-0.5 rounded border border-blue-300">/sitemap.xml</code> and <code className="bg-white px-1.5 py-0.5 rounded border border-blue-300">/robots.txt</code>.
              </li>
              <li>
                <strong>Canonical URL:</strong> Set to <code className="bg-white px-1.5 py-0.5 rounded border border-blue-300">https://digitalgrowthguide.vercel.app/</code> (simply replace with your custom domain or Vercel URL upon deploy).
              </li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Digital Growth Guide • Educational Assignment Compliance
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
