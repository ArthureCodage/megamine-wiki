# ⛏️ MegaMine Wiki - Rinaorc

Wiki communautaire complet et moderne pour le mode **MegaMine** du serveur Minecraft **Rinaorc** (`rinaorc.com`).

Ce site est propulsé par [VitePress](https://vitepress.dev/) et prêt à être hébergé gratuitement sur **GitHub Pages**.

---

## 🚀 Démarrage Rapide

### 1. Tester le site en local
Dans le dossier du projet :
```bash
npm run docs:dev
```
Ouvrez ensuite `http://localhost:5173` dans votre navigateur.

### 2. Compiler le site (Build de production)
```bash
npm run docs:build
```

### 3. Prévisualiser le build
```bash
npm run docs:preview
```

---

## 🌐 Déploiement sur GitHub Pages

1. Créez un nouveau dépôt sur votre compte GitHub (nommez-le par exemple `megamine-wiki`).
2. Poussez les fichiers sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "feat: initialisation du wiki MegaMine"
   git branch -M main
   git remote add origin https://github.com/<votre-pseudo>/megamine-wiki.git
   git push -u origin main
   ```
3. Sur GitHub, rendez-vous dans **Settings** > **Pages** de votre dépôt :
   * Sous **Build and deployment** > **Source**, choisissez **GitHub Actions**.
4. Le workflow automatique `.github/workflows/deploy.yml` va compiler et mettre votre site en ligne en quelques secondes !
