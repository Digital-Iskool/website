'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Language } from '@/types';

// Rendered by app/books/[id]/not-found.tsx for ids that are not in data/books.ts.
export function BookNotFound() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground">The requested book could not be found.</p>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}
