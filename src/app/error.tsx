'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-bg">
      <div className="bg-surface border border-border rounded-2xl p-8 max-w-md w-full text-center shadow-pill">
        <div className="w-16 h-16 bg-primary-tint text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <h2 className="font-display text-2xl font-medium text-ink mb-2">Something went wrong</h2>
        <p className="text-ink-soft mb-6 text-sm">
          We encountered an error while loading this page.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-primary hover:bg-primary-deep text-white font-ui font-bold text-sm uppercase tracking-[0.05em] py-2.5 px-4 rounded-full transition-colors"
          >
            Try again
          </button>
          <Link href="/" className="text-primary hover:underline text-sm mt-2">
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
