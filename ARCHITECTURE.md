# Gain Acoustic Solutions - Technical Architecture Document

## 1. Overview
This document outlines the Solution Architect level breakdown for the **Gain Acoustic Solutions** frontend repository. The project is a single-page application landing site designed to showcase large-format printed acoustic panels, highlight installations via galleries, and provide contact mechanisms.

## 2. Software Architecture

### 2.1 Framework & Core Technologies
- **Framework:** Next.js (version 15.2.8) using the **App Router** (`app/` directory).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS (v4) coupled with CSS variables for dynamic theme management (dark/light mode).
- **UI Components:**
  - Radix UI primitives for accessible, unstyled foundation components.
  - Custom UI components constructed using the `shadcn/ui` pattern (located in `components/ui/`).
  - `framer-motion` (implied/potential based on typical Next.js stacks, but custom animations here use **GSAP** `gsap ^3.13.0` and **OGL** `ogl ^1.0.11` for WebGL circular galleries).
- **Icons:** `lucide-react`.

### 2.2 Directory Structure & Component Organization
- **`app/`**: Contains the root layout (`layout.tsx`), global CSS (`globals.css`), and the primary page (`page.tsx`) representing the single-page application structure.
  - `page.tsx` heavily uses semantic HTML with IDs (`#home`, `#gallery`, `#contact`) to allow scroll-to anchor navigation.
- **`components/`**: Houses higher-level feature components.
  - `loading-screen.tsx`: Initial loading animation management.
  - `reviews.tsx`: Customer reviews or testimonials section.
  - `wall-systems-showcase.tsx`: Complex compound component that renders multiple sub-galleries (e.g., Vulcan, Cloud Installs).
  - `theme-provider.tsx`: Uses `next-themes` to manage light/dark mode persistence and toggling.
- **`components/ui/`**: Reusable, primitive UI blocks. Features standard components (`button.tsx`, `dialog.tsx`, `input.tsx`) and highly specialized interactive elements:
  - `CircularGallery.tsx` / `CircularGallery.css`: WebGL-based infinite circular image gallery powered by OGL.
  - `LogoLoop.tsx` / `LogoLoop.css`: Looping logo banner animation.
- **`lib/`**: Typically used for utility functions (e.g., `utils.ts` for Tailwind class merging using `clsx` and `tailwind-merge`).
- **`public/`**: Static assets like `GASLogoI_25.png` and numerous image assets used in galleries.

### 2.3 Data Flow & State Management
- **State Management:** Predominantly relies on local React state (`useState`, `useEffect`, `useRef`) rather than global state managers like Redux or Zustand. The app's data complexity is low, primarily revolving around UI state (modal open/close, active gallery tab).
- **Data Source:** Gallery image lists and installation data are hardcoded directly into the components (e.g., `wall-systems-showcase.tsx`), serving essentially as static content.
- **External Integrations:**
  - **WhatsApp Chat:** Integrated via a client-side injected external script from Elfsight (`https://elfsightcdn.com/platform.js`). Loaded using Next.js `<Script strategy="lazyOnload" />` in `app/layout.tsx` to prevent hydration issues and optimize load performance.

## 3. Infrastructure & Deployment Architecture

### 3.1 Build & Configuration Characteristics
- The `next.config.mjs` file explicitly configures `images: { unoptimized: true }`. This indicates that the build is likely intended for a pure static export (`next export` or purely static CDN hosting) where standard Next.js Image Optimization API (which requires a Node.js server environment) is not available or desired.
- ESLint and TypeScript build errors are ignored during build (`ignoreDuringBuilds: true`, `ignoreBuildErrors: true`). While this allows for rapid prototyping and deployment, a production environment should eventually re-enable these to ensure code quality.

### 3.2 Recommended Hosting Architecture
Given the static nature of the content and the Next.js framework, the following hosting solutions are recommended:

**Option A: Vercel (Preferred for Next.js)**
- Vercel provides zero-configuration deployment for Next.js apps.
- Automatic Edge CDN distribution.
- Seamless handling of API routes (if added later) and Next.js Image Optimization (if `unoptimized: true` is removed).

**Option B: AWS S3 + CloudFront (or similar Static Hosting)**
- Since images are marked as unoptimized, the site can be built as static HTML/CSS/JS (`next build`).
- The exported output (`out/` directory, if configured) can be hosted in an S3 bucket and served globally via CloudFront.
- This is highly cost-effective and provides massive scalability for landing pages.

### 3.3 CI/CD Pipeline Recommendations
A standard CI/CD pipeline (e.g., GitHub Actions, GitLab CI) should include:
1. **Linting & Type Checking:** Run `npm run lint` and `tsc --noEmit` (requires modifying `next.config.mjs` to respect errors in production).
2. **Build:** Execute `npm run build`.
3. **Deployment:** Automatically deploy the build artifacts to the chosen hosting provider on merges to the `main` branch.

## 4. Key Architectural Considerations & Constraints
- **WebGL & Client-Side Execution:** The `CircularGallery` relies heavily on client-side APIs (WebGL, `ResizeObserver`). Care must be taken to ensure these components are dynamically imported without Server-Side Rendering (SSR) if hydration mismatches occur, or that they safely bail out when `window` is undefined.
- **Asset Management:** The repository contains large arrays of images. Moving forward, transitioning to a Headless CMS (like Sanity or Contentful) instead of hardcoding image paths in arrays would improve content manageability.
- **Event Propagation in Modals:** Complex interactive components (like `CircularGallery` which needs window-level drag events) must be carefully isolated when rendered inside Shadcn `Dialog` (modal) components to prevent event trapping or focus loss.