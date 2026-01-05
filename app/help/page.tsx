'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Language } from '@/types';
import { ChevronDown, ChevronUp, BookOpen, HelpCircle, Video, FileText } from 'lucide-react';

interface FAQItem {
  question: string;
  questionBn?: string;
  questionAr?: string;
  answer: string;
  answerBn?: string;
  answerAr?: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I access NCTB textbooks?',
    questionBn: 'আমি কিভাবে এনসিটিবি পাঠ্যবই অ্যাক্সেস করব?',
    questionAr: 'كيف يمكنني الوصول إلى كتب NCTB؟',
    answer: 'Go to the Books page, select your class and education medium, then click on any book to view or download it. You can also use the search feature to find specific books.',
    answerBn: 'বই পৃষ্ঠায় যান, আপনার শ্রেণি এবং শিক্ষা মাধ্যম নির্বাচন করুন, তারপর যেকোনো বই দেখতে বা ডাউনলোড করতে ক্লিক করুন। আপনি নির্দিষ্ট বই খুঁজে পেতে অনুসন্ধান বৈশিষ্ট্যও ব্যবহার করতে পারেন।',
    answerAr: 'انتقل إلى صفحة الكتب، حدد صفك ووسيط التعليم، ثم انقر على أي كتاب لعرضه أو تنزيله.'
  },
  {
    question: 'How do I use the highlighting feature?',
    questionBn: 'আমি কিভাবে হাইলাইট বৈশিষ্ট্য ব্যবহার করব?',
    questionAr: 'كيف يمكنني استخدام ميزة التمييز؟',
    answer: 'While reading a book, select the text you want to highlight, then click the "Highlight" button in the toolbar. You can choose different colors for different types of content. Click on a highlighted section to remove it.',
    answerBn: 'একটি বই পড়ার সময়, আপনি যে টেক্সট হাইলাইট করতে চান তা নির্বাচন করুন, তারপর টুলবারে "হাইলাইট" বোতামে ক্লিক করুন। আপনি বিভিন্ন ধরণের বিষয়বস্তুর জন্য বিভিন্ন রঙ চয়ন করতে পারেন।',
    answerAr: 'أثناء قراءة كتاب، حدد النص الذي تريد تمييزه، ثم انقر على زر "التمييز" في شريط الأدوات.'
  },
  {
    question: 'Can I use the text-to-speech feature?',
    questionBn: 'আমি কি টেক্সট-টু-স্পীচ বৈশিষ্ট্য ব্যবহার করতে পারি?',
    questionAr: 'هل يمكنني استخدام ميزة تحويل النص إلى كلام؟',
    answer: 'Yes! Select any text in a book and click the "Listen" button. The system will read the text aloud in the appropriate language (Bangla, English, or Arabic). This feature requires a modern browser with speech synthesis support.',
    answerBn: 'হ্যাঁ! একটি বইয়ের যেকোনো টেক্সট নির্বাচন করুন এবং "শুনুন" বোতামে ক্লিক করুন। সিস্টেম উপযুক্ত ভাষায় (বাংলা, ইংরেজি বা আরবি) টেক্সট উচ্চস্বরে পড়বে।',
    answerAr: 'نعم! حدد أي نص في كتاب وانقر على زر "استمع". سيقرأ النظام النص بصوت عالٍ باللغة المناسبة.'
  },
  {
    question: 'How do I save bookmarks?',
    questionBn: 'আমি কিভাবে বুকমার্ক সংরক্ষণ করব?',
    questionAr: 'كيف يمكنني حفظ الإشارات المرجعية؟',
    answer: 'Click the "Bookmark" button while reading to save your current position. Your bookmarks are saved in your browser and will be available when you return to the book.',
    answerBn: 'আপনার বর্তমান অবস্থান সংরক্ষণ করতে পড়ার সময় "বুকমার্ক" বোতামে ক্লিক করুন। আপনার বুকমার্কগুলি আপনার ব্রাউজারে সংরক্ষিত হয় এবং বইতে ফিরে এলে উপলব্ধ থাকবে।',
    answerAr: 'انقر على زر "الإشارة المرجعية" أثناء القراءة لحفظ موضعك الحالي.'
  },
  {
    question: 'How do I ask questions to the AI Teacher?',
    questionBn: 'আমি কিভাবে এআই শিক্ষককে প্রশ্ন জিজ্ঞাসা করব?',
    questionAr: 'كيف يمكنني طرح الأسئلة على معلم الذكاء الاصطناعي؟',
    answer: 'Visit the AI Tutor page, type your question in any language (Bangla, English, or Arabic), and click Send. The AI will provide helpful answers and explanations for your academic questions.',
    answerBn: 'এআই টিউটর পৃষ্ঠায় যান, যেকোনো ভাষায় (বাংলা, ইংরেজি বা আরবি) আপনার প্রশ্ন টাইপ করুন এবং পাঠান ক্লিক করুন। এআই আপনার একাডেমিক প্রশ্নের জন্য সহায়ক উত্তর এবং ব্যাখ্যা প্রদান করবে।',
    answerAr: 'قم بزيارة صفحة مدرس الذكاء الاصطناعي، اكتب سؤالك بأي لغة، وانقر على إرسال.'
  },
  {
    question: 'Is the platform free to use?',
    questionBn: 'প্ল্যাটফর্মটি কি বিনামূল্যে ব্যবহার করা যায়?',
    questionAr: 'هل المنصة مجانية للاستخدام؟',
    answer: 'Yes, Digital Iskool is completely free for all students in Bangladesh. We provide access to NCTB books, study materials, and AI tutoring at no cost.',
    answerBn: 'হ্যাঁ, ডিজিটাল ইস্কুল বাংলাদেশের সকল শিক্ষার্থীর জন্য সম্পূর্ণ বিনামূল্যে। আমরা কোন খরচ ছাড়াই এনসিটিবি বই, অধ্যয়ন সামগ্রী এবং এআই টিউটরিং অ্যাক্সেস প্রদান করি।',
    answerAr: 'نعم، Digital Iskool مجاني تمامًا لجميع الطلاب في بنغلاديش.'
  },
  {
    question: 'Can I access the platform on my mobile phone?',
    questionBn: 'আমি কি আমার মোবাইল ফোনে প্ল্যাটফর্ম অ্যাক্সেস করতে পারি?',
    questionAr: 'هل يمكنني الوصول إلى المنصة على هاتفي المحمول؟',
    answer: 'Absolutely! Digital Iskool is fully responsive and optimized for mobile devices. You can access all features including book reading, practice questions, and AI tutoring on your smartphone or tablet.',
    answerBn: 'একদম! ডিজিটাল ইস্কুল সম্পূর্ণরূপে প্রতিক্রিয়াশীল এবং মোবাইল ডিভাইসের জন্য অপ্টিমাইজ করা। আপনি আপনার স্মার্টফোন বা ট্যাবলেটে বই পড়া, প্র্যাকটিস প্রশ্ন এবং এআই টিউটরিং সহ সমস্ত বৈশিষ্ট্য অ্যাক্সেস করতে পারেন।',
    answerAr: 'بالتأكيد! Digital Iskool متجاوب بالكامل ومحسّن للأجهزة المحمولة.'
  },
  {
    question: 'How do I switch between dark and light mode?',
    questionBn: 'আমি কিভাবে ডার্ক এবং লাইট মোডের মধ্যে পরিবর্তন করব?',
    questionAr: 'كيف يمكنني التبديل بين الوضع الداكن والفاتح؟',
    answer: 'Click the sun/moon icon in the top navigation bar to toggle between light and dark modes. The system will remember your preference.',
    answerBn: 'লাইট এবং ডার্ক মোডের মধ্যে টগল করতে শীর্ষ নেভিগেশন বারে সূর্য/চাঁদ আইকনে ক্লিক করুন। সিস্টেম আপনার পছন্দ মনে রাখবে।',
    answerAr: 'انقر على أيقونة الشمس / القمر في شريط التنقل العلوي للتبديل بين الوضعين الفاتح والداكن.'
  },
];

export default function HelpPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getQuestion = (faq: FAQItem) => {
    if (language === 'bn' && faq.questionBn) return faq.questionBn;
    if (language === 'ar' && faq.questionAr) return faq.questionAr;
    return faq.question;
  };

  const getAnswer = (faq: FAQItem) => {
    if (language === 'bn' && faq.answerBn) return faq.answerBn;
    if (language === 'ar' && faq.answerAr) return faq.answerAr;
    return faq.answer;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {language === 'en' ? 'Help Center' : language === 'bn' ? 'সহায়তা কেন্দ্র' : 'مركز المساعدة'}
        </h1>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-lg">
                {language === 'en' ? 'Getting Started' : language === 'bn' ? 'শুরু করা' : 'البدء'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'Learn how to navigate and use Digital Iskool'
                  : language === 'bn'
                  ? 'ডিজিটাল ইস্কুল নেভিগেট এবং ব্যবহার করতে শিখুন'
                  : 'تعلم كيفية التنقل واستخدام Digital Iskool'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-lg">
                {language === 'en' ? 'Study Guides' : language === 'bn' ? 'স্টাডি গাইড' : 'أدلة الدراسة'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Access comprehensive study materials'
                  : language === 'bn'
                  ? 'বিস্তৃত অধ্যয়ন সামগ্রী অ্যাক্সেস করুন'
                  : 'الوصول إلى مواد الدراسة الشاملة'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Video className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-lg">
                {language === 'en' ? 'Video Tutorials' : language === 'bn' ? 'ভিডিও টিউটোরিয়াল' : 'دروس الفيديو'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Watch tutorials on using the platform'
                  : language === 'bn'
                  ? 'প্ল্যাটফর্ম ব্যবহারের টিউটোরিয়াল দেখুন'
                  : 'شاهد دروس حول استخدام المنصة'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <HelpCircle className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-lg">
                {language === 'en' ? 'Contact Support' : language === 'bn' ? 'সহায়তা যোগাযোগ' : 'الاتصال بالدعم'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Get help from our support team'
                  : language === 'bn'
                  ? 'আমাদের সহায়তা দল থেকে সাহায্য পান'
                  : 'احصل على المساعدة من فريق الدعم'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Frequently Asked Questions' : language === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন' : 'الأسئلة المتكررة'}
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index}>
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{getQuestion(faq)}</CardTitle>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{getAnswer(faq)}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Still Need Help?' : language === 'bn' ? 'এখনও সাহায্য প্রয়োজন?' : 'هل ما زلت بحاجة إلى مساعدة؟'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'en'
              ? 'Contact our support team at'
              : language === 'bn'
              ? 'আমাদের সহায়তা দলের সাথে যোগাযোগ করুন'
              : 'اتصل بفريق الدعم على'}
            {' '}
            <a href="mailto:info@digitaliskool.bd" className="text-primary hover:underline">
              info@digitaliskool.bd
            </a>
          </p>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
