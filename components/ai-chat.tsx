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
  const [showClearModal, setShowClearModal] = useState(false);
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

        const daysOld = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
        if (daysOld < STORAGE_EXPIRY_DAYS && savedMessages.length > 1) {
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-chat-open', isOpen.toString());
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showClearModal) {
        setShowClearModal(false);
      }
    };

    if (showClearModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showClearModal]);

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

  const confirmClearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([
      {
        role: 'assistant',
        content: 'שלום! 👋 אני עוזר AI של Weby. איך אוכל לעזור לך היום?',
        timestamp: new Date(),
      },
    ]);
    setShowClearModal(false);
  };

  return (
    <>
      {/* כפתור צף - responsive */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-full"
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

              {/* Notification pulse */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              </span>
            </div>

            {/* Hover Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-0 group-focus-visible:scale-125 group-focus-visible:opacity-0 transition-all duration-500 ease-out pointer-events-none" />
          </div>

          {/* Tooltip - hidden on mobile */}
          <div className="hidden sm:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            שאל אותי משהו! 💬
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-[-4px] border-4 border-transparent border-l-gray-900 dark:border-l-gray-100" />
          </div>
        </button>
      )}

      {/* חלון צ'אט - responsive */}
      {isOpen && (
        <div
          className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:left-6 sm:w-96 sm:h-[600px] bg-card border border-border rounded-2xl shadow-strong flex flex-col z-50 overflow-hidden animate-fade-in-up"
          style={{
            animation: 'fadeInUp 0.3s ease-out',
            willChange: 'transform, opacity',
          }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-primary-foreground/20 rounded-full p-1.5 sm:p-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  עוזר Weby AI
                </h3>
                <p className="text-[10px] sm:text-xs opacity-80">זמין 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* Clear history button */}
              {messages.length > 1 && (
                <button
                  onClick={() => setShowClearModal(true)}
                  className="hover:bg-primary-foreground/10 rounded-full p-1.5 sm:p-2 transition-colors duration-200"
                  aria-label="נקה היסטוריה"
                  title="נקה היסטוריה"
                >
                  <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/10 rounded-full p-1.5 sm:p-2 transition-colors duration-200"
                aria-label="סגור צ'אט"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-muted/30">
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
                  className={`max-w-[85%] rounded-2xl p-2.5 sm:p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm shadow-soft'
                      : 'bg-card text-card-foreground border border-border rounded-bl-sm shadow-soft'
                  }`}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </p>
                  <p
                    className={`text-[10px] sm:text-xs mt-1 ${
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

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl p-2.5 sm:p-3 rounded-bl-sm shadow-soft">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-primary" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      כותב...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="הקלד הודעה..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-input rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                dir="rtl"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-3 py-2 sm:px-4 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover-lift active:scale-95"
                aria-label="שלח הודעה"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Quick actions */}
            <div className="mt-2 sm:mt-3">
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">
                דוגמאות:
              </p>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                {['מה המחיר?', 'כמה זמן לוקח?', 'איפה יוצרים קשר?'].map(
                  (quickMsg) => (
                    <button
                      key={quickMsg}
                      onClick={() => {
                        setInput(quickMsg);
                        inputRef.current?.focus();
                      }}
                      disabled={isLoading}
                      className="text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-full transition-colors duration-200 disabled:opacity-50"
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

      {/* Clear History Modal - CSS only animations */}
      {showClearModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-200"
            onClick={() => setShowClearModal(false)}
            style={{
              animation: 'fadeIn 0.2s ease-out',
            }}
          />

          {/* Modal */}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-card border border-border rounded-2xl shadow-strong p-4 sm:p-6 z-[70]"
            style={{
              animation: 'fadeInUp 0.3s ease-out',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-modal-title"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-destructive" />
              </div>
            </div>

            {/* Title */}
            <h2
              id="clear-modal-title"
              className="text-lg sm:text-xl font-semibold text-center mb-2"
            >
              מחיקת היסטוריה
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-6">
              האם אתה בטוח שברצונך למחוק את כל היסטוריית השיחות? פעולה זו לא
              ניתנת לביטול.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-col-reverse sm:flex-row">
              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 px-4 py-2.5 border border-input rounded-xl bg-background hover:bg-muted transition-colors duration-200 font-medium"
              >
                ביטול
              </button>
              <button
                onClick={confirmClearHistory}
                className="flex-1 px-4 py-2.5 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-xl transition-colors duration-200 font-medium"
              >
                מחק הכל
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
