'use client';

import { useState } from 'react';
import { BookOpen, FileText, Brain, ClipboardList, Award, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Language, EducationMedium } from '@/types';
import { translations } from '@/lib/translations';
import { classes } from '@/data/books';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<EducationMedium | null>(null);

  const t = translations[language];
  const isRTL = language === 'ar';

  const features = [
    {
      icon: BookOpen,
      title: t.home.features.books,
      description: language === 'en' 
        ? 'Access all NCTB textbooks from Class 0 to 12' 
        : language === 'bn'
        ? 'শ্রেণি ০ থেকে ১২ পর্যন্ত সকল এনসিটিবি পাঠ্যবই অ্যাক্সেস করুন'
        : 'الوصول إلى جميع كتب NCTB من الصف 0 إلى 12',
      href: '/books'
    },
    {
      icon: FileText,
      title: t.home.features.guides,
      description: language === 'en'
        ? 'Comprehensive study guides for better understanding'
        : language === 'bn'
        ? 'ভাল বোঝার জন্য বিস্তৃত স্টাডি গাইড'
        : 'أدلة دراسية شاملة لفهم أفضل',
      href: '/guides'
    },
    {
      icon: ClipboardList,
      title: t.home.features.practice,
      description: language === 'en'
        ? 'Practice questions to test your knowledge'
        : language === 'bn'
        ? 'আপনার জ্ঞান পরীক্ষা করার জন্য প্র্যাকটিস প্রশ্ন'
        : 'أسئلة التدريب لاختبار معرفتك',
      href: '/practice'
    },
    {
      icon: Award,
      title: t.home.features.exams,
      description: language === 'en'
        ? 'Previous board exam questions and solutions'
        : language === 'bn'
        ? 'পূর্ববর্তী বোর্ড পরীক্ষার প্রশ্ন এবং সমাধান'
        : 'أسئلة وحلول امتحانات المجلس السابقة',
      href: '/exams'
    },
    {
      icon: Brain,
      title: t.home.features.aiTutor,
      description: language === 'en'
        ? 'AI-powered teacher to answer your questions 24/7'
        : language === 'bn'
        ? 'আপনার প্রশ্নের উত্তর দিতে ২৪/৭ এআই শিক্ষক'
        : 'معلم الذكاء الاصطناعي للإجابة على أسئلتك على مدار الساعة',
      href: '/ai-tutor'
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <GraduationCap className="h-20 w-20 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">{t.home.title}</h1>
              <p className="text-2xl mb-2">{t.home.subtitle}</p>
              <p className="text-lg mb-8 opacity-90">{t.home.description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/books">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <BookOpen className="h-5 w-5 mr-2" />
                    {t.nav.books}
                  </Button>
                </Link>
                <Link href="/ai-tutor">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Brain className="h-5 w-5 mr-2" />
                    {t.nav.aiTutor}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Class and Medium Selection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t.home.selectClass}</h2>
            
            {/* Medium Selection */}
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">{t.home.selectMedium}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['bangla', 'english', 'madrasa'] as EducationMedium[]).map((medium) => (
                  <button
                    key={medium}
                    onClick={() => setSelectedMedium(medium)}
                    className={`p-6 rounded-lg border-2 transition ${
                      selectedMedium === medium
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h4 className="text-lg font-semibold">{t.medium[medium]}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Class Selection */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                {classes.map((classNum) => (
                  <button
                    key={classNum}
                    onClick={() => setSelectedClass(classNum)}
                    className={`p-4 rounded-lg border-2 font-semibold transition ${
                      selectedClass === classNum
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {t.class.label} {classNum}
                  </button>
                ))}
              </div>
            </div>

            {selectedClass !== null && selectedMedium && (
              <div className="mt-8 text-center">
                <Link href={`/books?class=${selectedClass}&medium=${selectedMedium}`}>
                  <Button size="lg">
                    {t.books.title}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'en' ? 'Our Features' : language === 'bn' ? 'আমাদের বৈশিষ্ট্য' : 'ميزاتنا'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Link key={index} href={feature.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="mb-4">
                        <feature.icon className="h-12 w-12 text-blue-600" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">13</div>
                <div className="text-lg">
                  {language === 'en' ? 'Classes' : language === 'bn' ? 'শ্রেণি' : 'الصفوف'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-lg">
                  {language === 'en' ? 'NCTB Books' : language === 'bn' ? 'এনসিটিবি বই' : 'كتب NCTB'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-lg">
                  {language === 'en' ? 'Mediums' : language === 'bn' ? 'মাধ্যম' : 'الوسائط'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg">
                  {language === 'en' ? 'AI Support' : language === 'bn' ? 'এআই সহায়তা' : 'دعم AI'}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
