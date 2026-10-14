import React from 'react';
import { HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface AeoBlockProps {
  question: string;
  directAnswer: string;
  children: React.ReactNode;
  id?: string;
}

export const AeoBlock: React.FC<AeoBlockProps> = ({
  question,
  directAnswer,
  children,
  id,
}) => {
  return (
    <section className="my-10" id={id}>
      {/* Question-form H2 heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 flex items-start gap-3">
        <HelpCircle className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" aria-hidden="true" />
        <span>{question}</span>
      </h2>

      {/* Answer Engine Optimization (AEO) Direct Answer Callout */}
      <div className="aeo-callout p-5 sm:p-6 rounded-xl border border-emerald-200/80 shadow-sm mb-6 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase bg-emerald-600 text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Answer (AEO Summary)
          </span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Optimized for Search Engine Snippets & AI Overviews
          </span>
        </div>
        <p className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed mb-1">
          {directAnswer}
        </p>
      </div>

      {/* In-depth, comprehensive explanation */}
      <div className="text-slate-700 space-y-4 leading-relaxed text-base sm:text-[17px]">
        {children}
      </div>
    </section>
  );
};
