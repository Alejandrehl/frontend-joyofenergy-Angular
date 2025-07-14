# JOI Energy - Angular Frontend

A modern, responsive Angular 14 application for energy consumption monitoring with real-time charts and device management, built using **Domain-Driven Design (DDD)** principles.

## 🚀 Features

- **Real-time Energy Dashboard**: Monitor power consumption, solar production, and grid feed
- **Device Management**: Track individual device power usage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Charts**: Dynamic energy consumption visualization using Chart.js
- **Mobile-First UX**: Hamburger menu with slide-out sidebar for mobile devices
- **Domain-Driven Design**: Clean architecture with separation of concerns
- **Mock Data System**: Simulated energy data for development and testing

## 🛠️ Technologies

- **Frontend Framework**: Angular 14
- **Language**: TypeScript 4.7
- **Styling**: SCSS + BassCSS (utility-first CSS framework)
- **Charts**: Chart.js 3.2.1
- **Code Quality**: ESLint + Prettier v3 + Husky + lint-staged
- **Architecture**: Domain-Driven Design (DDD)
- **Package Manager**: npm

## 🏗️ Architecture - Domain-Driven Design (DDD)

This project follows **Domain-Driven Design** principles with a clean, layered architecture:

```
src/app/
├── domain/                          # Domain Layer (Business Logic)
│   ├── entities/                    # Domain Entities
│   │   ├── energy-reading.entity.ts
│   │   └── device-consumption.entity.ts
│   ├── value-objects/               # Value Objects
│   │   ├── energy-value.vo.ts
│   │   ├── timestamp.vo.ts
│   │   └── device-category.vo.ts
│   ├── domain-services/             # Domain Services
│   │   └── energy-calculation.service.ts
│   ├── repositories/                # Repository Interfaces
│   │   └── energy-reading.repository.ts
│   └── domain.module.ts             # Domain Configuration
├── application/                     # Application Layer (Use Cases)
│   ├── use-cases/                   # Application Use Cases
│   │   ├── get-energy-readings.usecase.ts
│   │   └── calculate-energy-metrics.usecase.ts
│   └── services/                    # Application Services
│       └── energy-application.service.ts
├── infrastructure/                  # Infrastructure Layer (Data Access)
│   └── repositories/                # Repository Implementations
│       └── mock-energy-reading.repository.ts
└── presentation/                    # Presentation Layer (UI Components)
    └── components/
        ├── chart/                   # Chart.js integration
        ├── main/                    # Main dashboard component
        └── side-bar/                # Energy data sidebar
```

### 🎯 DDD Benefits

- **Separation of Concerns**: Clear boundaries between business logic and technical implementation
- **Maintainability**: Changes in one layer don't affect others
- **Testability**: Each layer can be tested independently
- **Scalability**: Easy to add new features and replace implementations
- **Business Focus**: Code reflects the domain language and business rules

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

#### ESLint + Prettier Integration

- **ESLint**: Static code analysis with Angular-specific rules
- **Prettier v3**: Code formatting with `eslint-plugin-prettier` integration
- **Configuration**: Aligned rules to prevent conflicts between ESLint and Prettier
- **Features**: 
  - TypeScript best practices
  - Angular-specific rules
  - Accessibility guidelines
  - Consistent code formatting

#### Husky + lint-staged

- **Purpose**: Git hooks for pre-commit quality checks
- **Behavior**: Automatically runs ESLint and Prettier on staged files
- **Configuration**: `.husky/pre-commit` and `package.json` lint-staged section
- **Benefits**: Ensures all committed code meets quality standards

### Code Quality Workflow

1. **Before committing**: Quality checks run automatically via Husky
2. **Manual checks**:
   - `npm run lint` - Check for linting issues
   - `npm run format:check` - Check formatting
3. **Auto-fix**:
   - `npm run lint:fix` - Fix linting issues
   - `npm run format` - Format code

## 🏗️ Domain Layer

### Entities

- **`EnergyReading`**: Represents energy consumption readings with business logic
- **`DeviceConsumption`**: Represents device power consumption with validation

### Value Objects

- **`EnergyValue`**: Encapsulates energy values with validation (non-negative)
- **`Timestamp`**: Handles timestamps with comparison and grouping operations
- **`DeviceCategory`**: Defines valid device categories (HVAC, Electronics, etc.)

### Domain Services

- **`EnergyCalculationService`**: Contains business logic for energy calculations
  - Total consumption calculation
  - Average consumption calculation
  - Daily grouping of readings
  - Time-based sorting

## 🔄 Data Flow

```
Component → Application Service → Use Case → Domain Service → Repository
```

The application uses DTOs (Data Transfer Objects) to maintain clean boundaries between layers while preserving the same functionality as the original implementation.

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
- Uses DDD Application Service for data access

### Sidebar Component (`app-side-bar`)

- Energy consumption display
- Device power monitoring
- Responsive layout adaptation
- Direct integration with mock repository

### Chart Component (`app-chart`)

- Chart.js integration
- Responsive canvas sizing
- Data visualization
- Uses DDD DTOs for data structure

## 🔧 Configuration Files

- **`.eslintrc.json`**: ESLint configuration with Prettier integration
- **`.prettierrc`**: Prettier v3 formatting rules
- **`.prettierignore`**: Files to exclude from formatting
- **`angular.json`**: Angular CLI configuration
- **`package.json`**: Dependencies and scripts with lint-staged configuration

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

#### ESLint/Prettier Conflicts

If you encounter formatting conflicts:

```bash
# Run auto-fix for both tools
npm run lint:fix
npm run format
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
- **DDD Benefits**: Efficient separation reduces bundle size impact

## 🔒 Security

- **Content Security Policy**: Configured for Angular applications
- **XSS Protection**: Angular's built-in sanitization
- **HTTPS Ready**: Configured for secure deployment
- **Domain Validation**: Business rules enforced at domain layer

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Build Output

- Location: `dist/angular-frontend-developer-joyofenergy/`
- Optimized for production
- Minified and bundled assets

## 🧪 Testing Strategy

The DDD architecture enables comprehensive testing:

- **Unit Tests**: Test domain entities, value objects, and services
- **Integration Tests**: Test use cases and application services
- **Component Tests**: Test presentation layer components
- **Repository Tests**: Test data access layer (mock implementations)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following DDD principles
4. Run quality checks: `npm run lint && npm run format:check`
5. Ensure all tests pass
6. Commit with descriptive messages
7. Push and create a pull request

### Development Guidelines

- **Follow DDD principles** when adding new features
- **Use appropriate layers** for different types of logic
- **Maintain clean boundaries** between layers
- **Write tests** for domain logic and use cases
- **Follow naming conventions** that reflect the domain language

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Chart.js for powerful data visualization
- BassCSS for utility-first CSS framework
- Eric Evans for Domain-Driven Design methodology
- The open-source community for quality tools and libraries

## 🔄 Migration Notes

This project was successfully migrated from a traditional Angular architecture to Domain-Driven Design:

- **Preserved functionality**: All original features maintained
- **Improved maintainability**: Clear separation of concerns
- **Enhanced testability**: Each layer can be tested independently
- **Better scalability**: Easy to add new features and replace implementations
- **Quality tools**: Upgraded to Prettier v3 with perfect ESLint integration
