'use client';

import Image from 'next/image';
import { BookOpen, Download } from 'lucide-react';
import { Book, Language } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { translations } from '@/lib/translations';

interface BookCardProps {
  book: Book;
  language: Language;
}

export function BookCard({ book, language }: BookCardProps) {
  const t = translations[language];
  const isRTL = language === 'ar';
  
  const getTitle = () => {
    if (language === 'bn' && book.titleBn) return book.titleBn;
    if (language === 'ar' && book.titleAr) return book.titleAr;
    return book.title;
  };

  const getSubject = () => {
    if (language === 'bn' && book.subjectBn) return book.subjectBn;
    if (language === 'ar' && book.subjectAr) return book.subjectAr;
    return book.subject;
  };

  const getDescription = () => {
    if (language === 'bn' && book.descriptionBn) return book.descriptionBn;
    if (language === 'ar' && book.descriptionAr) return book.descriptionAr;
    return book.description;
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${isRTL ? 'rtl' : ''}`}>
      <CardHeader>
        <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
          {book.coverImage ? (
            <Image 
              src={book.coverImage} 
              alt={getTitle()} 
              fill 
              className="object-cover rounded-md"
            />
          ) : (
            <BookOpen className="h-24 w-24 text-blue-500" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg mb-2">{getTitle()}</CardTitle>
        <div className="space-y-1 text-sm text-gray-600">
          <p><strong>{t.class.label}:</strong> {book.class}</p>
          <p><strong>Subject:</strong> {getSubject()}</p>
          <p><strong>Medium:</strong> {t.medium[book.medium]}</p>
          {getDescription() && (
            <p className="text-xs mt-2">{getDescription()}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" className="flex-1">
          <BookOpen className="h-4 w-4 mr-1" />
          {t.books.viewBook}
        </Button>
        {book.pdfUrl && (
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
