import React from 'react';

export default function PromptBlock({ label, id, children }) {
  return (
    <div className="mt-4" id={id}>
      <div className="rounded-md border bg-gray-50 p-4">
        <div className="mb-2 text-sm font-semibold text-gray-900">{label}</div>
        <pre className="whitespace-pre-wrap rounded bg-white p-4 text-sm leading-6 text-gray-800 shadow-inner">
{children}
        </pre>
      </div>
    </div>
  );
}
