export const translations = {
  en: {
    home: {
      title: 'Digital Iskool',
      subtitle: 'Online Education Platform for Bangladesh',
      description: 'Access NCTB books, study guides, practice questions, and AI-powered learning assistance for Class 0-12',
      selectClass: 'Select Your Class',
      selectMedium: 'Select Education Medium',
      features: {
        books: 'NCTB Books',
        guides: 'Study Guides',
        practice: 'Practice Questions',
        exams: 'Board Exams',
        aiTutor: 'AI Teacher'
      }
    },
    nav: {
      home: 'Home',
      books: 'Books',
      guides: 'Guides',
      practice: 'Practice',
      exams: 'Exams',
      aiTutor: 'AI Tutor',
      language: 'Language'
    },
    medium: {
      bangla: 'Bangla Medium',
      english: 'English Medium',
      madrasa: 'Madrasa'
    },
    class: {
      label: 'Class',
      select: 'Select Class'
    },
    books: {
      title: 'NCTB Books',
      viewBook: 'View Book',
      download: 'Download PDF',
      noBooks: 'No books available for this selection'
    },
    chatbot: {
      title: 'AI Teacher',
      placeholder: 'Ask your question...',
      send: 'Send',
      greeting: 'Hello! I am your AI teacher. How can I help you today?'
    }
  },
  bn: {
    home: {
      title: 'ডিজিটাল ইস্কুল',
      subtitle: 'বাংলাদেশের অনলাইন শিক্ষা প্ল্যাটফর্ম',
      description: 'শ্রেণি ০-১২ এর জন্য এনসিটিবি বই, স্টাডি গাইড, প্র্যাকটিস প্রশ্ন এবং এআই শিক্ষা সহায়তা অ্যাক্সেস করুন',
      selectClass: 'আপনার শ্রেণি নির্বাচন করুন',
      selectMedium: 'শিক্ষা মাধ্যম নির্বাচন করুন',
      features: {
        books: 'এনসিটিবি বই',
        guides: 'স্টাডি গাইড',
        practice: 'প্র্যাকটিস প্রশ্ন',
        exams: 'বোর্ড পরীক্ষা',
        aiTutor: 'এআই শিক্ষক'
      }
    },
    nav: {
      home: 'হোম',
      books: 'বই',
      guides: 'গাইড',
      practice: 'অনুশীলন',
      exams: 'পরীক্ষা',
      aiTutor: 'এআই টিউটর',
      language: 'ভাষা'
    },
    medium: {
      bangla: 'বাংলা মাধ্যম',
      english: 'ইংরেজি মাধ্যম',
      madrasa: 'মাদ্রাসা'
    },
    class: {
      label: 'শ্রেণি',
      select: 'শ্রেণি নির্বাচন করুন'
    },
    books: {
      title: 'এনসিটিবি বই',
      viewBook: 'বই দেখুন',
      download: 'পিডিএফ ডাউনলোড',
      noBooks: 'এই নির্বাচনের জন্য কোন বই উপলব্ধ নেই'
    },
    chatbot: {
      title: 'এআই শিক্ষক',
      placeholder: 'আপনার প্রশ্ন জিজ্ঞাসা করুন...',
      send: 'পাঠান',
      greeting: 'হ্যালো! আমি আপনার এআই শিক্ষক। আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?'
    }
  },
  ar: {
    home: {
      title: 'المدرسة الرقمية',
      subtitle: 'منصة التعليم عبر الإنترنت لبنغلاديش',
      description: 'الوصول إلى كتب NCTB وأدلة الدراسة وأسئلة الممارسة والمساعدة التعليمية بالذكاء الاصطناعي للصفوف 0-12',
      selectClass: 'اختر صفك',
      selectMedium: 'اختر وسيلة التعليم',
      features: {
        books: 'كتب NCTB',
        guides: 'أدلة الدراسة',
        practice: 'أسئلة الممارسة',
        exams: 'امتحانات المجلس',
        aiTutor: 'معلم الذكاء الاصطناعي'
      }
    },
    nav: {
      home: 'الرئيسية',
      books: 'الكتب',
      guides: 'الأدلة',
      practice: 'التمرين',
      exams: 'الامتحانات',
      aiTutor: 'مدرس AI',
      language: 'اللغة'
    },
    medium: {
      bangla: 'المدرسة البنغالية',
      english: 'المدرسة الإنجليزية',
      madrasa: 'المدرسة'
    },
    class: {
      label: 'الصف',
      select: 'اختر الصف'
    },
    books: {
      title: 'كتب NCTB',
      viewBook: 'عرض الكتاب',
      download: 'تحميل PDF',
      noBooks: 'لا توجد كتب متاحة لهذا الاختيار'
    },
    chatbot: {
      title: 'معلم الذكاء الاصطناعي',
      placeholder: 'اسأل سؤالك...',
      send: 'إرسال',
      greeting: 'مرحبا! أنا معلمك بالذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟'
    }
  }
};

export type TranslationKey = keyof typeof translations.en;
