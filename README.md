# Plexiglass Pro — Catalogue de Produits en Plexiglass

Un catalogue web moderne et professionnel pour une entreprise de fabrication de produits en plexiglass. Conçu avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **Next.js 14** — Framework React avec App Router
- **TypeScript** — Typage statique
- **Tailwind CSS** — Styling utilitaire
- **Framer Motion** — Animations fluides
- **Lucide React** — Icônes modernes
- **Static Export** — Compatible GitHub Pages

## 📁 Structure du Projet

```
plexiglass-catalog/
├── app/                    # Pages Next.js (App Router)
│   ├── categories/[id]/    # Page catégorie dynamique
│   ├── layout.tsx          # Layout racine avec metadata SEO
│   ├── page.tsx            # Page d'accueil
│   ├── not-found.tsx       # Page 404
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── Header.tsx          # En-tête avec navigation
│   ├── HeroSection.tsx     # Section héro
│   ├── CategoryGrid.tsx    # Grille des catégories
│   ├── ProductCard.tsx     # Carte produit
│   ├── ProductModal.tsx    # Modal détail produit
│   ├── SearchOverlay.tsx   # Recherche instantanée
│   ├── Breadcrumb.tsx      # Fil d'Ariane
│   ├── ContactSection.tsx  # Section contact
│   ├── Footer.tsx          # Pied de page
│   └── WhatsAppButton.tsx  # Bouton WhatsApp flottant
├── data/
│   └── products.json       # Données du catalogue (JSON)
├── lib/
│   ├── utils.ts            # Utilitaires (cn, etc.)
│   └── data.ts             # Fonctions de lecture des données
├── types/
│   └── index.ts            # Types TypeScript
├── public/
│   ├── images/
│   │   ├── categories/     # Images de couverture catégories
│   │   └── products/       # Images des produits
│   ├── favicon.svg         # Favicon
│   ├── apple-touch-icon.png
│   └── robots.txt          # Instructions robots
└── Configuration files
```

## 📝 Administration du Catalogue

Pour modifier le catalogue, éditez simplement le fichier **`data/products.json`** :

### Ajouter une catégorie :
```json
{
  "id": "nouvelle-categorie",
  "name": "Nouvelle Catégorie",
  "description": "Description de la catégorie...",
  "coverImage": "/images/categories/nouvelle-categorie.jpg",
  "products": []
}
```

### Ajouter un produit :
```json
{
  "id": "p-new",
  "name": "Nom du Produit",
  "image": "/images/products/p-new.jpg",
  "description": "Description du produit..."
}
```

### Changer une image :
1. Placez l'image dans `public/images/categories/` ou `public/images/products/`
2. Mettez à jour le chemin dans `products.json`

## 🖼️ Images

Les images doivent être au format **JPG** ou **PNG**, optimisées pour le web :
- **Catégories** : 800x600px minimum
- **Produits** : 600x600px minimum

## 🚀 Déploiement sur GitHub Pages

### 1. Créer le dépôt GitHub

```bash
cd plexiglass-catalog
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/plexiglass-catalog.git
git push -u origin main
```

### 2. Configurer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** → **Pages**
3. Dans **Source**, sélectionnez **Deploy from a branch**
4. Sélectionnez la branche **gh-pages** et le dossier **/(root)**
5. Cliquez sur **Save**

### 3. Déployer automatiquement avec GitHub Actions

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Déploiement manuel (alternative)

```bash
# Installer les dépendances
npm install

# Construire le projet
npm run build

# Le dossier `dist/` contient les fichiers statiques
# Déployez-le sur n'importe quel hébergeur statique
```

## 🌐 Déploiement sur Vercel (alternative)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

## 📱 Fonctionnalités

- ✅ **Design responsive** — Mobile-first
- ✅ **SEO optimisé** — Metadata, Open Graph, robots.txt
- ✅ **Recherche instantanée** — Par nom, description, catégorie
- ✅ **Modal produit** — Détails sans changement de page
- ✅ **Animations fluides** — Framer Motion
- ✅ **Fil d'Ariane** — Navigation hiérarchique
- ✅ **Bouton WhatsApp flottant** — Contact rapide
- ✅ **Formulaire de contact** — Avec validation
- ✅ **Lazy loading images** — Performance optimisée
- ✅ **Static export** — Compatible GitHub Pages

## 🎨 Style

- **Palette** : Blanc, noir, gris
- **Typographie** : Inter (Google Fonts)
- **Inspiration** : Apple, Linear, Stripe
- **Philosophie** : Élégance industrielle, minimalisme premium

## 📄 License

Propriétaire — Tous droits réservés.

---

**Plexiglass Pro** — Fabrication française de produits en plexiglass sur mesure.
