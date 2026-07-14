<div align="center">

# Calero Studio

A modern, responsive landing page built with Next.js

https://calerostudio.com

<br>

<p>
  <img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/Version-1.0.0-gray?style=flat-square">
</p>

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

Current version: **1.0.0**

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Node.js
- PM2
- Linux VPS

---

## Features

- Responsive design for mobile and desktop
- Modern user interface
- SEO optimized architecture
- Fast loading performance
- Automatic sitemap generation
- Robots.txt configuration
- Production deployment workflow

---

## Performance

- Optimized Next.js rendering
- SEO-friendly structure
- Responsive across all devices
- Production-ready deployment setup

---

## SEO Configuration

### Sitemap

Available at:

```
https://calerostudio.com/sitemap.xml
```

Generated with:

```
src/app/sitemap.ts
```

### Robots.txt

Available at:

```
https://calerostudio.com/robots.txt
```

Generated with:

```
src/app/robots.ts
```

---

## Development

Clone the repository:

```bash
git clone https://github.com/IM-LRC/calero-studio.git
```

Navigate to the project folder:

```bash
cd calero-studio
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

The website will be available at:

```
http://localhost:3000
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

Check application status:

```bash
pm2 list
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
