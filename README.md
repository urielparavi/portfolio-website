# אוריאל - פיתוח תוכנה, אתרים ואפליקציות

Portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## התקנה

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## טכנולוגיות

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes (Light/Dark mode)
- Resend (Email service)

## מבנה הפרויקט

```
portfolio-website/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
├── lib/                 # Utility functions
└── public/             # Static assets
```

## סביבת פיתוח

העתק את `.env.example` ל-`.env.local` והוסף את ה-API keys שלך:

```bash
cp .env.example .env.local
```
