'use client';

import { Bot } from 'lucide-react';

export function ChatbotButton() {
  return (
    <button className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-110 active:scale-95">
      <Bot className="h-6 w-6" />
    </button>
  );
}
