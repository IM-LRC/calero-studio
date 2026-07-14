# Calero Studio — Landing Page

Website: https://calerostudio.com

A modern landing page built with **Next.js** for Calero Studio.

This website is optimized for performance, SEO, and a smooth user experience.

---

## Technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Node.js
- PM2 for production deployment
- Linux VPS

---

## Features

- Responsive landing page (mobile and desktop)
- Modern UI design
- SEO optimization with Next.js
- Automatic sitemap generation
- Robots.txt configuration
- Performance optimization
- Production deployment with PM2

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/IM-LRC/calero-studio.git
```

### 2. Navigate to the project folder

```bash
cd calero-studio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The website will be available at:

```
http://localhost:3000
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## SEO Configuration

The project uses Next.js built-in SEO features.

### Sitemap

Available at:

```
https://calerostudio.com/sitemap.xml
```

Generated from:

```
src/app/sitemap.ts
```

### Robots.txt

Available at:

```
https://calerostudio.com/robots.txt
```

Generated from:

```
src/app/robots.ts
```

---

## Project Structure

```
calero-studio/

├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── sitemap.ts
│       └── robots.ts
│
├── public/
│
├── package.json
├── next.config.js
└── README.md
```

---

## Deployment

The website is deployed on a Linux VPS.

Process manager:

```
PM2
```

Production update:

```bash
git pull
npm install
npm run build
pm2 restart calero
```

Check application status:

```bash
pm2 list
```

---

## Git Workflow

Add changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Describe your changes"
```

Push to GitHub:

```bash
git push
```

---

## Links

Production website:

https://calerostudio.com

GitHub repository:

https://github.com/IM-LRC/calero-studio

---

## License

Private project — Calero Studio
