'use client';

import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <footer className={`bg-card border-t mt-16 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">{t.home.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t.home.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/books" className="hover:text-foreground transition">
                  {t.nav.books}
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:text-foreground transition">
                  {t.nav.guides}
                </a>
              </li>
              <li>
                <a href="/practice" className="hover:text-foreground transition">
                  {t.nav.practice}
                </a>
              </li>
              <li>
                <a href="/ai-tutor" className="hover:text-foreground transition">
                  {t.nav.aiTutor}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@digitaliskool.bd</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+880 1XXX-XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Digital Iskool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
