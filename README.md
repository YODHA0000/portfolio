# Modern Portfolio Website

A beautiful, animated portfolio website built with React, TypeScript, and Framer Motion.

## 🚀 Features

- Smooth entrance animation
- Custom cursor with hover effects
- Interactive background with ripple effects
- Responsive design
- Blog section
- Project showcase
- Contact section
- Full-screen navigation menu

## 🛠️ Technology Stack

- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **Vite**: Build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Background.tsx    # Interactive canvas background
│   ├── Blog.tsx         # Blog section with cards
│   ├── Contact.tsx      # Contact section with social links
│   ├── Cursor.tsx       # Custom cursor implementation
│   ├── EntranceAnimation.tsx # Grid animation on load
│   ├── Header.tsx       # Site header with navigation
│   ├── Hero.tsx         # Hero section
│   ├── MainContent.tsx  # Main content wrapper
│   ├── Navigation.tsx   # Full-screen navigation menu
│   └── Projects.tsx     # Project showcase grid
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔍 Component Details

### Background.tsx
- Creates an interactive canvas background
- Generates ripple effects on mouse movement
- Uses requestAnimationFrame for smooth animation

### Cursor.tsx
- Custom cursor implementation with spring physics
- Scales up when hovering over interactive elements
- Smooth movement using Framer Motion springs

### EntranceAnimation.tsx
- Grid-based entrance animation
- Responsive grid size based on viewport
- Staggered animation using distance-based delays

### Navigation.tsx
- Full-screen navigation menu
- Smooth transitions for opening/closing
- Responsive design with mobile support

## 🚀 Deployment Guide

1. **GitHub Repository Setup**:
   ```bash
   # Initialize git repository
   git init

   # Add all files
   git add .

   # Commit changes
   git commit -m "Initial commit"

   # Create new repository on GitHub and add remote
   git remote add origin https://github.com/yourusername/portfolio.git

   # Push to GitHub
   git push -u origin main
   ```

2. **GitHub Pages Deployment**:
   - Update `vite.config.ts`:
     ```typescript
     export default defineConfig({
       plugins: [react()],
       base: '/your-repo-name/', // Add this line
     });
     ```
   - Add deployment script to `package.json`:
     ```json
     {
       "scripts": {
         "deploy": "npm run build && gh-pages -d dist"
       }
     }
     ```
   - Install gh-pages: `npm install -D gh-pages`
   - Run: `npm run deploy`

3. **Environment Setup**:
   - Create `.env` file for environment variables
   - Add `.env` to `.gitignore`
   - Update social links and personal information

## 🎨 Customization

1. **Colors**: Update Tailwind theme in `tailwind.config.js`
2. **Content**: Modify content in respective components
3. **Images**: Replace project images in `Projects.tsx`
4. **Social Links**: Update links in `Contact.tsx`
5. **Animations**: Adjust timing in Framer Motion configs

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Fluid typography using Tailwind's responsive classes
- Adaptive grid layouts for different screen sizes

## ⚡ Performance

- Code splitting with React.lazy()
- Optimized canvas rendering
- Efficient animation using transforms
- Responsive image loading
- Minimal bundle size