'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Loader2, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const STORAGE_KEY = 'weby-chat-history';
const STORAGE_EXPIRY_DAYS = 7;

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'שלום! 👋 אני עוזר AI של Weby. איך אוכל לעזור לך היום?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { messages: savedMessages, timestamp } = JSON.parse(stored);

        // Check if data is not expired (7 days)
        const daysOld = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
        if (daysOld < STORAGE_EXPIRY_DAYS && savedMessages.length > 1) {
          // Convert timestamp strings back to Date objects
          const parsedMessages = savedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }));
          setMessages(parsedMessages);
        }
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 1) {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            messages,
            timestamp: Date.now(),
          })
        );
      } catch (error) {
        console.error('Error saving chat history:', error);
      }
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMessage, timestamp: new Date() },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([
        ...newMessages,
        { role: 'assistant', content: data.reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'מצטער, משהו השתבש. אנא נסה שוב או צור קשר ישירות דרך WhatsApp.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    if (confirm('למחוק את היסטוריית השיחות?')) {
      localStorage.removeItem(STORAGE_KEY);
      setMessages([
        {
          role: 'assistant',
          content: 'שלום! 👋 אני עוזר AI של Weby. איך אוכל לעזור לך היום?',
          timestamp: new Date(),
        },
      ]);
    }
  };

  return (
    <>
      {/* כפתור צף - שמאל למטה - בדיוק כמו WhatsApp/Accessibility */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 group focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-full"
          aria-label="פתח צ'אט AI"
          type="button"
        >
          <div className="relative">
            {/* Main Button */}
            <div className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/50 group-focus-visible:scale-110 group-focus-visible:shadow-2xl group-focus-visible:shadow-primary/50 transform-gpu">
              <MessageCircle
                className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12 group-focus-visible:rotate-12"
                strokeWidth={2}
                aria-hidden="true"
              />

              {/* Notification pulse - מעל האייקון */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              </span>
            </div>

            {/* Hover Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-0 group-focus-visible:scale-125 group-focus-visible:opacity-0 transition-all duration-500 ease-out pointer-events-none" />
          </div>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            שאל אותי משהו! 💬
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-[-4px] border-4 border-transparent border-l-gray-900 dark:border-l-gray-100" />
          </div>
        </button>
      )}

      {/* חלון צ'אט - ללא שינוי */}
      {isOpen && (
        <div
          className="fixed bottom-6 left-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-card border border-border rounded-2xl shadow-strong flex flex-col z-50 overflow-hidden animate-fade-in-up"
          style={{
            animation: 'fadeInUp 0.3s ease-out',
            willChange: 'transform, opacity',
          }}
        >
          {/* Header - משתמש בצבעי המערכת */}
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/20 rounded-full p-2">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base">עוזר Weby AI</h3>
                <p className="text-xs opacity-80">זמין 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* Clear history button */}
              {messages.length > 1 && (
                <button
                  onClick={clearHistory}
                  className="hover:bg-primary-foreground/10 rounded-full p-2 transition-colors duration-200"
                  aria-label="נקה היסטוריה"
                  title="נקה היסטוריה"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/10 rounded-full p-2 transition-colors duration-200"
                aria-label="סגור צ'אט"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages - Optimized scroll */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
                style={{
                  animation: 'fadeInUp 0.2s ease-out',
                  animationFillMode: 'both',
                  animationDelay: '0.05s',
                }}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm shadow-soft'
                      : 'bg-card text-card-foreground border border-border rounded-bl-sm shadow-soft'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.role === 'user'
                        ? 'opacity-70'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString('he-IL', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator - CSS only */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl p-3 rounded-bl-sm shadow-soft">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">
                      כותב...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="הקלד הודעה..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-input rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                dir="rtl"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover-lift active:scale-95"
                aria-label="שלח הודעה"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Quick actions */}
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-2">דוגמאות:</p>
              <div className="flex gap-2 flex-wrap">
                {['מה המחיר?', 'כמה זמן לוקח?', 'הראה עבודות'].map(
                  (quickMsg) => (
                    <button
                      key={quickMsg}
                      onClick={() => {
                        setInput(quickMsg);
                        inputRef.current?.focus();
                      }}
                      disabled={isLoading}
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-full transition-colors duration-200 disabled:opacity-50"
                    >
                      {quickMsg}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
