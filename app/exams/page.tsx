'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Language, EducationMedium } from '@/types';
import { translations } from '@/lib/translations';
import { examPapers, classes } from '@/data/books';

export default function ExamsPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<EducationMedium>('bangla');
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const filteredExams = examPapers.filter(exam => {
    if (selectedClass !== null && exam.class !== selectedClass) return false;
    if (exam.medium !== selectedMedium) return false;
    return true;
  });

  const getTitle = (exam: typeof examPapers[0]) => {
    if (language === 'bn' && exam.titleBn) return exam.titleBn;
    if (language === 'ar' && exam.titleAr) return exam.titleAr;
    return exam.title;
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t.home.features.exams}</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* Exams List */}
        {filteredExams.length > 0 ? (
          <div className="space-y-6">
            {filteredExams.map(exam => (
              <Card key={exam.id}>
                <CardHeader>
                  <CardTitle>{getTitle(exam)}</CardTitle>
                  <div className="text-sm text-gray-600">
                    {t.class.label} {exam.class} • {exam.year} • {exam.board} Board
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">
                      {exam.questions.length} {language === 'en' ? 'Questions' : language === 'bn' ? 'প্রশ্ন' : 'أسئلة'}
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      {language === 'en' ? 'View Paper' : language === 'bn' ? 'পেপার দেখুন' : 'عرض الورقة'}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? 'No exam papers available for this selection'
                : language === 'bn'
                ? 'এই নির্বাচনের জন্য কোন পরীক্ষার প্রশ্নপত্র উপলব্ধ নেই'
                : 'لا توجد أوراق امتحان متاحة لهذا الاختيار'}
            </p>
          </div>
        )}
      </main>

      <Footer language={language} />
    </div>
  );
}
