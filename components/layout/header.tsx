'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap, MessageSquare } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const isRTL = language === 'ar';

  return (
    <header className={`bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold hidden sm:inline">{t.home.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="hover:opacity-80 transition text-sm font-medium">
              {t.nav.home}
            </Link>
            <Link href="/books" className="hover:opacity-80 transition text-sm font-medium">
              {t.nav.books}
            </Link>
            <Link href="/guides" className="hover:opacity-80 transition text-sm font-medium">
              {t.nav.guides}
            </Link>
            <Link href="/practice" className="hover:opacity-80 transition text-sm font-medium">
              {t.nav.practice}
            </Link>
            <Link href="/exams" className="hover:opacity-80 transition text-sm font-medium">
              {t.nav.exams}
            </Link>
            <Link href="/ai-tutor" className="hover:opacity-80 transition flex items-center text-sm font-medium">
              <MessageSquare className="h-4 w-4 mr-1" />
              {t.nav.aiTutor}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-primary-foreground/10 text-primary-foreground px-3 py-1 rounded-md text-sm border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
              <option value="ar">العربية</option>
            </select>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-primary-foreground/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 border-t border-primary-foreground/20">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/books"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.books}
            </Link>
            <Link
              href="/guides"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.guides}
            </Link>
            <Link
              href="/practice"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.practice}
            </Link>
            <Link
              href="/exams"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.exams}
            </Link>
            <Link
              href="/ai-tutor"
              className="block px-4 py-2 hover:bg-primary-foreground/10 rounded"
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
