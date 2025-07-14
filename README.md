# JOI Energy - Angular Frontend

A modern, responsive Angular 14 application for energy consumption monitoring with real-time charts and device management.

## 🚀 Features

- **Real-time Energy Dashboard**: Monitor power consumption, solar production, and grid feed
- **Device Management**: Track individual device power usage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Charts**: Dynamic energy consumption visualization using Chart.js
- **Mobile-First UX**: Hamburger menu with slide-out sidebar for mobile devices

## 🛠️ Technologies

- **Frontend Framework**: Angular 14
- **Language**: TypeScript 4.7
- **Styling**: SCSS + BassCSS (utility-first CSS framework)
- **Charts**: Chart.js 3.2.1
- **Code Quality**: ESLint + Prettier + Husky
- **Package Manager**: npm

## 📱 Responsive Design

The application is fully responsive with optimized layouts for different screen sizes:

### Desktop (> 767px)

- Sidebar always visible on the left
- Main content area on the right
- Full-height layout with proper spacing

### Tablet (480px - 767px)

- Mobile header with hamburger menu
- Slide-out sidebar (280px width)
- Optimized touch targets and spacing

### Mobile (< 480px)

- Compact mobile header (56px height)
- Narrower sidebar (260px width)
- Touch-friendly interface with 44px minimum touch targets

## 🎨 Design System

- **Color Palette**: Clean grays and blues with energy-themed accents
- **Typography**: Nunito font family for excellent readability
- **Spacing**: Consistent 8px grid system
- **Shadows**: Subtle elevation with multiple shadow levels
- **Animations**: Smooth transitions using cubic-bezier easing

## 🏗️ Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── chart/           # Chart.js integration
│   │   ├── main/            # Main dashboard component
│   │   └── side-bar/        # Energy data sidebar
│   ├── shared/
│   │   ├── models/          # TypeScript interfaces
│   │   ├── services/        # Angular services
│   │   └── utils/           # Utility functions
│   └── ...
├── assets/
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm 8+

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend-joyofenergy-Angular
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🔧 Development

### Available Scripts

```bash
# Development
npm start              # Start development server
npm run build          # Build for production
npm run watch          # Build with watch mode

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix auto-fixable linting issues
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting

# Testing
npm test               # Run unit tests
```

### Code Quality Tools

This project uses several tools to ensure code quality and consistency:

#### ESLint

- **Purpose**: Static code analysis and linting
- **Configuration**: `.eslintrc.json`
- **Rules**: Angular-specific rules, TypeScript best practices, accessibility guidelines

#### Prettier

- **Purpose**: Code formatting
- **Configuration**: `.prettierrc`
- **Features**: Consistent code style across the project

#### Husky + lint-staged

- **Purpose**: Git hooks for pre-commit quality checks
- **Behavior**: Automatically runs ESLint and Prettier on staged files
- **Configuration**: `.husky/pre-commit` and `package.json` lint-staged section

### Code Quality Workflow

1. **Before committing**: Quality checks run automatically via Husky
2. **Manual checks**:
   - `npm run lint` - Check for linting issues
   - `npm run format:check` - Check formatting
3. **Auto-fix**:
   - `npm run lint:fix` - Fix linting issues
   - `npm run format` - Format code

## 📱 Mobile Features

### Hamburger Menu

- **Position**: Top-left corner in mobile view
- **Animation**: Smooth transformation to X when active
- **Functionality**: Toggles sidebar visibility

### Sidebar Navigation

- **Slide Animation**: Smooth slide-in from left
- **Overlay**: Dark backdrop with blur effect
- **Close Methods**:
  - Tap hamburger menu
  - Tap overlay area
- **Content**: Energy consumption data and device list

### Touch Optimization

- **Touch Targets**: Minimum 44px for all interactive elements
- **Smooth Scrolling**: Native scroll behavior
- **Tap Highlights**: Disabled for clean interaction
- **Font Size**: 16px minimum to prevent zoom on iOS

## 🎯 Key Components

### Main Component (`app-main`)

- Dashboard layout management
- Sidebar state control
- Mobile header integration

### Sidebar Component (`app-side-bar`)

- Energy consumption display
- Device power monitoring
- Responsive layout adaptation

### Chart Component (`app-chart`)

- Chart.js integration
- Responsive canvas sizing
- Data visualization

## 🔧 Configuration Files

- **`.eslintrc.json`**: ESLint configuration for Angular
- **`.prettierrc`**: Prettier formatting rules
- **`.prettierignore`**: Files to exclude from formatting
- **`angular.json`**: Angular CLI configuration
- **`package.json`**: Dependencies and scripts

## 🐛 Troubleshooting

### Common Issues

#### TypeScript Errors

If you encounter TypeScript compilation errors:

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm cache clean --force
npm install --legacy-peer-deps
```

#### ESLint Configuration

If ESLint fails to load:

```bash
# Ensure correct @angular-eslint versions for Angular 14
npm install --save-dev @angular-eslint/eslint-plugin@14.0.0 @angular-eslint/eslint-plugin-template@14.0.0 @angular-eslint/template-parser@14.0.0 @angular-eslint/builder@14.0.0 --legacy-peer-deps
```

#### Mobile Layout Issues

- Ensure viewport meta tag is present in `index.html`
- Check responsive breakpoints in `src/index.scss`
- Verify touch targets meet 44px minimum

## 📊 Performance

- **Bundle Size**: Optimized with Angular CLI production build
- **Loading**: Lazy loading ready for future feature modules
- **Caching**: Proper cache headers for static assets
- **Mobile**: Optimized for mobile network conditions

## 🔒 Security

- **Content Security Policy**: Configured for Angular applications
- **XSS Protection**: Angular's built-in sanitization
- **HTTPS Ready**: Configured for secure deployment

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Build Output

- Location: `dist/angular-frontend-developer-joyofenergy/`
- Optimized for production
- Minified and bundled assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `npm run lint && npm run format:check`
5. Commit with descriptive messages
6. Push and create a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Chart.js for powerful data visualization
- BassCSS for utility-first CSS framework
- The open-source community for quality tools and libraries
