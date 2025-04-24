# Social Media Management Application - Architecture Document (v3 - tRPC)

## 1. Overview

This document outlines the technical architecture for the Social Media Management web application designed for a marketing agency. The primary goal is to provide a platform for managing multiple client social media accounts, scheduling posts, and viewing basic analytics across Facebook, Instagram, and Twitter via a modern web interface. This version updates the architecture to use tRPC for end-to-end type safety between the frontend and backend.

## 2. Technology Stack

*   **Backend:** Node.js, Express.js, tRPC
*   **Frontend:** React (v18+), Vite
*   **UI Framework:** Material UI (MUI) v5+ (Core, System, Icons)
*   **Database:** PostgreSQL
*   **ORM:** Prisma (Backend)
*   **Validation:** Zod (Backend & Frontend)
*   **State Management:** React Query (via tRPC) + Redux Toolkit (for UI state)
*   **Routing:** React Router (v6+)
*   **Form Management:** React Hook Form
*   **Authentication:** JSON Web Tokens (JWT)
*   **Logging:** Winston (Backend)

## 3. tRPC Architecture

### 3.1. Design Principles

*   **End-to-End Type Safety:** Use tRPC to create a fully type-safe API layer between frontend and backend.
*   **Modular Structure:** Organize code into feature-based modules for maintainability.
*   **Service Layer:** Abstract business logic into service functions.
*   **Data Access Layer:** Use Prisma for type-safe database interactions.
*   **Input Validation:** Use Zod schemas for validating procedure inputs and outputs.
*   **Environment Variables:** Manage configuration (database credentials, API keys, JWT secrets) using `.env` files.

### 3.2. Backend Structure (Illustrative Structure in `packages/`)

*   `packages/`: Monorepo structure
    *   `api/`: tRPC API definition
        *   `src/`:
            *   `routers/`: Feature-based tRPC routers (e.g., `auth.ts`, `users.ts`, `clients.ts`, `posts.ts`, `socialAccounts.ts`)
            *   `procedures/`: Reusable procedure creators
            *   `trpc.ts`: tRPC initialization and context creation
            *   `index.ts`: Root router and type exports
    *   `server/`: Express server implementation
        *   `src/`:
            *   `index.ts`: Server entry point
            *   `createContext.ts`: tRPC context creation
            *   `middleware/`: Common middleware (authentication, error handling, request logging)
            *   `services/`: Business logic services
            *   `utils/`: Utility functions
    *   `db/`: Database layer
        *   `prisma/`: Prisma schema and migrations
        *   `src/`: Database utilities and seed scripts
    *   `shared/`: Shared code between frontend and backend
        *   `src/`:
            *   `schemas/`: Zod schemas
            *   `types/`: TypeScript types
            *   `constants/`: Shared constants
    *   `client/`: Frontend React application
        *   `src/`: (See Frontend Architecture section)

### 3.3. tRPC Implementation

*   **Router Structure:** Feature-based routers (auth, users, clients, posts, socialAccounts)
*   **Procedure Types:**
    *   `query`: Read-only operations (e.g., getUser, listPosts)
    *   `mutation`: Write operations (e.g., createPost, updateClient)
    *   `subscription`: Real-time updates (optional, for future features)
*   **Context:** Request-specific context including authenticated user information
*   **Middleware:** tRPC middleware for authentication, logging, etc.
*   **Error Handling:** Structured error responses using tRPC's error formatter

### 3.4. External API Integration

*   Implemented OAuth flows for Facebook, Instagram, and Twitter.
*   Securely store access and refresh tokens in the database (associated with `SocialAccount`).
*   Handle token refresh logic for expired credentials via backend services.

## 4. Frontend Architecture (React / tRPC / MUI)

### 4.1. Design Principles

*   **Component-Based:** Build UI using reusable React functional components with Hooks.
*   **Build Tool:** Utilize Vite for fast development server startup, Hot Module Replacement (HMR), and optimized production builds.
*   **UI Framework:** Employ Material UI (MUI) for a comprehensive set of pre-built, customizable components adhering to Material Design principles.
*   **Routing:** Use React Router for client-side navigation and declarative routing.
*   **State Management:**
    *   **Server State:** React Query (via tRPC) for managing server-side state
    *   **UI State:** Redux Toolkit for managing global UI state
    *   **Local State:** React Hooks (useState, useEffect) for component-level state
*   **Styling:** Utilize MUI's styling solutions (e.g., `sx` prop, `styled()`, Emotion) alongside MUI components.
*   **API Communication:** Use tRPC client for type-safe API calls.
*   **Validation:** Use Zod schemas (shared with backend) for form validation. Integrate with React Hook Form.
*   **Type Safety:** Leverage TypeScript throughout the frontend codebase with automatic type inference from tRPC.

### 4.2. Project Structure (Illustrative in `packages/client/`)

*   `public/`: Static assets.
*   `src/`: Main source code directory.
    *   `main.tsx`: Application entry point (renders Root).
    *   `App.tsx`: Root component (sets up providers: Theme, Router, tRPC, Auth).
    *   `components/`: Reusable UI components (atomic/presentational).
        *   `common/`: General-purpose components (e.g., Button, InputField, Card).
        *   `layout/`: Layout structure components (e.g., AppBar, Sidebar, PageWrapper).
        *   `auth/`: Authentication-related UI (e.g., AuthGuard, LoginForm).
    *   `features/` or `modules/`: Feature-specific components, hooks, and services.
        *   `auth/`: Authentication logic, login/signup forms, hooks (`useAuth`).
        *   `clients/`: Client management views, forms, hooks.
        *   `posts/`: Post editor, post list, calendar view components.
        *   `dashboard/`: Dashboard components.
        *   `settings/`: Settings components.
    *   `pages/` or `views/`: Top-level route components assembling features and layouts.
    *   `hooks/`: Reusable custom React hooks.
    *   `store/`: Redux store setup for UI state.
    *   `utils/`: Utility functions.
    *   `theme/`: MUI theme configuration.
    *   `trpc.ts`: tRPC client setup.

## 5. Database Schema (Managed by Prisma)

The database schema is defined in `packages/db/prisma/schema.prisma` with the following core models:

*   **User**: id, email, password, name, role, createdAt, updatedAt, relations (SocialAccounts, Posts)
*   **Client**: id, name, contactEmail, createdAt, updatedAt
*   **SocialAccount**: id, platform, username, accessToken, refreshToken, expiresAt, userId, createdAt, updatedAt, relations (Posts)
*   **Post**: id, content, mediaUrl, scheduledFor, status, userId, socialAccountId, createdAt, updatedAt

## 6. Authentication & Authorization

*   **Authentication:** Users log in via email/password. The backend validates credentials and issues JWT access and refresh tokens.
*   **JWT Handling:**
    *   Tokens are stored securely.
    *   tRPC client automatically attaches the access token to requests.
    *   tRPC links handle 401 errors by attempting to use the refresh token to get a new access token.
*   **Authorization:**
    *   Backend: tRPC middleware verifies JWT and checks roles/permissions on protected procedures.
    *   Frontend: Route guards check for authentication status and potentially user roles before rendering components/pages.

## 7. Key Features Implementation

*   **Account Connection:** OAuth flow initiated from the web frontend, redirecting back after authorization. Backend handles callback and token exchange/storage.
*   **Post Management:** React Hook Form + MUI components for creating/editing posts with Zod validation. API calls via tRPC client.
*   **Content Calendar:** Use a React calendar library integrated with MUI, fetching scheduled post data from the backend via tRPC.
*   **Analytics:** Use a charting library integrated with MUI to display data fetched from backend aggregation endpoints via tRPC.
*   **Client/User Management:** Data tables displaying client/user lists with forms/dialogs for CRUD operations, all using tRPC for data fetching and mutations.

## 8. Migration Strategy

### 8.1. Phase 1: Setup Monorepo Structure

*   Set up a monorepo structure using a tool like Turborepo or Nx.
*   Create packages for API, server, DB, shared, and client.
*   Move existing code into the appropriate packages.

### 8.2. Phase 2: Implement tRPC API

*   Set up tRPC server and client.
*   Implement tRPC routers for each feature area.
*   Convert existing REST endpoints to tRPC procedures.

### 8.3. Phase 3: Update Frontend

*   Update frontend to use tRPC client instead of Axios.
*   Leverage automatic type inference from tRPC.
*   Implement React Query for server state management.

### 8.4. Phase 4: Testing and Optimization

*   Test all functionality with the new architecture.
*   Optimize performance and bundle size.
*   Update documentation.

## 9. Benefits of tRPC Architecture

*   **Type Safety:** End-to-end type safety between frontend and backend without code generation.
*   **Developer Experience:** Improved developer experience with autocompletion and type checking.
*   **Reduced Boilerplate:** No need to define API endpoints, request/response types, or client-side API calls separately.
*   **Performance:** Optimized network requests with React Query's caching and invalidation strategies.
*   **Maintainability:** Easier to maintain and evolve the API as the application grows.
