# SineVision - Movie Watchlist App

A React-based movie watchlist application where you can track and manage your favorite movies and TV series. Built with modern web technologies and powered by TMDB and OMDB APIs for comprehensive movie and TV show information.

## 🎬 Features

- **Movie & TV Series Management**

  - Browse popular movies and TV series
  - Search across multiple databases
  - Create and manage watchlists
  - View detailed information from both TMDB and OMDB
  - Rate and track your favorites

- **Dual API Integration**

  - TMDB (The Movie Database) API for trending content and primary data
  - OMDB (Open Movie Database) API for additional movie details
  - Rich movie metadata including ratings, plots, and release dates
  - Comprehensive search across both databases

- **User Experience**
  - Modern and intuitive interface
  - Responsive design for all devices
  - Smart search functionality
  - Beautiful animations and transitions
  - Loading states and error handling

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Local Setup

1. **Clone the Repository**

   ```bash
   git clone <your-repository-url>
   cd sinevision
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory with your API keys:

   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   VITE_OMDB_API_KEY=your_omdb_api_key_here
   ```

   You can obtain API keys from:

   - [TMDB API](https://www.themoviedb.org/documentation/api)
   - [OMDB API](http://www.omdbapi.com/apikey.aspx)

4. **Start Development Server**

   ```bash
   npm run dev
   ```

   This will start the development server on `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```
   The preview server will start on `http://localhost:4173`

## 🛠️ Tech Stack

### Core Technologies

- **React 19** - UI framework
- **Vite 6** - Build tool and development server
- **Redux Toolkit** - State management
- **React Router DOM 7** - Navigation

### UI Components & Styling

- **React Icons** - Icon library
- **DotLottie React** - Animation components
- **React Haiku** - UI components
- **LDRS** - Loading animations

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking (via @types/react)

## 📁 Project Structure

```
sinevision/
├── src/                  # Source code
│   ├── assets/          # Images, fonts, and other static files
│   ├── components/      # Reusable UI components
│   ├── features/        # Redux features and slices
│   │   ├── movies/      # Movie-related features
│   │   └── series/      # TV series features
│   ├── pages/           # Application pages/routes
│   ├── utils/           # Utility functions
│   ├── Store.jsx        # Redux store configuration
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Public static files
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Environment Setup

The project requires two different API keys to function properly. Create a `.env` file in the root directory and add both API keys:

```env
# TMDB API Configuration
VITE_API_KEY=your_tmdb_api_key_here        # Used for trending movies and TV shows
# Get your TMDB API key at: https://www.themoviedb.org/settings/api
# Steps to get TMDB API key:
# 1. Create an account at https://www.themoviedb.org/
# 2. Go to Settings -> API
# 3. Request an API key for developer use
# 4. Copy the API key (v3 auth)

# OMDB API Configuration
VITE_OMDB_API_KEY=your_omdb_api_key_here   # Used for detailed movie information
# Get your OMDB API key at: http://www.omdbapi.com/apikey.aspx
# Steps to get OMDB API key:
# 1. Go to http://www.omdbapi.com/apikey.aspx
# 2. Choose FREE or Patreon plan
# 3. Fill out the form
# 4. Verify your email and activate the key
```

#### API Features

1. **TMDB API** (The Movie Database)

   - Provides trending movies and TV shows
   - High-quality poster images
   - Basic movie/TV show information
   - Popular content listings
   - Base URL for images: `https://image.tmdb.org/t/p/w500`

2. **OMDB API** (Open Movie Database)
   - Detailed movie and TV show information
   - Ratings and reviews
   - Plot summaries
   - Cast information
   - Release dates and runtime

Both APIs must be properly configured for the application to work correctly. Missing or invalid API keys will result in failed requests and empty content.

### Development Server

- Default port: 5173
- To change port: `npm run dev -- --port 3000`

### Build Configuration

- Output directory: `dist/`
- Build command: `npm run build`

## 🚀 Development Workflow

1. **Start Development**

   ```bash
   npm run dev
   ```

   This starts the development server with hot module replacement (HMR).

2. **Code Quality**

   ```bash
   npm run lint
   ```

   Run this before committing to ensure code quality.

3. **Testing Production Build**
   ```bash
   npm run build
   npm run preview
   ```
   This builds and serves the production version locally.

## 🐛 Troubleshooting

Common issues and solutions:

1. **Port Already in Use**

   ```bash
   kill -9 $(lsof -ti:5173)  # For macOS/Linux
   # OR
   netstat -ano | findstr :5173  # For Windows
   ```

2. **Dependencies Issues**

   ```bash
   rm -rf node_modules
   npm cache clean --force
   npm install
   ```

3. **API Key Issues**

   - Ensure both API keys are correctly set in `.env`
   - Check if the keys are valid and active
   - Verify the API endpoints are accessible

4. **Image Loading Issues**

   - Check if TMDB image URLs are correctly formatted
   - Verify your internet connection
   - Clear browser cache if images are not updating

5. **Search Not Working**
   - Ensure both APIs are responding
   - Check the browser console for errors
   - Verify search query formatting

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [OMDB API Documentation](http://www.omdbapi.com/)

## 🤝 Contributing

This is a private project. Please contact the project maintainers for contribution guidelines.

## 📝 License

This project is private and not licensed for public use.
