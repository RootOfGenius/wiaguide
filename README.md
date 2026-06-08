# Audition in World Guideline Website

A comprehensive documentation site for Audition in World, built with Nextra, Next.js, and Tailwind CSS.

## Overview

This is the official game guideline for Audition in World, providing players with:

- **Getting Started** - Installation and game basics
- **Game Mechanics** - Combat, items, and progression systems
- **Guides** - Beginner, intermediate, and advanced strategies
- **Reference** - Complete stats and equipment catalogs

## Quick Start

### Prerequisites

- Node.js 18 or later
- npm or yarn package manager

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

The site will automatically reload when you make changes to the content or configuration.

### Production Build

```bash
# Build static site
npm run build

# Start production server
npm run start

# Or preview static output
npm run build
open .next/static
```

## Project Structure

```
audition-game-guideline-website/
├── pages/                          # Content pages (Markdown/MDX)
│   ├── index.mdx                   # Homepage
│   ├── getting-started/            # Getting started section
│   ├── game-mechanics/             # Game mechanics section
│   ├── guides/                     # Player guides section
│   └── reference/                  # Reference material section
├── public/                         # Static assets
│   ├── images/                     # Image files
│   ├── sitemap.xml                 # SEO sitemap
│   └── robots.txt                  # Search engine crawling
├── .github/workflows/              # GitHub Actions CI/CD
│   └── deploy.yml                  # Deployment workflow
├── theme.config.js                 # Nextra theme configuration
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── package.json                    # Project dependencies and scripts
```

## Content Management

### Adding Pages

1. Create a new `.mdx` file in the appropriate section directory
2. Add YAML frontmatter with `title` and `description`:

```markdown
---
title: Page Title
description: Brief description for SEO
---

# Page Content

Your markdown content goes here.
```

3. Update the section's `_meta.json` to include the new page

### Updating Navigation

Edit the `_meta.json` files to reorder or rename sections:

```json
{
  "index": "Home",
  "page-slug": "Page Title",
  "another-page": "Another Page Title"
}
```

### Adding Images

1. Place images in `public/images/`
2. Reference in content: `![Alt text](/images/filename.png)`

## Features

- 📱 **Mobile-first responsive design** - Optimized for all devices
- 🔍 **Full-text search** - Built-in search functionality
- 📖 **Auto table of contents** - Generated from headings
- ⚡ **Static generation** - Fast, reliable deployments
- 🎨 **Tailwind CSS** - Consistent, clean styling
- 📋 **SEO optimized** - Meta tags, sitemap, and structured data

## Build & Deploy

### GitHub Actions

The site includes automated CI/CD via GitHub Actions:

```yaml
# Workflow: .github/workflows/deploy.yml
- Runs on every push to main branch
- Validates build succeeds
- Deploys to Vercel automatically
```

### Vercel Deployment

Deploy directly to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables (for Vercel)

Set these in your Vercel project settings:

- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## Scripts

- `npm run dev` - Start development server at `localhost:3000`
- `npm run build` - Build static site for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Configuration

### Theme (theme.config.js)

- Site logo and title
- Navigation structure
- Search configuration
- SEO meta tags
- Footer content

### Next.js (next.config.js)

- Nextra integration
- MDX support
- Static generation

### Tailwind (tailwind.config.js)

- Color scheme
- Typography
- Responsive breakpoints

## Accessibility

- ✅ Semantic HTML from Nextra theme
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Proper heading hierarchy
- ✅ Alt text on all images

## Performance

- Static HTML generation for instant page loads
- CSS/JS minified and optimized
- Images served with CDN
- Build size: ~180KB First Load JS

## SEO

- Meta tags for all pages
- Sitemap at `/sitemap.xml`
- Open Graph tags for social sharing
- Canonical URLs
- Structured heading hierarchy

## Troubleshooting

### Build Fails

1. Check Node.js version: `node --version` (should be 18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for syntax errors in markdown files

### Changes Not Showing

1. Stop and restart dev server: `npm run dev`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check file was saved

### Images Not Loading

1. Verify file exists in `public/images/`
2. Check image path uses correct case (Linux is case-sensitive)
3. Use absolute paths: `/images/filename.png`

## Contributing

To contribute to the guideline:

1. Create a new branch: `git checkout -b feature/my-guide`
2. Make your changes
3. Test locally: `npm run dev`
4. Build and verify: `npm run build`
5. Push and create a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:

- 📧 Email: support@auditioninworld.com
- 🐛 GitHub Issues: Create an issue in this repository
- 💬 Discord: Join our community server

---

**Built with [Nextra](https://nextra.vercel.app) | Deployed on [Vercel](https://vercel.com)**

