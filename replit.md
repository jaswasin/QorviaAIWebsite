# Qorvia.ai - AI Consultancy & Digital Cloning Platform

## Overview

Qorvia.ai is a modern AI consultancy and digital cloning solutions platform built with a full-stack TypeScript architecture. The application serves as a marketing website with consultation request functionality, showcasing AI services and allowing potential clients to submit consultation requests. The platform emphasizes a sophisticated, modern design inspired by Linear, Stripe, and Vercel, combining technical credibility with human approachability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- TailwindCSS for utility-first styling with custom design system
- shadcn/ui component library (Radix UI primitives) for accessible, customizable UI components

**Design System:**
- Custom color scheme using CSS variables for theming (light/dark mode support)
- Typography system using Inter, DM Sans, Space Grotesk, and Outfit fonts
- Consistent spacing scale and border radius system
- Component variants using class-variance-authority for systematic styling
- Elevation system with hover and active states for interactive elements

**State Management:**
- TanStack Query (React Query) for server state management and API data fetching
- React Hook Form with Zod resolver for type-safe form validation
- React Context for theme management (light/dark mode)
- Local component state using React hooks

**Routing Strategy:**
- Single-page application with client-side routing via Wouter
- Main route (/) serves the home page
- 404 fallback for unmatched routes

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- Dual-mode server setup: development (with Vite integration) and production (serving static assets)
- TypeScript throughout for type safety

**Development vs Production:**
- Development: Vite middleware integrated with Express for HMR and on-demand compilation
- Production: Pre-built static assets served from dist/public directory
- Separate entry points (index-dev.ts and index-prod.ts) for environment-specific configurations

**API Design:**
- RESTful API endpoints under /api prefix
- JSON request/response format
- Zod schema validation for request data
- Error handling with appropriate HTTP status codes

**Data Persistence:**
- In-memory storage (MemStorage) currently implemented for consultation requests
- Designed for easy migration to database (Drizzle ORM with PostgreSQL schema already defined)
- Storage abstraction layer (IStorage interface) allows swapping implementations without changing business logic

### Database Schema (Prepared but Not Active)

**ORM Setup:**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver for database connectivity
- Migration system configured with drizzle-kit

**Schema Design:**
- `consultation_requests` table with fields:
  - id (UUID, auto-generated primary key)
  - name, email, company (text fields for client information)
  - service (selected service type)
  - projectDescription (detailed project information)
  - budgetRange (client's budget expectations)
  - createdAt (automatic timestamp)

**Validation:**
- Drizzle-Zod integration for runtime validation
- Type-safe insert and select operations
- Email validation, minimum length requirements, and required fields enforced

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, select, toast, tooltip, etc.)
- shadcn/ui configuration for consistent component styling
- Embla Carousel for image carousels
- cmdk for command palette functionality
- Lucide React for icon system

**Form Management:**
- React Hook Form for performant form handling
- @hookform/resolvers for Zod schema integration
- Date-fns for date formatting and manipulation

**Development Tools:**
- Replit-specific plugins for development environment integration
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing

**Database & Session (Configured):**
- @neondatabase/serverless for PostgreSQL connectivity
- connect-pg-simple for PostgreSQL session storage (prepared for future authentication)
- Drizzle ORM and drizzle-kit for database operations and migrations

**Styling:**
- TailwindCSS with custom configuration
- class-variance-authority for component variant management
- clsx and tailwind-merge for conditional className handling

**Build & Deployment:**
- Vite for development server and production builds
- TypeScript compiler for type checking
- Separate build process for client and server bundles

### Key Architectural Decisions

**Separation of Concerns:**
- Clear separation between client, server, and shared code
- Shared schema definitions between frontend and backend for type consistency
- Storage abstraction allows switching from in-memory to database without changing API layer

**Type Safety:**
- End-to-end TypeScript for compile-time error detection
- Zod schemas provide runtime validation that matches TypeScript types
- Path aliases (@/, @shared/, @assets/) for clean imports

**Scalability Preparation:**
- Database schema already defined for easy migration from in-memory storage
- Session management infrastructure prepared (connect-pg-simple)
- Modular component architecture allows incremental feature additions

**Developer Experience:**
- Hot module replacement in development
- Automatic type generation from Drizzle schemas
- Comprehensive UI component library for rapid development
- Design guidelines document for consistent visual implementation

**Performance Considerations:**
- Code splitting through dynamic imports (Vite)
- Static asset optimization in production build
- Query caching through TanStack Query
- Optimized font loading with Google Fonts preconnect