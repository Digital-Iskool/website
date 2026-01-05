# Digital Iskool - Online Education Platform for Bangladesh

A comprehensive full-stack educational platform designed for students in Bangladesh (Class 0-12), providing access to NCTB books, study resources, and AI-powered learning assistance.

![Digital Iskool Homepage](https://github.com/user-attachments/assets/120449c8-8f67-4561-98fa-d9bd0fabdbb9)

## 🎯 Features

### 📚 NCTB Books Library
- Complete collection of NCTB textbooks from Class 0 to Class 12
- Support for all three education mediums:
  - **Bangla Medium** - Standard Bengali curriculum
  - **English Medium** - English version curriculum  
  - **Madrasa** - Islamic education curriculum with Quran, Arabic, Hadith, and Fiqh

![Books Page](https://github.com/user-attachments/assets/c26143ab-3759-4d78-8c58-601ac48f6bc1)

### 🤖 AI Teacher Chatbot
- 24/7 AI-powered teaching assistant
- Instant help with homework and concepts
- Context-aware educational responses
- Multi-language support

![AI Teacher](https://github.com/user-attachments/assets/93de7d6a-14d9-4cb9-bb66-71340ea5717b)

### 📖 Study Resources
- **Study Guides** - Comprehensive guides for better understanding
- **Practice Questions** - MCQ and written questions with instant feedback
- **Board Exams** - Previous years' board examination questions
- Subject-wise organized content

### 🌍 Multi-Language Support
- **English** - Full English interface
- **বাংলা (Bengali)** - Complete Bengali translation
- **العربية (Arabic)** - Arabic support for Madrasa students
- RTL (Right-to-Left) layout support for Arabic

![Bengali Version](https://github.com/user-attachments/assets/58acc8f4-39b8-4d32-9df2-f2695d43f6cb)

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

### Features
- Server-side rendering (SSR)
- Static site generation (SSG)
- Responsive design for mobile and desktop
- Optimized performance
- SEO-friendly

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Digital-Iskool/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── books/             # Books listing page
│   ├── ai-tutor/          # AI chatbot page
│   ├── guides/            # Study guides page
│   ├── practice/          # Practice questions page
│   └── exams/             # Board exams page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── books/            # Book card components
│   ├── chatbot/          # AI chatbot component
│   └── ui/               # Reusable UI components
├── data/                 # Sample data
│   └── books.ts          # NCTB books data
├── lib/                  # Utility functions
│   ├── utils.ts          # Helper functions
│   └── translations.ts   # i18n translations
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## 🎨 Features in Detail

### Class Selection
- Easy class selection from 0 to 12
- Education medium selector
- Subject-wise filtering

### Books Module
- Browse books by class, medium, and subject
- Book viewer interface
- PDF download capability (when available)
- Detailed book information

### AI Teacher
- Natural language processing
- Educational context understanding
- Multi-turn conversations
- Session history management

### Practice System
- Multiple choice questions (MCQ)
- Instant feedback
- Score tracking
- Retry functionality

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Cross-browser compatibility

## 🌐 Supported Education Systems

### Bangla Medium
- All standard NCTB subjects
- Bangla, English, Mathematics, Science
- Physics, Chemistry, Biology (for higher classes)
- ICT and Social Studies

### English Medium
- English Language & Literature
- Mathematics and Sciences
- Aligned with international standards

### Madrasa
- Quran Majeed & Tajweed
- Arabic Language
- Hadith and Fiqh
- Standard academic subjects

## 🔜 Future Enhancements

- [ ] User authentication and profiles
- [ ] Progress tracking and analytics
- [ ] Video lectures integration
- [ ] Live online classes
- [ ] Discussion forums
- [ ] Mobile applications (iOS & Android)
- [ ] Offline mode support
- [ ] Real-time collaboration features
- [ ] Advanced AI tutoring with OpenAI integration
- [ ] Gamification and rewards system

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Location**: Dhaka, Bangladesh
- **Email**: info@digitaliskool.bd
- **Phone**: +880 1XXX-XXXXXX

## 🙏 Acknowledgments

- NCTB (National Curriculum and Textbook Board) for the curriculum
- All educators and students who inspired this project
- Open source community for the amazing tools

---

Built with ❤️ for Bangladesh students
