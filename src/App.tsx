import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SeoGuidePage } from './pages/SeoGuidePage';
import { KeywordResearchPage } from './pages/KeywordResearchPage';
import { OnPageSeoPage } from './pages/OnPageSeoPage';
import { ProjectDocsModal } from './components/ProjectDocsModal';
import { Compass, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Normalize path from window.location
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  const [docsModalOpen, setDocsModalOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept in-app navigation
  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Normalize path string (handle trailing slash flexibility)
  const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1
    ? currentPath
    : currentPath === '/' ? '/' : `${currentPath}/`;

  // Route selector
  const renderCurrentPage = () => {
    if (normalizedPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenDocs={() => setDocsModalOpen(true)}
        />
      );
    }

    if (normalizedPath === '/seo-guide-for-beginners/') {
      return <SeoGuidePage onNavigate={navigate} />;
    }

    if (normalizedPath === '/keyword-research-guide/') {
      return <KeywordResearchPage onNavigate={navigate} />;
    }

    if (normalizedPath === '/on-page-seo-techniques/') {
      return <OnPageSeoPage onNavigate={navigate} />;
    }

    if (normalizedPath === '/project-documentation/') {
      return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Step 7: College SEO Project Documentation
            </h1>
            <p className="text-slate-600 mb-6 text-sm">
              The internal project documentation matrix is accessible via the modal.
            </p>
            <button
              onClick={() => setDocsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 shadow-sm"
            >
              Open Keyword Research Matrix
            </button>
            <div className="mt-8">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="text-slate-600 text-sm hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    // 404 Not Found Page
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
            404
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            The requested page <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">{currentPath}</code> does not exist on Digital Growth Guide.
          </p>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>
        </div>
      </main>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        currentPath={normalizedPath}
        onNavigate={navigate}
        onOpenDocs={() => setDocsModalOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1">{renderCurrentPage()}</div>

      {/* Site Footer */}
      <Footer
        onNavigate={navigate}
        onOpenDocs={() => setDocsModalOpen(true)}
      />

      {/* Step 7 Project Documentation Modal */}
      <ProjectDocsModal
        isOpen={docsModalOpen}
        onClose={() => setDocsModalOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
