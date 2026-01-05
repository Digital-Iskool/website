export type Language = 'en' | 'bn' | 'ar';

export type EducationMedium = 'bangla' | 'english' | 'madrasa';

export interface Book {
  id: string;
  title: string;
  titleBn?: string;
  titleAr?: string;
  class: number;
  subject: string;
  subjectBn?: string;
  subjectAr?: string;
  medium: EducationMedium;
  coverImage?: string;
  pdfUrl?: string;
  description?: string;
  descriptionBn?: string;
  descriptionAr?: string;
}

export interface Question {
  id: string;
  question: string;
  questionBn?: string;
  questionAr?: string;
  class: number;
  subject: string;
  medium: EducationMedium;
  type: 'mcq' | 'written' | 'creative';
  options?: string[];
  answer?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Exam {
  id: string;
  title: string;
  titleBn?: string;
  titleAr?: string;
  year: number;
  board: string;
  class: number;
  medium: EducationMedium;
  questions: Question[];
}

export interface Guide {
  id: string;
  title: string;
  titleBn?: string;
  titleAr?: string;
  class: number;
  subject: string;
  medium: EducationMedium;
  content: string;
  contentBn?: string;
  contentAr?: string;
}
