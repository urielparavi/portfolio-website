import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rate limiting map
const rateLimitMap = new Map<string, number>();

// Types
interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  message: string;
  conversationHistory: ChatMessage[];
}

export async function POST(req: Request) {
  // Simple rate limiting: one request every 6 seconds per IP
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip) || 0;

  if (now - lastRequest < 6000) {
    return NextResponse.json(
      { error: 'יותר מדי בקשות. נסה שוב בעוד כמה שניות.' },
      { status: 429 }
    );
  }

  rateLimitMap.set(ip, now);

  try {
    const { message, conversationHistory }: RequestBody = await req.json();

    // Validation
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'הודעה לא תקינה' }, { status: 400 });
    }

    // System prompt - English for better accuracy, Hebrew responses
    const systemPrompt = `You are a professional AI assistant for Weby, a web development business owned by Uriel.

## About Weby:
- Professional web development company
- Builds websites using advanced technologies: Next.js, React, TypeScript
- Fast, professional, and customized service
- Contact: through the website or WhatsApp

## Our Services:

### 1. Landing Pages - Starting at ₪1,500
- Single page focused on conversions and sales
- Ideal for campaigns and specific products
- Custom design, fast loading
- Lead forms and call-to-action
- Integration with marketing tools

### 2. Business Branding Websites - Starting at ₪3,000 (Most Popular!)
- Complete professional website with 5-10 pages
- Simple content management
- Blog/news, portfolio/gallery
- Advanced contact form
- Built-in SEO foundation

### 3. E-commerce Stores - Starting at ₪7,000
- Complete online sales system
- Product management, shopping cart, secure payments
- Shipping and inventory management
- Advanced admin panel
- Analytics integration

## Development Time:
- Landing page: 1-2 weeks
- Branding website: 3-4 weeks
- E-commerce store: 4-6 weeks
(Depends on complexity and content)

## Your Guidelines:
1. ALWAYS respond in Hebrew - clear, friendly, and professional
2. When asked about price - mention starting price and explain it varies by requirements
3. When asked about time - mention average timeframe
4. Recommend the most suitable service based on client needs
5. When asked about technology - briefly explain Next.js benefits
6. If unsure or need more details - direct to contact us

## Important:
- Don't hesitate to ask clarifying questions if client needs are unclear
- Be concise - 2-3 sentences per answer (unless they ask for details)
- If asked "how much does a website cost" without specifying type - ask which type interests them
- CRITICAL: All responses must be in Hebrew only`;

    // Build messages array
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...(conversationHistory || []),
      { role: 'user', content: message },
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      throw new Error('לא התקבלה תשובה מהשרת');
    }

    return NextResponse.json({
      reply,
      usage: completion.usage,
    });
  } catch (error) {
    console.error('Chat API Error:', error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : 'שגיאה בתקשורת עם השרת. נסה שוב.';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
