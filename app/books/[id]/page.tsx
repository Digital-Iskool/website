import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookReader } from '@/components/books/book-reader';
import { books } from '@/data/books';

interface BookPageProps {
  params: Promise<{ id: string }>;
}

function getBook(id: string) {
  return books.find((b) => b.id === id);
}

// Every book lives in data/books.ts, so all reader pages are prerendered at
// build time. Unknown ids still render on demand and hit notFound() below.
export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = getBook(id);

  if (!book) {
    return { title: 'Book Not Found - Digital Iskool' };
  }

  const title = `${book.title} - Class ${book.class} | Digital Iskool`;
  const description =
    book.description ?? `Read ${book.title} for Class ${book.class} online on Digital Iskool.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

// Server Component: the page shell, book details and metadata are rendered on
// the server; only the PDF viewer inside <BookReader> is client-only.
export default async function BookReaderPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = getBook(id);

  if (!book) {
    notFound();
  }

  return <BookReader book={book} />;
}
