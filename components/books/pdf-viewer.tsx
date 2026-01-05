'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2 } from 'lucide-react';
import { Button } from '../ui/button';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
  title: string;
}

export function PDFViewer({ file, title }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`pdf-viewer-container ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
      {/* Toolbar */}
      <div className="bg-card border-b p-4 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        
        <div className="flex items-center gap-2 flex-wrap">
          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm whitespace-nowrap">
              Page {pageNumber} of {numPages || '?'}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Zoom */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={zoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm">{Math.round(scale * 100)}%</span>
            <Button size="sm" variant="outline" onClick={zoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Actions */}
          <Button size="sm" variant="outline" onClick={toggleFullscreen}>
            <Maximize2 className="h-4 w-4" />
          </Button>
          <a href={file} download>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* PDF Display */}
      <div className="pdf-viewer overflow-auto p-4 bg-muted/30" style={{ height: isFullscreen ? 'calc(100vh - 80px)' : '600px' }}>
        <div className="flex justify-center">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="pdf-document"
            loading={
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            }
            error={
              <div className="text-center p-8 text-destructive">
                <p>Failed to load PDF. Please check the file path.</p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="pdf-page shadow-lg"
              loading={
                <div className="flex items-center justify-center h-96">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              }
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
