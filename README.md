# Calero Studio

🌐 Site officiel : https://calerostudio.com

Application web développée avec **Next.js** pour Calero Studio.

---

## 🚀 Technologies utilisées

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Node.js
- PM2 pour le déploiement en production
- VPS Linux

---

## 📦 Installation locale

### 1. Cloner le repository

```bash
git clone https://github.com/IM-LRC/calero-studio.git
```

### 2. Entrer dans le dossier du projet

```bash
cd calero-studio
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera disponible sur :

```
http://localhost:3000
```

---

## 🏗️ Build production

Créer le build Next.js :

```bash
npm run build
```

Lancer l'application en production :

```bash
npm start
```

---

## 🔍 SEO & Indexation Google

Le projet utilise les fonctionnalités SEO natives de Next.js.

### Sitemap

Disponible à :

```
https://calerostudio.com/sitemap.xml
```

Généré automatiquement depuis :

```
src/app/sitemap.ts
```

### Robots.txt

Disponible à :

```
https://calerostudio.com/robots.txt
```

Généré depuis :

```
src/app/robots.ts
```

Ces fichiers permettent aux moteurs de recherche d'explorer et d'indexer correctement le site.

---

## 📁 Structure du projet

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

## 🚢 Déploiement Production

Le site est déployé sur un VPS Linux.

Gestionnaire de processus :

```
PM2
```

Mise à jour du serveur :

```bash
git pull
npm install
npm run build
pm2 restart calero
```

Vérifier le statut de l'application :

```bash
pm2 list
```

---

## 🔄 Workflow Git

Ajouter les modifications :

```bash
git add .
```

Créer un commit :

```bash
git commit -m "Description du changement"
```

Envoyer vers GitHub :

```bash
git push
```

---

## 🌐 Liens

Site en production :

```
https://calerostudio.com
```

Repository GitHub :

```
https://github.com/IM-LRC/calero-studio
```

---

## 📄 Licence

Projet privé — Calero Studio
