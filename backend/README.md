# Backend (API) for Meso Builder App

## Overview
This backend is built with Node.js, Express, and TypeScript. It follows a modular, API-first architecture to support the hypertrophy training tracker app as described in `AI_DEV_GUIDE.md`.

## Folder Structure
- `src/` - Main source code
  - `models/` - TypeScript data models (User, Exercise, WorkoutSession, Mesocycle, etc.)
  - `controllers/` - Express route handlers (business logic entry points)
  - `routes/` - Express route definitions
  - `services/` - Core business logic (e.g., autoregulation, progression)
  - `utils/` - Utility/helper functions
- `tsconfig.json` - TypeScript configuration
- `package.json` - NPM scripts and dependencies

## Development
- Run `npm install` in this folder to install dependencies.
- Use `npm run dev` to start the development server with hot reload.
- Use `npm run build` to compile TypeScript to `dist/`.
- Use `npm start` to run the compiled server.

## Principles
- Strict typing and modularity
- All business logic (e.g., autoregulation) in `services/`
- API-first: all endpoints return JSON
- Follows the data models and logic in `/docs/AI_DEV_GUIDE.md` and `/docs/TRAINING_LOGIC_RULES.md`

## Next Steps
- Implement data models in `models/`
- Scaffold initial routes/controllers for User, Exercise, WorkoutSession, Mesocycle
- Add business logic for autoregulation in `services/`
