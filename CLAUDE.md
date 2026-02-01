# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Edge Agent Lab is a microsite for [edgeagentlab.dev](https://edgeagentlab.dev) that serves three purposes:
1. **Landing page** explaining the Edge Agent Lab testing platform for on-device AI agents
2. **Test visualization UI** for browsing test definitions in a friendly format
3. **Static API endpoint** serving `tests/tool_tests.json` for consumption by the Android app at `https://edgeagentlab.dev/tests/tool_tests.json`

The site is built with React + TypeScript + Vite and hosted on GitHub Pages. Domain is managed via IONOS with DNS A records pointing to GitHub Pages IPs.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Key Structural Decisions

**Test JSON File Location**: The `tool_tests.json` file must be in `public/tests/` (NOT in root `tests/`). This ensures it's served at `/tests/tool_tests.json` after build, maintaining compatibility with the Android app endpoint.

**Data Flow**:
- Test definitions are stored in `public/tests/tool_tests.json`
- `TestViewer` component fetches from `/tests/tool_tests.json` at runtime
- TypeScript types in `src/types.ts` define the test schema
- Each test includes: id, name, query, system prompt, tools (function definitions), optional mock responses, and validation rules

### Component Structure

**App.tsx**: Main page layout including:
- Header with project title and links
- Multiple content sections (What is this?, Test Endpoint, Resources, Roadmap)
- `TestViewer` component for test inspection
- Footer with attribution

**TestViewer.tsx**: Interactive test browser that:
- Fetches test definitions from `/tests/tool_tests.json`
- Displays tests in an expandable card grid
- Shows test details on click: description, system prompt, tools, mock responses, validation rules
- Uses `types.ts` interfaces for type safety

### Test Definition Schema

Tests follow the `TestDefinition` interface with:
- Basic info: `id`, `name`, `description`, `domain`, `context`
- Query: `query.text` (the user's input)
- `system_prompt`: Instructions for the AI agent
- `tools`: Array of function definitions (OpenAI-style tool format)
- `mock_tool_responses`: Simulated tool outputs keyed by tool name
- `rules`: Validation rules (e.g., `tool_match`, `tool_args_match`, `response_length_min`, `no_tool_calls`)

### Styling

Uses custom CSS utility classes with CSS variables for theming:
- `src/index.css`: CSS variables, global styles, and utility classes
- `src/components/TestViewer.css`: Test viewer component-specific styles

**Utility class pattern**: Classes like `.bg-dark`, `.text-primary`, `.text-muted` map to CSS variables (`--bg-dark`, `--text-primary`, `--text-muted`). This provides Tailwind-like convenience without the dependency.

## TypeScript Configuration

Uses TypeScript 5.9.3 with project references:
- `tsconfig.json`: Root config with references
- `tsconfig.app.json`: App source configuration
- `tsconfig.node.json`: Node/build tool configuration

## Deployment

Automated via GitHub Actions (`.github/workflows/deploy.yml`):
1. Triggered on push to `main` or manual workflow dispatch
2. Installs dependencies, runs linter, builds the project
3. Deploys `dist/` directory to GitHub Pages
4. Site is served at custom domain: `edgeagentlab.dev`

## Code Quality Standards

- **No console statements** in production code
- **No unused imports or files** - keep the codebase minimal
- **Semantic utility classes** - use `.bg-dark` not `.bg-bg-dark`
- **CSS variables** for theming consistency
- **TypeScript strict mode** for type safety
