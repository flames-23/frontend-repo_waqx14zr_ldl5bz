import React from 'react';

export default function ScreenCard({ title, children, index }) {
  return (
    <section className="scroll-mt-20" id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>      
      <div className="mx-auto mb-6 mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {index ? `${index}. ${title}` : title}
            </h2>
            <a
              href={`#${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-uizard`}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Jump to Uizard Prompt
            </a>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
