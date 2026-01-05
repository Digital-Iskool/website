'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Language, EducationMedium } from '@/types';
import { translations } from '@/lib/translations';
import { practiceQuestions, classes } from '@/data/books';

export default function PracticePage() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedMedium, setSelectedMedium] = useState<EducationMedium>('bangla');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const filteredQuestions = practiceQuestions.filter(q => {
    if (selectedClass !== null && q.class !== selectedClass) return false;
    if (q.medium !== selectedMedium) return false;
    return true;
  });

  const getQuestion = (q: typeof practiceQuestions[0]) => {
    if (language === 'bn' && q.questionBn) return q.questionBn;
    if (language === 'ar' && q.questionAr) return q.questionAr;
    return q.question;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    let correct = 0;
    filteredQuestions.forEach(q => {
      if (answers[q.id] === q.answer) correct++;
    });
    return correct;
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : ''}`}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t.home.features.practice}</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.home.selectMedium}
              </label>
              <select
                value={selectedMedium}
                onChange={(e) => {
                  setSelectedMedium(e.target.value as EducationMedium);
                  setShowResults(false);
                  setAnswers({});
                }}
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
                onChange={(e) => {
                  setSelectedClass(e.target.value ? parseInt(e.target.value) : null);
                  setShowResults(false);
                  setAnswers({});
                }}
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

        {/* Questions */}
        {filteredQuestions.length > 0 ? (
          <>
            <div className="space-y-6 mb-8">
              {filteredQuestions.map((q, index) => (
                <Card key={q.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {language === 'en' ? 'Question' : language === 'bn' ? 'প্রশ্ন' : 'سؤال'} {index + 1}
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      {t.class.label} {q.class} • {q.subject}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 font-medium">{getQuestion(q)}</p>
                    {q.type === 'mcq' && q.options && (
                      <div className="space-y-2">
                        {q.options.map((option, i) => (
                          <label
                            key={i}
                            className={`flex items-center p-3 border rounded-md cursor-pointer transition ${
                              answers[q.id] === option ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                            } ${
                              showResults && option === q.answer
                                ? 'border-green-500 bg-green-50'
                                : showResults && answers[q.id] === option && option !== q.answer
                                ? 'border-red-500 bg-red-50'
                                : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={option}
                              checked={answers[q.id] === option}
                              onChange={(e) => {
                                if (!showResults) {
                                  setAnswers({ ...answers, [q.id]: e.target.value });
                                }
                              }}
                              disabled={showResults}
                              className="mr-3"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {!showResults ? (
              <div className="text-center">
                <Button size="lg" onClick={handleSubmit}>
                  {language === 'en' ? 'Submit Answers' : language === 'bn' ? 'উত্তর জমা দিন' : 'إرسال الإجابات'}
                </Button>
              </div>
            ) : (
              <Card className="bg-blue-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'en' ? 'Your Score' : language === 'bn' ? 'আপনার স্কোর' : 'نتيجتك'}
                  </h3>
                  <p className="text-4xl font-bold text-blue-600">
                    {getScore()} / {filteredQuestions.length}
                  </p>
                  <Button 
                    className="mt-4"
                    onClick={() => {
                      setShowResults(false);
                      setAnswers({});
                    }}
                  >
                    {language === 'en' ? 'Try Again' : language === 'bn' ? 'আবার চেষ্টা করুন' : 'حاول مرة أخرى'}
                  </Button>
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? 'No practice questions available for this selection'
                : language === 'bn'
                ? 'এই নির্বাচনের জন্য কোন প্র্যাকটিস প্রশ্ন উপলব্ধ নেই'
                : 'لا توجد أسئلة تدريب متاحة لهذا الاختيار'}
            </p>
          </div>
        )}
      </main>

      <Footer language={language} />
    </div>
  );
}
