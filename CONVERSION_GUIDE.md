# Converting Create React App (CRA) to Vite for GitHub Pages Deployment

## Step 1: Install Vite Dependencies

First, remove the CRA scripts and install Vite:

```bash
# Remove react-scripts (optional but clean)
npm uninstall react-scripts

# Install Vite and React plugin
npm install vite @vitejs/plugin-react --save-dev

# Keep your existing dependencies (react, react-dom, etc.)
```

## Step 2: Update package.json

Replace your scripts section with:

```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://your-username.github.io/your-repo-name",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    // Your existing dependencies (react, react-dom, etc.)
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0",
    "gh-pages": "^6.0.0"
  }
}
```

**Important**: Replace:
- `your-app-name` with your actual app name
- `your-username` with your GitHub username
- `your-repo-name` with your repository name

## Step 3: Create vite.config.js

Create a `vite.config.js` file in your project root:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Get the repository name from environment or package.json
const repoName = process.env.GITHUB_REPOSITORY 
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
  : '/your-repo-name/'; // Fallback - replace with your repo name

export default defineConfig({
  plugins: [react()],
  base: repoName, // Critical for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Add any other aliases you had in CRA (like jsconfig.json)
    }
  },
  build: {
    outDir: 'dist', // Vite defaults to 'dist', gh-pages expects this
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other vendor chunks as needed
        }
      }
    }
  }
});
```

## Step 4: Adjust Public Folder (if needed)

Vite serves files from the `public` directory at the root level. If you had:
- `public/` -> keep as is
- `src/` -> keep as is

**Important**: Vite expects an `index.html` in the project root (not in public). If your CRA project had `public/index.html`, move it to root and adjust:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/your-repo-name/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/your-repo-name/src/main.jsx"></script>
  </body>
</html>
```

But Vite handles this automatically with the correct base path. Your `index.html` should be:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Vite will rewrite the paths during build.

## Step 5: Update Entry Point (if using JavaScript)

If your CRA project used `src/index.js`, rename it to `src/main.jsx` (or `.tsx` if TypeScript) and ensure it exports properly:

```javascript
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Step 6: Handle Environment Variables

Vite uses `VITE_` prefix for environment variables:
- Change `process.env.REACT_APP_API_KEY` to `import.meta.env.VITE_API_KEY`
- Update `.env` files: `REACT_APP_API_KEY=value` -> `VITE_API_KEY=value`

## Step 7: Install gh-pages for Deployment

```bash
npm install gh-pages --save-dev
```

## Step 8: Build and Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Step 9: Verify Deployment

After deployment, your site should be available at:
`https://your-username.github.io/your-repo-name/`

## Troubleshooting

### Blank Page After Deployment
1. Check that `base` in `vite.config.js` matches your repository name
2. Ensure GitHub Pages is set to deploy from `/ (root)` of the `gh-pages` branch
3. Verify the built assets have correct paths in `dist/assets/`

### Module Not Found Errors
1. Check aliases in `vite.config.js` match your imports
2. Ensure file extensions are correct (.jsx vs .js, .tsx vs .ts)

### CSS Not Loading
1. Vite handles CSS imports automatically - ensure you're importing CSS in your JS files
2. For global CSS, import in `main.jsx`: `import './index.css'`

## Comparison: CRA vs Vite Configuration

| Feature | CRA | Vite (for GitHub Pages) |
|---------|-----|-------------------------|
| Dev Server | `react-scripts start` | `vite` |
| Build Output | `build/` | `dist/` |
| Public Path | `homepage` in package.json | `base` in vite.config.js |
| Deployment | `gh-pages -d build` | `gh-pages -d dist` |
| HMR | Good | Excellent (faster) |
| Bundle Size | Larger | Smaller (native ES modules) |

## Notes for Your Dhikr Tracker PWA

Since you've already built a Vite-based PWA, this guide is for converting a standard CRA project. Your current project already has:
- ✅ Vite configuration
- ✅ GitHub Pages base path set
- ✅ PWA plugin configured
- ✅ Proper asset paths

If you're working on a different CRA project, follow this guide. For your existing Dhikr Tracker, you're already set up for deployment with:
```bash
npm run build
npm run deploy
```