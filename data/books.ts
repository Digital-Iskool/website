import { Book, Question, Exam, Guide } from '@/types';

// Sample NCTB Books for Bangladesh
export const books: Book[] = [
  // Class 1 - Bangla Medium
  {
    id: 'bn-1-bangla',
    title: 'Bangla (Amar Boi)',
    titleBn: 'বাংলা (আমার বই)',
    titleAr: 'البنغالية (كتابي)',
    class: 1,
    subject: 'Bangla',
    subjectBn: 'বাংলা',
    subjectAr: 'البنغالية',
    medium: 'bangla',
    coverImage: '/images/books/class-1-bangla.jpg',
    description: 'NCTB Bangla textbook for Class 1',
    descriptionBn: 'প্রথম শ্রেণির জন্য এনসিটিবি বাংলা পাঠ্যবই',
    descriptionAr: 'كتاب اللغة البنغالية للصف الأول'
  },
  {
    id: 'bn-1-english',
    title: 'English for Today',
    titleBn: 'ইংরেজি',
    titleAr: 'الإنجليزية',
    class: 1,
    subject: 'English',
    subjectBn: 'ইংরেজি',
    subjectAr: 'الإنجليزية',
    medium: 'bangla',
    coverImage: '/images/books/class-1-english.jpg',
    description: 'NCTB English textbook for Class 1',
    descriptionBn: 'প্রথম শ্রেণির জন্য এনসিটিবি ইংরেজি পাঠ্যবই',
    descriptionAr: 'كتاب اللغة الإنجليزية للصف الأول'
  },
  {
    id: 'bn-1-math',
    title: 'Mathematics',
    titleBn: 'গণিত',
    titleAr: 'الرياضيات',
    class: 1,
    subject: 'Mathematics',
    subjectBn: 'গণিত',
    subjectAr: 'الرياضيات',
    medium: 'bangla',
    coverImage: '/images/books/class-1-math.jpg',
    description: 'NCTB Mathematics textbook for Class 1',
    descriptionBn: 'প্রথম শ্রেণির জন্য এনসিটিবি গণিত পাঠ্যবই',
    descriptionAr: 'كتاب الرياضيات للصف الأول'
  },
  // Class 10 - Bangla Medium
  {
    id: 'bn-10-bangla',
    title: 'Bangla Sahitto (Sahitto Konica)',
    titleBn: 'বাংলা সাহিত্য (সাহিত্য কণিকা)',
    titleAr: 'الأدب البنغالي',
    class: 10,
    subject: 'Bangla',
    subjectBn: 'বাংলা',
    subjectAr: 'البنغالية',
    medium: 'bangla',
    coverImage: '/images/books/class-10-bangla.jpg',
    description: 'NCTB Bangla Literature textbook for Class 10',
    descriptionBn: 'দশম শ্রেণির জন্য এনসিটিবি বাংলা সাহিত্য পাঠ্যবই',
    descriptionAr: 'كتاب الأدب البنغالي للصف العاشر'
  },
  {
    id: 'bn-10-physics',
    title: 'Physics',
    titleBn: 'পদার্থবিজ্ঞান',
    titleAr: 'الفيزياء',
    class: 10,
    subject: 'Physics',
    subjectBn: 'পদার্থবিজ্ঞান',
    subjectAr: 'الفيزياء',
    medium: 'bangla',
    coverImage: '/images/books/class-10-physics.jpg',
    description: 'NCTB Physics textbook for Class 10',
    descriptionBn: 'দশম শ্রেণির জন্য এনসিটিবি পদার্থবিজ্ঞান পাঠ্যবই',
    descriptionAr: 'كتاب الفيزياء للصف العاشر'
  },
  {
    id: 'bn-10-chemistry',
    title: 'Chemistry',
    titleBn: 'রসায়ন',
    titleAr: 'الكيمياء',
    class: 10,
    subject: 'Chemistry',
    subjectBn: 'রসায়ন',
    subjectAr: 'الكيمياء',
    medium: 'bangla',
    coverImage: '/images/books/class-10-chemistry.jpg',
    description: 'NCTB Chemistry textbook for Class 10',
    descriptionBn: 'দশম শ্রেণির জন্য এনসিটিবি রসায়ন পাঠ্যবই',
    descriptionAr: 'كتاب الكيمياء للصف العاشر'
  },
  {
    id: 'bn-10-biology',
    title: 'Biology',
    titleBn: 'জীববিজ্ঞান',
    titleAr: 'علم الأحياء',
    class: 10,
    subject: 'Biology',
    subjectBn: 'জীববিজ্ঞান',
    subjectAr: 'علم الأحياء',
    medium: 'bangla',
    coverImage: '/images/books/class-10-biology.jpg',
    description: 'NCTB Biology textbook for Class 10',
    descriptionBn: 'দশম শ্রেণির জন্য এনসিটিবি জীববিজ্ঞান পাঠ্যবই',
    descriptionAr: 'كتاب علم الأحياء للصف العاشر'
  },
  // English Medium Books
  {
    id: 'en-5-english',
    title: 'English Language and Literature',
    titleBn: 'ইংরেজি ভাষা ও সাহিত্য',
    titleAr: 'اللغة الإنجليزية والأدب',
    class: 5,
    subject: 'English',
    subjectBn: 'ইংরেজি',
    subjectAr: 'الإنجليزية',
    medium: 'english',
    coverImage: '/images/books/class-5-english-medium.jpg',
    description: 'English Medium textbook for Class 5',
    descriptionBn: 'পঞ্চম শ্রেণির জন্য ইংরেজি মাধ্যম পাঠ্যবই',
    descriptionAr: 'كتاب المدرسة الإنجليزية للصف الخامس'
  },
  // Madrasa Books
  {
    id: 'md-6-quran',
    title: 'Quran Majeed & Tajweed',
    titleBn: 'কুরআন মজিদ ও তাজবীদ',
    titleAr: 'القرآن الكريم والتجويد',
    class: 6,
    subject: 'Quran',
    subjectBn: 'কুরআন',
    subjectAr: 'القرآن',
    medium: 'madrasa',
    coverImage: '/images/books/class-6-quran.jpg',
    description: 'Quran and Tajweed textbook for Class 6',
    descriptionBn: 'ষষ্ঠ শ্রেণির জন্য কুরআন ও তাজবীদ পাঠ্যবই',
    descriptionAr: 'كتاب القرآن والتجويد للصف السادس'
  },
  {
    id: 'md-6-arabic',
    title: 'Arabic Language',
    titleBn: 'আরবি ভাষা',
    titleAr: 'اللغة العربية',
    class: 6,
    subject: 'Arabic',
    subjectBn: 'আরবি',
    subjectAr: 'العربية',
    medium: 'madrasa',
    coverImage: '/images/books/class-6-arabic.jpg',
    description: 'Arabic Language textbook for Class 6',
    descriptionBn: 'ষষ্ঠ শ্রেণির জন্য আরবি ভাষা পাঠ্যবই',
    descriptionAr: 'كتاب اللغة العربية للصف السادس'
  },
];

// Sample practice questions
export const practiceQuestions: Question[] = [
  {
    id: 'q1',
    question: 'What is the capital of Bangladesh?',
    questionBn: 'বাংলাদেশের রাজধানী কী?',
    questionAr: 'ما هي عاصمة بنغلاديش؟',
    class: 5,
    subject: 'Social Studies',
    medium: 'bangla',
    type: 'mcq',
    options: ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna'],
    answer: 'Dhaka',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    question: 'Solve: 2 + 3 × 4 = ?',
    questionBn: 'সমাধান করুন: ২ + ৩ × ৪ = ?',
    questionAr: 'حل: 2 + 3 × 4 = ؟',
    class: 7,
    subject: 'Mathematics',
    medium: 'bangla',
    type: 'mcq',
    options: ['20', '14', '11', '24'],
    answer: '14',
    difficulty: 'medium'
  },
];

// Sample guides
export const studyGuides: Guide[] = [
  {
    id: 'guide1',
    title: 'How to Master Bangla Grammar',
    titleBn: 'বাংলা ব্যাকরণে দক্ষতা অর্জনের উপায়',
    titleAr: 'كيفية إتقان قواعد اللغة البنغالية',
    class: 8,
    subject: 'Bangla',
    medium: 'bangla',
    content: 'This comprehensive guide will help you understand Bangla grammar fundamentals...',
    contentBn: 'এই বিস্তৃত গাইড আপনাকে বাংলা ব্যাকরণের মূল বিষয়গুলি বুঝতে সাহায্য করবে...',
    contentAr: 'سيساعدك هذا الدليل الشامل على فهم أساسيات قواعد اللغة البنغالية...'
  },
  {
    id: 'guide2',
    title: 'Mathematics Tips for SSC',
    titleBn: 'এসএসসির জন্য গণিতের টিপস',
    titleAr: 'نصائح الرياضيات لامتحان SSC',
    class: 10,
    subject: 'Mathematics',
    medium: 'bangla',
    content: 'Essential tips and tricks to excel in SSC Mathematics examination...',
    contentBn: 'এসএসসি গণিত পরীক্ষায় সফল হওয়ার জন্য প্রয়োজনীয় টিপস...',
    contentAr: 'نصائح وحيل أساسية للتفوق في امتحان الرياضيات SSC...'
  },
];

// Sample exam papers
export const examPapers: Exam[] = [
  {
    id: 'exam1',
    title: 'SSC 2023 - Dhaka Board',
    titleBn: 'এসএসসি ২০২৩ - ঢাকা বোর্ড',
    titleAr: 'SSC 2023 - مجلس دكا',
    year: 2023,
    board: 'Dhaka',
    class: 10,
    medium: 'bangla',
    questions: practiceQuestions
  },
];

// Classes array
export const classes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Subjects by medium
export const subjectsByMedium = {
  bangla: [
    'Bangla', 'English', 'Mathematics', 'Science', 'Social Studies', 
    'Physics', 'Chemistry', 'Biology', 'ICT', 'Religion'
  ],
  english: [
    'English Language', 'English Literature', 'Mathematics', 'Science',
    'Social Studies', 'Physics', 'Chemistry', 'Biology', 'ICT'
  ],
  madrasa: [
    'Quran', 'Arabic', 'Hadith', 'Fiqh', 'Bangla', 'English', 
    'Mathematics', 'Science', 'Social Studies'
  ]
};
