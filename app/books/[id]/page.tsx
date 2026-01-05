'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PDFViewer } from '@/components/books/pdf-viewer';
import { Language } from '@/types';
import { books } from '@/data/books';
import { Highlighter, Volume2, BookmarkPlus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BookReaderPage() {
  const params = useParams();
  const [language, setLanguage] = useState<Language>('en');
  const [highlightColor, setHighlightColor] = useState<string>('yellow');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const book = books.find(b => b.id === params.id);

  useEffect(() => {
    // Cleanup speech synthesis on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTextToSpeech = () => {
    if (!window.speechSynthesis) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const selectedText = window.getSelection()?.toString();
    if (!selectedText) {
      alert('Please select some text to read aloud.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = language === 'bn' ? 'bn-BD' : language === 'ar' ? 'ar-SA' : 'en-US';
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleHighlight = () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      alert('Please select some text to highlight.');
      return;
    }

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = `highlight-${highlightColor} cursor-pointer`;
    span.title = 'Click to remove highlight';
    span.addEventListener('click', function() {
      const spanElement = this as HTMLSpanElement;
      const parent = spanElement.parentNode;
      if (parent) {
        while (spanElement.firstChild) {
          parent.insertBefore(spanElement.firstChild, spanElement);
        }
        parent.removeChild(spanElement);
      }
    });
    
    try {
      range.surroundContents(span);
    } catch (e) {
      console.error('Could not highlight selection:', e);
      alert('Unable to highlight this selection. Try selecting text within a single paragraph.');
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    bookmarks[params.id as string] = {
      bookId: params.id,
      bookTitle: book?.title,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert('Bookmark saved!');
  };

  const handleAddNote = () => {
    const note = prompt('Enter your note:');
    if (note) {
      const notes = JSON.parse(localStorage.getItem('notes') || '{}');
      if (!notes[params.id as string]) {
        notes[params.id as string] = [];
      }
      notes[params.id as string].push({
        text: note,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('notes', JSON.stringify(notes));
      alert('Note saved!');
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header language={language} onLanguageChange={setLanguage} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
            <p className="text-muted-foreground">The requested book could not be found.</p>
          </div>
        </main>
        <Footer language={language} />
      </div>
    );
  }

  const getTitle = () => {
    if (language === 'bn' && book.titleBn) return book.titleBn;
    if (language === 'ar' && book.titleAr) return book.titleAr;
    return book.title;
  };

  // Sample PDF URL (in production, this would be actual NCTB PDF)
  const pdfUrl = book.pdfUrl || '/sample-book.pdf';

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="flex-grow">
        {/* Reading Tools */}
        <div className="border-b bg-card sticky top-16 z-40">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm" variant="outline" onClick={handleHighlight}>
                <Highlighter className="h-4 w-4 mr-2" />
                Highlight
              </Button>
              
              <select
                value={highlightColor}
                onChange={(e) => setHighlightColor(e.target.value)}
                className="h-9 px-3 rounded-md border bg-background text-sm"
              >
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="pink">Pink</option>
              </select>

              <Button
                size="sm"
                variant="outline"
                onClick={handleTextToSpeech}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                {isSpeaking ? 'Stop' : 'Listen'}
              </Button>

              <Button size="sm" variant="outline" onClick={handleBookmark}>
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Bookmark
              </Button>

              <Button size="sm" variant="outline" onClick={handleAddNote}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Note
              </Button>
            </div>
          </div>
        </div>

        {/* Book Information */}
        <div className="container mx-auto px-4 py-6">
          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-2">{getTitle()}</h1>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Class:</strong> {book.class}</p>
                <p><strong>Subject:</strong> {book.subject}</p>
                <p><strong>Medium:</strong> {book.medium}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PDF Viewer */}
        <div className="container mx-auto px-4 pb-8">
          <Card>
            <CardContent className="p-0">
              <PDFViewer file={pdfUrl} title={getTitle()} />
            </CardContent>
          </Card>
        </div>

        {/* Reading Tips */}
        <div className="container mx-auto px-4 pb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Reading Tips</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Select text and click &quot;Highlight&quot; to mark important sections</li>
                <li>• Use &quot;Listen&quot; to hear selected text read aloud</li>
                <li>• Save bookmarks to return to your current reading position</li>
                <li>• Add notes to remember key concepts or questions</li>
                <li>• Use the zoom controls in the PDF viewer for comfortable reading</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
