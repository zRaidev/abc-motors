# ABC Motors (Vite + React)

This project uses [Vite](https://vitejs.dev/) as the build tool and [React](https://react.dev/) for the UI framework.

## Quick Start

### Installation
```bash
npm install
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the Vite dev server (http://localhost:5173) |
| `npm run build` | Build for production (`build/` folder) |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests in watch mode (Vitest) |
| `npm run test:ci` | Run tests once (CI/CD) |
| `npm run lint` | Check for linting errors (ESLint) |
| `npm run lint:fix` | Fix linting errors automatically |

## Project Structure

```
abc-motors/
├── src/
│   ├── components/      # React components (Navbar, Footer, Layout, ScrollToTopButton)
│   ├── pages/           # Page components (Home, Vehiculos, Cotizar, ContactarAgente, etc.)
│   ├── data/            # Static data (vehiculos.js)
│   ├── App.jsx          # Root component
│   ├── index.jsx        # React entry point
│   ├── index.css        # Global styles
│   └── App.css          # App-specific styles
├── public/              # Static assets (manifest.json, robots.txt)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment configuration
```

## Technologies Used

- **React 19** - UI framework
- **Vite 7** - Lightning-fast build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vitest 4** - Unit testing framework (Jest-compatible)
- **ESLint 9** - Code linting
- **EmailJS** - Email service integration
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon library
- **Headless UI** - Unstyled accessible UI components

## Development

### Hot Module Replacement (HMR)
Vite provides fast HMR out of the box. Changes to your code will be reflected instantly in the browser.

### Linting
The project uses ESLint with React and React Hooks plugins. Run `npm run lint` to check for issues, or `npm run lint:fix` to auto-fix them.

### Testing
Tests are written using Vitest and React Testing Library. Test files use the `.jsx` extension and are auto-discovered in the `src/` directory.

## Building for Production

```bash
npm run build
npm run preview  # Optional: preview the build locally
```

The optimized production bundle will be in the `build/` directory.

## Deployment

The `build/` folder is production-ready and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Configuration](https://eslint.org/docs/latest/use/configure/)
- [Tailwind CSS](https://tailwindcss.com/)
