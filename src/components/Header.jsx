import React from 'react';
import { FileText, Rocket, Share2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <Rocket size={18} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">PolicyPilot Wireframe Prompts</h1>
            <p className="text-xs text-gray-500">v0.dev and Uizard-ready descriptions for a clickable prototype</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#export"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            title="Jump to Export Preview"
          >
            <FileText size={16} />
            Jump to Export Preview
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            title="Back to top"
          >
            <Share2 size={16} />
            Back to top
          </button>
        </div>
      </div>
    </header>
  );
}
