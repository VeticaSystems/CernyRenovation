# Overview

Cerny Remodeling is a professional home remodeling company website built with React and TypeScript. The application serves as a digital presence for a Northern Virginia-based construction business specializing in kitchen renovations, bathroom remodels, and various home improvement services. The website features service showcases, client testimonials, contact forms, and a feedback system to help potential customers learn about services and request quotes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture built with Vite for fast development and optimized production builds. The frontend is structured using:

- **React Router** for client-side routing with dedicated pages for services, about, and survey functionality
- **Component-based architecture** with reusable UI components built on Radix UI primitives
- **shadcn/ui design system** providing consistent styling and accessibility features
- **Tailwind CSS** for utility-first styling with custom color schemes and responsive design
- **TypeScript** for type safety and better developer experience

## Backend Architecture
The backend follows an Express.js REST API pattern with:

- **Express.js server** handling HTTP requests and serving static assets
- **Memory-based storage** using an in-memory implementation for user data (designed to be easily swapped with database storage)
- **Modular route structure** with separation of concerns between routing, storage, and business logic
- **Development/production environment handling** with Vite middleware in development and static serving in production

## Data Management
The application uses:

- **TanStack Query** for client-side state management and server state synchronization
- **React Hook Form** with Zod validation for form handling and data validation
- **Drizzle ORM** configured for PostgreSQL database operations (currently using memory storage)
- **Schema-first approach** with shared TypeScript types between frontend and backend

## UI/UX Design Patterns
The interface implements:

- **Mobile-first responsive design** with breakpoint-specific layouts
- **Gradient and shadow-based visual hierarchy** creating depth and focus
- **Accessible component library** using Radix UI primitives for keyboard navigation and screen readers
- **Toast notifications** for user feedback and form submission confirmations
- **Modal dialogs** for feedback collection and user interactions

## Development Tools
The project uses:

- **Vite** as the build tool and development server with hot module replacement
- **TypeScript compilation** with strict type checking
- **ESModule format** throughout the codebase for modern JavaScript standards
- **Path aliases** for clean import statements and better code organization

# External Dependencies

## UI Component Library
- **Radix UI** - Unstyled, accessible UI primitives for building the design system
- **shadcn/ui** - Pre-built component library built on top of Radix UI
- **Lucide React** - Icon library providing consistent iconography

## Styling and Design
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **class-variance-authority** - Utility for creating component variants
- **clsx** - Utility for conditional CSS class names

## Form Handling
- **React Hook Form** - Form state management and validation
- **Hookform Resolvers** - Integration layer for external validation libraries
- **Zod** - Schema validation for form data and API contracts

## Database and ORM
- **Drizzle ORM** - Type-safe SQL ORM for database operations
- **Neon Database Serverless** - PostgreSQL-compatible serverless database (configured but not actively used)
- **connect-pg-simple** - PostgreSQL session store for Express sessions

## Development and Build Tools
- **Vite** - Fast build tool and development server
- **esbuild** - Fast bundler for production builds
- **tsx** - TypeScript execution environment for Node.js

## Utility Libraries
- **date-fns** - Date manipulation and formatting
- **browser-image-compression** - Client-side image compression for file uploads
- **nanoid** - Unique ID generation for various application needs