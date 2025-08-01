<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="public/readme/hero.png" alt="Landing Page Banner" width="100%" />
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" />
    <img src="https://img.shields.io/badge/-Tailwind-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/-shadcn/ui-EF4444?style=for-the-badge" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-i18n-MultiLang-8B5CF6?style=for-the-badge" />
    <img src="https://img.shields.io/badge/-FramerMotion-1E90FF?style=for-the-badge" />
  </div>

  <h3 align="center">🌍 Multilingual Product Landing Page – Built with Next.js 15</h3>

  <div align="center">
    A modern, SEO-optimized, multilingual product page powered by external data and reusable UI components.
  </div>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. ⚡ [Getting Started](#getting-started)  
5. 🧠 [Favorites System](#favorites-system)  
6. 📌 [License](#license)  

---

## 🤖 Introduction

This project is a dynamic product landing page built with the latest frontend technologies. It supports multiple languages via URL routing, utilizes external JSON data, supports dark mode, and includes a favorites system to enhance user engagement.

> Bonus: Smooth animations with Framer Motion, and clean code formatting with ESLint & Prettier.

---

## ⚙️ Tech Stack

- **[Next.js 15+](https://nextjs.org/)** – App Router, Server/Client components, SEO support  
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe codebase  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first styling  
- **[shadcn/ui](https://ui.shadcn.com/)** – Pre-built accessible UI components  
- **[Framer Motion](https://www.framer.com/motion/)** – Page transitions & micro-interactions  
- **i18n** – Static JSON-based language switching with `/en`, `/tr`  
- **Jest** – Unit testing

---

## 🔋 Features

✅ SEO-ready with dynamic metadata, OpenGraph, Twitter card, JSON-LD  
✅ Multilingual support (`/en`, `/tr`)  
✅ External data simulation (mock CMS)  
✅ Sections: Hero, Features, Testimonials, Pricing, Footer  
✅ Favorites system (localStorage + badge in Header)  
✅ Dark mode toggle  
✅ Framer Motion animations  
✅ TypeScript + ESLint + Prettier  

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- npm or yarn

### Install

```bash
git clone https://github.com/your-username/product-landing-page.git
cd product-landing-page
npm install
```

### Start the development server

```bash
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Favorites System

Users can "favorite" any product via the heart icon ❤️  
Favorites are stored in **localStorage** and shown as a badge in the Header.

> You can easily customize or extend this feature using Zustand, Redux, or persistent cookies.

---

## 🌐 Language Support

```text
/en → English  
/tr → Turkish
```

Language switcher is handled via routing and translation files (`en.json`, `tr.json`).
