# Advaya - Handcrafted Desi Tote Bags

## Overview

Advaya is a responsive mini e-commerce website for a brand selling handcrafted tote bags with Indian-inspired prints. The project combines modern web technologies with traditional Indian design aesthetics to create an elegant shopping experience. The application features a full-stack architecture with a React frontend, Express backend, and PostgreSQL database integration, built for deployment on Replit.

The brand celebrates Indian craft traditions through products featuring block prints, paisley, and mandala motifs on eco-friendly cotton totes. The website provides product browsing, filtering, cart management, and WhatsApp-based checkout functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with Vite for fast development and optimized production builds. The UI is constructed using:
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for brand theming (beige, terracotta, mustard, maroon, sage color palette)
- **Typography**: Playfair Display for headings (serif) and Inter for body text (sans-serif)
- **State Management**: React hooks with TanStack Query for server state and local storage for cart persistence
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
The server architecture follows a REST API pattern using Express.js:
- **Framework**: Express.js with TypeScript for type safety
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Vite integration for hot module replacement in development mode

### Data Storage Solutions
The application uses a hybrid storage approach:
- **Database**: PostgreSQL with Neon serverless integration for production data
- **ORM**: Drizzle ORM with Zod schema validation for type-safe database operations
- **Local Storage**: Browser localStorage for shopping cart persistence
- **Session Storage**: PostgreSQL-backed sessions for user state management

### Component Design Patterns
The frontend follows a modular component architecture:
- **Layout Components**: Reusable layout wrapper with navigation and cart drawer
- **Feature Components**: Specialized components for Hero, Shop, About sections
- **UI Components**: Atomic design system using shadcn/ui primitives
- **Custom Hooks**: useCart for cart management, useProductFilters for search/filtering logic

### E-commerce Features
- **Product Catalog**: JSON-based product data with filtering by price, print style, and color
- **Shopping Cart**: Persistent cart with quantity management and localStorage sync
- **Checkout Integration**: WhatsApp-based ordering system with pre-filled message formatting
- **Product Management**: Modal-based product detail views with image zoom and specifications

### Styling and Theming
The application uses a comprehensive design system:
- **CSS Custom Properties**: Centralized color palette and design tokens
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Cultural Theming**: Traditional Indian color scheme and typography choices
- **Animation**: CSS transitions and hover effects for enhanced user experience

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **shadcn/ui**: Pre-built component library built on Radix primitives
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Playfair Display and Inter font families

### State Management and Data
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with Zod validation (@hookform/resolvers)
- **Zod**: Schema validation for type-safe data handling
- **date-fns**: Date manipulation and formatting utilities

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment plugins and runtime error handling

### Third-party Integrations
- **WhatsApp Business**: Checkout integration via WhatsApp Web links
- **Unsplash/Pixabay**: Image CDN for product and lifestyle photography
- **Font Awesome**: Additional icon library for brand consistency

### Development and Build
- **Wouter**: Lightweight client-side routing
- **clsx/twMerge**: Conditional CSS class management
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component for enhanced UX