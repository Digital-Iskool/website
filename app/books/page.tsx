'use client';

import { useState, useEffect, Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BookCard } from '@/components/books/book-card';
import { Language, EducationMedium } from '@/types';
import { translations } from '@/lib/translations';
import { books, classes, subjectsByMedium } from '@/data/books';
import { useSearchParams } from 'next/navigation';

function BooksContent() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<EducationMedium>('bangla');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  
  const searchParams = useSearchParams();
  const t = translations[language];
  const isRTL = language === 'ar';

  useEffect(() => {
    const classParam = searchParams.get('class');
    const mediumParam = searchParams.get('medium');
    
    if (classParam) {
      setSelectedClass(parseInt(classParam));
    }
    if (mediumParam && ['bangla', 'english', 'madrasa'].includes(mediumParam)) {
      setSelectedMedium(mediumParam as EducationMedium);
    }
  }, [searchParams]);

  const filteredBooks = books.filter(book => {
    if (selectedClass !== null && book.class !== selectedClass) return false;
    if (book.medium !== selectedMedium) return false;
    if (selectedSubject !== 'all' && book.subject !== selectedSubject) return false;
    return true;
  });

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t.books.title}</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Medium Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.home.selectMedium}
              </label>
              <select
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value as EducationMedium)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="bangla">{t.medium.bangla}</option>
                <option value="english">{t.medium.english}</option>
                <option value="madrasa">{t.medium.madrasa}</option>
              </select>
            </div>

            {/* Class Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.class.select}
              </label>
              <select
                value={selectedClass || ''}
                onChange={(e) => setSelectedClass(e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Classes</option>
                {classes.map(classNum => (
                  <option key={classNum} value={classNum}>
                    {t.class.label} {classNum}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Subject' : language === 'bn' ? 'বিষয়' : 'الموضوع'}
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Subjects</option>
                {subjectsByMedium[selectedMedium].map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">{t.books.noBooks}</p>
          </div>
        )}
      </main>

      <Footer language={language} />
    </div>
  );
}

export default function BooksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BooksContent />
    </Suspense>
  );
}
