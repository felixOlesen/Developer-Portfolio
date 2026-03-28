# Developer Portfolio

A modern, responsive portfolio website built with **Svelte 5**, **SvelteKit**, **TypeScript**, and **Tailwind CSS v4**, featuring custom UI components from **shadcn-svelte**. This portfolio showcases professional experience, personal projects, academic work, and game development portfolio.

## Live Demo

Visit the live site: **[https://felixsolesen.vercel.app](https://felixsolesen.vercel.app)**

## Tech Stack

- **Framework:** Svelte 5 with SvelteKit 2.5
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4.2 with PostCSS
- **UI Components:** shadcn-svelte (Radix UI primitives)
- **Animations:** Svelte transitions + Tailwind
- **Deployment:** Vercel (adapter-auto)

## Features

- **Responsive Design:** Optimized for desktop and mobile viewing
- **Interactive UI:** Custom scrollbars, smooth transitions, hover effects
- **Filterable Resume:** Toggle between work experience and projects
- **Project Showcase:** Detailed project cards with images, tech stacks, and lessons learned
- **Dynamic Routes:** Individual project pages with comprehensive overviews
- **Modern Stack:** Svelte 5 runes syntax, TypeScript type safety, Tailwind v4

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── ui/              # shadcn-svelte components
│   ├── data.js              # All portfolio data (projects, experience, about)
│   └── utils.ts             # Utility functions (cn, etc.)
├── routes/
│   ├── +layout.svelte       # Root layout
│   ├── +page.svelte         # Homepage with hero section
│   ├── aboutMe/             # About me page
│   ├── resume/              # Resume with toggle filtering
│   ├── resumeCards.svelte   # Resume card components
│   ├── projects.svelte      # Project showcase component
│   └── [projectOverview]/   # Dynamic project detail pages
└── app.css                  # Global styles

static/assets/               # Images and media files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Install and Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking with svelte-check
- `npm run check:watch` - Type check in watch mode

## Data Management

All portfolio content is stored in `src/lib/data.js`:

- `info` - Site metadata and navigation labels
- `aboutMe` - Personal bio and introduction
- `experience` - Work experience entries
- `projects` - Project portfolio (web dev, game dev, ML research)

Each project entry includes:
- Role, duration, description
- Technology stack with icons
- Media showcases (screenshots/assets)
- Lessons learned
- Links to GitHub, live demos, or YouTube videos

## Customization

To customize this portfolio for your own use:

1. Update all content in `src/lib/data.js` with your information
2. Replace images in `static/assets/` with your own media
3. Modify routes in `src/routes/` as needed
4. Update social links in `src/routes/socials.svelte`
5. Update site metadata in `package.json` and `svelte.config.js`

## Styling

- **Color Scheme:** Primary green (#509532) with dark gray secondary tones
- **Custom Scrollbars:** WebKit-styled scrollbars matching theme
- **Components:** Uses shadcn-svelte for consistent, accessible UI
- **Dark Theme Friendly:** High contrast, deep shadows, inset effects

## Browser Support

Modern browsers with support for:
- ES Modules
- CSS Custom Properties
- CSS Grid/Flexbox
- `document.startViewTransition` API (graceful degradation)

## Development Notes

- Built with **Svelte 5 runes** syntax (`$props()`, `$derived()`, etc.)
- Component-based architecture with reusable UI components
- Data-driven content rendering from `data.js`
- Filter logic implemented in `projects.svelte` and resume pages
- View transitions on navigation for smooth UX

## Credits

- UI Components: [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte)
- Icons: [Lucide](https://lucide.dev) and custom SVG assets
- Tech icons: [Devicons](https://devicons.dev)
- Framework: [Svelte](https://svelte.dev) / [SvelteKit](https://kit.svelte.dev)

## License

Private - All rights reserved

---

**Built by Felix Sylvest Olesen**
Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/felix-sylvest-olesen/) or [GitHub](https://github.com/felixOlesen)
