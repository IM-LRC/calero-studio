<div align="center">

# Calero Studio

A modern, responsive landing page built with Next.js

https://calerostudio.com

</div>

---

## Preview

<p align="center">
  <img src="./screenshots/homepage.png" alt="Calero Studio Preview" width="900">
</p>

---

## About

Calero Studio is a modern and responsive landing page built with Next.js.

The project focuses on performance, SEO optimization, responsive design, and a smooth user experience.

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- PM2
- Linux VPS

---

## Features

- Responsive design
- SEO optimized
- Fast loading performance
- Automatic sitemap generation
- Robots.txt configuration
- Production deployment workflow

---

## SEO Configuration

Sitemap:

```
https://calerostudio.com/sitemap.xml
```

Robots:

```
https://calerostudio.com/robots.txt
```

Generated with:

```
src/app/sitemap.ts
src/app/robots.ts
```

---

## Development

Clone the repository:

```bash
git clone https://github.com/IM-LRC/calero-studio.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Production Deployment

The website is deployed on a Linux VPS using PM2.

Update production:

```bash
git pull
npm install
npm run build
pm2 restart calero
```

---

## Links

Website:

https://calerostudio.com

Repository:

https://github.com/IM-LRC/calero-studio

---

## License

Private project — Calero Studio