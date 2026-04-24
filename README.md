# CodeEnv Platform

A modern, responsive web application built with React and Material-UI that showcases a software development platform landing page. CodeEnv provides a seamless experience for developers to build software hassle-free with top-notch quality.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Built with Material-UI components for a clean, professional interface
- **Interactive Navigation**: Collapsible drawer for mobile devices with smooth transitions
- **Hero Section**: Eye-catching video background with compelling call-to-action buttons
- **Content Sections**: Dynamic content展示 with alternating layouts for better visual hierarchy
- **Accessibility**: Semantic HTML5 structure with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 19.2.5
- **UI Framework**: Material-UI (MUI) 9.0.0
- **Styling**: Emotion (styled components)
- **Icons**: Material-UI Icons
- **Build Tool**: Create React App
- **Testing**: Jest, React Testing Library

## 📦 Installation

1. Clone the repository:

```bash
git https://github.com/vasylpryimakdev/codeenv-platform.git
cd codeenv-platform
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🎯 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx          # Main header component with navigation
│   │   └── DrawerComp.jsx      # Mobile navigation drawer
│   ├── Content/
│   │   ├── Content.jsx         # Main content container
│   │   └── ContentItem.jsx     # Individual content sections
│   └── Footer/
│       └── Footer.jsx          # Footer component
├── App.js                      # Main application component
├── index.js                    # Application entry point
└── assets/                     # Static assets (images, videos)
```

## 🎨 Key Components

### Header Component

- Sticky navigation bar with responsive design
- Navigation tabs for Products, Solutions, Pricing, Enterprise
- Call-to-action buttons: "Talk To Us" and "Try For Free"
- Mobile-friendly drawer navigation

### Hero Section

- Full-width video background
- Compelling headline: "Build Your Software Hassle Free And Top Notch Quality"
- Dual signup options: Email and Google authentication

### Content Sections

- Three main sections: "Get Things Done", "Productivity Is Brilliant", "Fast Development"
- Alternating left-right layouts for visual variety
- Responsive image and text positioning

## 🚀 Available Scripts

- `npm start` - Run the app in development mode
- `npm test` - Launch the test runner in interactive watch mode
- `npm run build` - Build the app for production
- `npm run eject` - Eject from Create React App (one-way operation)

## 📱 Responsive Breakpoints

The application uses Material-UI's responsive breakpoints:

- **xs**: 0px - 599px (mobile)
- **sm**: 600px - 959px (tablet)
- **md**: 960px - 1279px (small desktop)
- **lg**: 1280px - 1919px (desktop)
- **xl**: 1920px+ (large desktop)

## 🎯 Usage

This project serves as a template for modern web applications using React and Material-UI. It demonstrates best practices for:

- Component-based architecture
- Responsive design patterns
- Material-UI implementation
- Accessibility considerations
- Performance optimization
