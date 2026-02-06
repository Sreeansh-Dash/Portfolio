# Sreeansh Dash | Portfolio Book

## Inspiration
Designed with a retro editorial book aesthetic, this portfolio re-imagines the standard personal website as a digital book. It features:
- **Chapter-like Navigation**: Organizing content into logical, narrative-driven sections.
- **First-Person Narrative**: Content written to feel personal, authored, and intentional.
- **Atmospheric Design**: Subtle page-turning animations, paper textures, and shadow play to evoke the feeling of a physical volume.
- **Visual Typography**: A carefully curated selection of serif and handwriting fonts (Playfair Display, Cormorant Garamond, Reenie Beanie) to enhance the editorial feel.

## Tech Stack
This project is built with a modern, performance-focused stack:

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Playfair Display, Lato, Inter, Cormorant Garamond, Great Vibes, La Belle Aurore)

## Directory Structure

```text
Portfolio/
├── components/          # React components (Layout, Navigation, etc.)
├── public/              # Static assets (images, icons)
├── App.tsx              # Main Application entry point & Routing logic
├── constants.ts         # Configuration constants and data
├── index.css            # Global styles and Tailwind directives
├── index.html           # HTML entry point with font links
├── tailwind.config.js   # Tailwind CSS configuration
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite build configuration
```

## How to Run

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start Development Server**
   Run the local development server with hot module replacement:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or the port shown in your terminal).

3. **Build for Production**
   To create an optimized production build:
   ```bash
   npm run build
   ```
   The output allows for a high-performance static deployment.

4. **Preview Production Build**
   To preview the built application locally:
   ```bash
   npm run preview
   ```
