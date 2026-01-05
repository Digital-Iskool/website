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
    content: 'This comprehensive guide will help you understand Bangla grammar fundamentals including nouns, pronouns, verbs, adjectives, and sentence structure. Regular practice and reading quality literature will significantly improve your grammar skills.',
    contentBn: 'এই বিস্তৃত গাইড আপনাকে বাংলা ব্যাকরণের মূল বিষয়গুলি বুঝতে সাহায্য করবে যেমন বিশেষ্য, সর্বনাম, ক্রিয়া, বিশেষণ এবং বাক্য গঠন। নিয়মিত অনুশীলন এবং মানসম্পন্ন সাহিত্য পড়া আপনার ব্যাকরণ দক্ষতা উল্লেখযোগ্যভাবে উন্নত করবে।',
    contentAr: 'سيساعدك هذا الدليل الشامل على فهم أساسيات قواعد اللغة البنغالية بما في ذلك الأسماء والضمائر والأفعال والصفات وبنية الجملة.'
  },
  {
    id: 'guide2',
    title: 'Mathematics Tips for SSC',
    titleBn: 'এসএসসির জন্য গণিতের টিপস',
    titleAr: 'نصائح الرياضيات لامتحان SSC',
    class: 10,
    subject: 'Mathematics',
    medium: 'bangla',
    content: 'Essential tips and tricks to excel in SSC Mathematics examination. Focus on algebra, geometry, trigonometry and calculus. Practice previous years questions and solve at least 5 problems daily. Time management is crucial during exams.',
    contentBn: 'এসএসসি গণিত পরীক্ষায় সফল হওয়ার জন্য প্রয়োজনীয় টিপস এবং কৌশল। বীজগণিত, জ্যামিতি, ত্রিকোণমিতি এবং ক্যালকুলাসের উপর মনোনিবেশ করুন। পূর্ববর্তী বছরের প্রশ্ন অনুশীলন করুন এবং প্রতিদিন কমপক্ষে ৫টি সমস্যা সমাধান করুন।',
    contentAr: 'نصائح وحيل أساسية للتفوق في امتحان الرياضيات SSC. التركيز على الجبر والهندسة وحساب المثلثات والتفاضل والتكامل.'
  },
  {
    id: 'guide3',
    title: 'Science Study Guide for Class 9',
    titleBn: 'নবম শ্রেণির জন্য বিজ্ঞান অধ্যয়ন গাইড',
    titleAr: 'دليل دراسة العلوم للصف التاسع',
    class: 9,
    subject: 'Science',
    medium: 'bangla',
    content: 'A comprehensive guide covering Physics, Chemistry, and Biology for Class 9. Understand core concepts through diagrams and experiments. Create mind maps for better retention and practice numerical problems regularly.',
    contentBn: 'নবম শ্রেণির জন্য পদার্থবিজ্ঞান, রসায়ন এবং জীববিজ্ঞান কভার করে একটি বিস্তৃত গাইড। চিত্র এবং পরীক্ষার মাধ্যমে মূল ধারণাগুলি বুঝুন। ভাল স্মরণের জন্য মাইন্ড ম্যাপ তৈরি করুন।',
    contentAr: 'دليل شامل يغطي الفيزياء والكيمياء والأحياء للصف التاسع. فهم المفاهيم الأساسية من خلال الرسوم البيانية والتجارب.'
  },
  {
    id: 'guide4',
    title: 'English Writing Skills',
    titleBn: 'ইংরেজি লেখার দক্ষতা',
    titleAr: 'مهارات الكتابة الإنجليزية',
    class: 7,
    subject: 'English',
    medium: 'bangla',
    content: 'Improve your English writing skills with proper grammar, vocabulary, and sentence formation. Practice essay writing, letter writing, and comprehension regularly. Read English newspapers and books to enhance vocabulary.',
    contentBn: 'সঠিক ব্যাকরণ, শব্দভাণ্ডার এবং বাক্য গঠনের মাধ্যমে আপনার ইংরেজি লেখার দক্ষতা উন্নত করুন। নিবন্ধ লেখা, চিঠি লেখা এবং বোঝার অনুশীলন নিয়মিত করুন।',
    contentAr: 'تحسين مهارات الكتابة باللغة الإنجليزية مع القواعد الصحيحة والمفردات وتكوين الجمل.'
  },
  {
    id: 'guide5',
    title: 'Effective Study Techniques',
    titleBn: 'কার্যকর পড়াশোনার কৌশল',
    titleAr: 'تقنيات الدراسة الفعالة',
    class: 6,
    subject: 'General',
    medium: 'bangla',
    content: 'Learn effective study techniques including the Pomodoro technique, active recall, spaced repetition, and note-taking methods. Create a study schedule and maintain consistency. Take short breaks and stay hydrated.',
    contentBn: 'কার্যকর পড়াশোনার কৌশল শিখুন যেমন পোমোডোরো কৌশল, সক্রিয় পুনর্বিবেচনা, ব্যবধান পুনরাবৃত্তি এবং নোট নেওয়ার পদ্ধতি। একটি অধ্যয়ন সময়সূচী তৈরি করুন এবং ধারাবাহিকতা বজায় রাখুন।',
    contentAr: 'تعلم تقنيات الدراسة الفعالة بما في ذلك تقنية بومودورو والاستدعاء النشط والتكرار المتباعد وطرق تدوين الملاحظات.'
  },
  {
    id: 'guide6',
    title: 'Quran Memorization Tips',
    titleBn: 'কুরআন মুখস্থ করার টিপস',
    titleAr: 'نصائح لحفظ القرآن',
    class: 8,
    subject: 'Quran',
    medium: 'madrasa',
    content: 'Practical tips for memorizing the Holy Quran effectively. Start with shorter surahs, practice with proper Tajweed, revise regularly, and maintain a consistent schedule. Seek guidance from qualified teachers.',
    contentBn: 'পবিত্র কুরআন কার্যকরভাবে মুখস্থ করার জন্য ব্যবহারিক টিপস। ছোট সূরা দিয়ে শুরু করুন, সঠিক তাজবীদ সহ অনুশীলন করুন, নিয়মিত পুনর্বিবেচনা করুন এবং একটি ধারাবাহিক সময়সূচী বজায় রাখুন।',
    contentAr: 'نصائح عملية لحفظ القرآن الكريم بشكل فعال. ابدأ بالسور الأقصر، تدرب مع التجويد الصحيح، راجع بانتظام، وحافظ على جدول زمني ثابت.'
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
