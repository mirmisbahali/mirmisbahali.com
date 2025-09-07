# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev` - Start the Next.js development server
- **Build**: `npm run build` - Build the production application
- **Start**: `npm run start` - Start the production server
- **Lint**: `npm run lint` - Run ESLint to check code quality

## Architecture

This is a personal portfolio website built with Next.js 13 using the App Router architecture. The site showcases skills, projects, and includes a contact form.

**Key Structure:**
```
src/
├── app/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── CategorySearch.jsx
│   │   ├── EmailSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MenuOverlay.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavLink.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ProjectTag.jsx
│   │   └── TabButton.jsx
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.js - Dynamic project detail pages
│   ├── layout.js - Root layout with Google Tag Manager integration
│   └── page.js - Main landing page with component composition
├── content/ - Project content and documentation
│   ├── intromech/
│   └── mearm-v04/
├── lib/
│   └── projects.js - Project data and utilities
public/ - Static assets including images and SVG icons
```

**Component Architecture:**

The main page (`src/app/page.js`) renders components in this order:
1. **Navbar** (`Navbar.jsx`) - Navigation with menu overlay and links
   - Uses `NavLink.jsx` for navigation items
   - Includes `MenuOverlay.jsx` for mobile navigation
2. **HeroSection** (`HeroSection.jsx`) - Hero banner with animated text and typewriter effects
3. **AchievementsSection** (`AchievementsSection.jsx`) - Stats/achievements with animated numbers
4. **AboutSection** (`AboutSection.jsx`) - About me section with tabs and skills
   - Uses `TabButton.jsx` for tab navigation
5. **ProjectsSection** (`ProjectsSection.jsx`) - Portfolio projects showcase
   - Uses `ProjectCard.jsx` to display individual project cards
   - Uses `ProjectTag.jsx` for project filtering tags (first 3 categories)
   - Uses `CategorySearch.jsx` for searchable category filtering (4+ categories)
   - Integrates with `src/lib/projects.js` for project data
6. **EmailSection** (`EmailSection.jsx`) - Contact form with Formspree integration
7. **Footer** (`Footer.jsx`) - Site footer with social links

**Dynamic Routing:**
- `/projects/[slug]` - Individual project detail pages (`src/app/projects/[slug]/page.js`)
- Project content stored in `src/content/` directory with markdown files and assets
- Project data and utilities managed through `src/lib/projects.js`
- Asset processing automatically copies project assets from `src/content/[project]/assets/` to `public/projects/[project]/`
- Markdown content is processed with Remark to convert to HTML, with image paths automatically updated

**Category System:**
- Categories are dynamically extracted from project frontmatter `tag` arrays
- `getAllCategories()` function in `projects.js` generates categories from all project tags
- First 3 categories displayed as buttons, remaining categories accessible via search
- `CategorySearch.jsx` provides searchable dropdown interface for overflow categories

**Styling:**
- Uses Tailwind CSS with custom color scheme (primary: blue, secondary: sky)
- Dark theme with background color `#121212`
- Custom gradients and animations with Framer Motion

**Contact Form:**
- Uses Formspree (https://formspree.io/f/myzgjvjb) for form submission
- Form is in `EmailSection.jsx` with email, subject, and message fields

**Dependencies:**
- Next.js 13 with App Router
- React 18
- Tailwind CSS with Typography plugin for styling
- Framer Motion for animations
- Heroicons for icons
- React Type Animation and React Animated Numbers for effects
- Gray Matter for parsing markdown frontmatter
- Remark for markdown processing and HTML conversion
- Resend for email functionality

## MCP Servers

This project is configured with MCP (Model Context Protocol) servers for enhanced Claude Code capabilities. The configuration is in `.mcp.json`:

**Available MCP Servers:**

1. **Context7** - Library documentation server
   - Provides up-to-date documentation for any library or framework
   - Use `/resolve-library-id <library-name>` to find the correct library ID
   - Use `/get-library-docs <library-id>` to fetch documentation
   - Configured with HTTP connection to `https://mcp.context7.com/mcp`

2. **Playwright** - Browser automation server
   - Enables web browser automation and testing capabilities
   - Provides tools for taking screenshots, navigating pages, clicking elements
   - Runs via stdio connection using `npx @playwright/mcp@latest`

**Usage:**
- MCP servers are automatically available when using Claude Code
- No additional setup required beyond the `.mcp.json` configuration
- Servers provide enhanced capabilities for documentation lookup and browser automation
- You are an expert Apple designer. Design like how apple designers would design