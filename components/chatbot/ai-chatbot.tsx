'use client';

import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatbotProps {
  language: Language;
}

export function AIChatbot({ language }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: translations[language].chatbot.greeting,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = translations[language];
  const isRTL = language === 'ar';

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (in production, this would call an AI API)
    setTimeout(() => {
      const responses: Record<Language, string> = {
        en: "I'm here to help you with your studies! I can answer questions about NCTB books, explain concepts, help with homework, and provide study tips. What subject would you like help with?",
        bn: "আমি আপনার পড়াশোনায় সাহায্য করতে এখানে আছি! আমি এনসিটিবি বই সম্পর্কে প্রশ্নের উত্তর দিতে পারি, ধারণা ব্যাখ্যা করতে পারি, হোমওয়ার্কে সাহায্য করতে পারি এবং পড়াশোনার টিপস দিতে পারি। আপনি কোন বিষয়ে সাহায্য চান?",
        ar: "أنا هنا لمساعدتك في دراستك! يمكنني الإجابة على أسئلة حول كتب NCTB، وشرح المفاهيم، والمساعدة في الواجبات المنزلية، وتقديم نصائح الدراسة. ما الموضوع الذي تريد المساعدة فيه؟"
      };

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[language],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto ${isRTL ? 'rtl' : ''}`}>
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardTitle className="flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          {t.chatbot.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.chatbot.placeholder}
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
