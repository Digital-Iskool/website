'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap, MessageSquare } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const isRTL = language === 'ar';

  return (
    <header className={`bg-blue-600 text-white shadow-lg ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">{t.home.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-200 transition">
              {t.nav.home}
            </Link>
            <Link href="/books" className="hover:text-blue-200 transition">
              {t.nav.books}
            </Link>
            <Link href="/guides" className="hover:text-blue-200 transition">
              {t.nav.guides}
            </Link>
            <Link href="/practice" className="hover:text-blue-200 transition">
              {t.nav.practice}
            </Link>
            <Link href="/exams" className="hover:text-blue-200 transition">
              {t.nav.exams}
            </Link>
            <Link href="/ai-tutor" className="hover:text-blue-200 transition flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              {t.nav.aiTutor}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-blue-700 text-white px-3 py-1 rounded-md text-sm border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="ar">العربية</option>
            </select>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-blue-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/books"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.books}
            </Link>
            <Link
              href="/guides"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.guides}
            </Link>
            <Link
              href="/practice"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.practice}
            </Link>
            <Link
              href="/exams"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.exams}
            </Link>
            <Link
              href="/ai-tutor"
              className="block px-4 py-2 hover:bg-blue-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.aiTutor}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
