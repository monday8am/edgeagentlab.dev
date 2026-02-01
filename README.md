# Edge Agent Lab - Microsite

Microsite for [edgeagentlab.dev](https://edgeagentlab.dev), built with React, TypeScript, and Vite.
Hosted on GitHub Pages.

## Purpose

- **Landing Page**: Explains the purpose of the Edge Agent Lab.
- **Test Visualization**: Friendly UI to browse the `tests/tool_tests.json` definitions.
- **Backend**: Serves the static test definitions for the Android app at `https://edgeagentlab.dev/tests/tool_tests.json`.

## Development

Prerequisite: Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173`

## Deployment

Automated via GitHub Actions. Push to `main` branch triggers the build and deployment workflow to GitHub Pages.

> **Note on File Structure**:
> The `tests/tool_tests.json` file is located in `public/tests/`.
> This ensures it is served at the root `/tests/tool_tests.json` path after build, maintaining compatibility with the Android app.

## Infrastructure

- **Domain**: IONOS
- **Hosting**: GitHub Pages
- **DNS**: A records point to GitHub Pages IPs.

## Architecture

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS utilities with CSS variables

## Notes

- Favicon currently uses Vite default (`public/vite.svg`). Replace with custom Edge Agent Lab icon when available.
