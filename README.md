# React Crash Course - Blog Posts App

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-green.svg)](https://vitejs.dev/)
[![MIT License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

## Description

A full-stack React application demonstrating modern React patterns with Vite build tool, React Router for client-side routing, and a simple Express.js backend serving posts data from JSON. This is a crash course project covering components, state management, modals, forms, and CRUD-like operations for blog posts.

## Features

- Browse list of posts (`PostsList`)
- View individual post details (`PostDetails`)
- Create new posts via form (`NewPost`)
- Responsive UI with `MainHeader` and `Modal` components
- Local JSON backend for data persistence

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Quick Start

### Backend (Express API)

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:3000` (serves `/posts` endpoint from `posts.json`).

### Frontend (React + Vite)

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` (proxies API calls to backend).

## Project Structure

```
react-summary/
├── backend/
│   ├── app.js          # Express server
│   ├── posts.json      # Sample posts data
│   └── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── components/     # Reusable UI: Post, PostsList, MainHeader, Modal
│   ├── routes/         # Pages: Posts, NewPost, PostDetails, RootLayout
│   ├── main.jsx        # Entry point
│   └── index.css
├── package.json        # Frontend deps: React 18, React Router
├── vite.config.js
└── index.html
```

## Available Scripts (Frontend)

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run preview # Preview built app
```

## Usage

- Visit `http://localhost:5173/posts` to see post list.
- Click "New Post" for `/new-post` form.
- Click a post to view details `/post/:id`.
- Backend auto-reloads posts data.

## Tech Stack

- **Frontend**: React 18, React Router DOM v7, Vite, CSS Modules
- **Backend**: Node.js, Express
- **Data**: JSON file (posts.json)

## Contributing

Fork, create a branch, PR with changes.

## License

MIT License - see [LICENSE](LICENSE) file or create one.
