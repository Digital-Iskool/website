'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIChatbot } from '@/components/chatbot/ai-chatbot';
import { Language } from '@/types';
import { translations } from '@/lib/translations';

export default function AITutorPage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">{t.chatbot.title}</h1>
          <p className="text-center text-gray-600 mb-8">
            {language === 'en' 
              ? 'Ask your AI teacher any question about your studies. Get instant help with homework, concepts, and exam preparation.'
              : language === 'bn'
              ? 'আপনার পড়াশোনা সম্পর্কে যেকোনো প্রশ্ন আপনার এআই শিক্ষককে জিজ্ঞাসা করুন। হোমওয়ার্ক, ধারণা এবং পরীক্ষার প্রস্তুতিতে তাৎক্ষণিক সহায়তা পান।'
              : 'اسأل معلمك بالذكاء الاصطناعي أي سؤال حول دراستك. احصل على مساعدة فورية في الواجبات المنزلية والمفاهيم والتحضير للامتحانات.'}
          </p>
          
          <AIChatbot language={language} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
