# MapChat Website

A modern, responsive landing page for the MapChat application built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek, dark-themed UI with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Performance Optimized**: Built with Next.js 14 for lightning-fast page loads
- **SEO Ready**: Comprehensive meta tags and Open Graph support
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Type Safe**: Written in TypeScript for better developer experience

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mapchat-website/
├── app/
│   ├── download/          # Download page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── loading.tsx        # Loading screen
│   └── page.tsx           # Homepage
├── public/
│   ├── logo.png           # App logo
│   ├── og-image.svg       # Social media preview
│   └── favicon.svg        # Site favicon
└── ...config files
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#00F5D4',     // Teal
  secondary: '#FF2E63',   // Pink
  accent: '#04D9FF',      // Blue
}
```

### Content

- **Homepage**: Edit `app/page.tsx`
- **Metadata**: Update `app/layout.tsx`
- **Legal Pages**: Modify files in `app/privacy/` and `app/terms/`

## 📝 Pages

- `/` - Homepage with hero, features, pricing, and CTA
- `/download` - App download page with store links
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 🚢 Deployment

This site can be deployed to:

- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your git repository
- **Any Node.js hosting**: Use `npm run build` and `npm start`

## 📄 License

Copyright © 2024 MapChat. All rights reserved.
