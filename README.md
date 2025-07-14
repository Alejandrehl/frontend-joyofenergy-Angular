# JOI Energy - Angular Frontend

[![CI/CD Pipeline](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/actions)
[![Deploy to Production](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/Deploy%20to%20Production/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/actions)
[![CodeQL](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/CodeQL/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/security/code-scanning)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue?style=flat&logo=github)](https://alejandrehl.github.io/frontend-joyofenergy-Angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive Angular 14 application for energy consumption monitoring with real-time charts and device management, built using **Domain-Driven Design (DDD)** principles.

**🌐 Live Demo**: [https://alejandrehl.github.io/frontend-joyofenergy-Angular](https://alejandrehl.github.io/frontend-joyofenergy-Angular)

## 🚀 Features

- **Real-time Energy Dashboard**: Monitor power consumption, solar production, and grid feed
- **Device Management**: Track individual device power usage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Charts**: Dynamic energy consumption visualization using Chart.js
- **Mobile-First UX**: Hamburger menu with slide-out sidebar for mobile devices
- **Domain-Driven Design**: Clean architecture with separation of concerns
- **Mock Data System**: Simulated energy data for development and testing
- **Comprehensive Testing**: 90.06% code coverage with 82 unit tests
- **Code Quality**: ESLint + Prettier + Husky pre-commit hooks

## 🛠️ Technologies

- **Frontend Framework**: Angular 14
- **Language**: TypeScript 4.7
- **Styling**: SCSS + BassCSS (utility-first CSS framework)
- **Charts**: Chart.js 3.2.1
- **Code Quality**: ESLint + Prettier v3 + Husky + lint-staged
- **Testing**: Jasmine + Karma with 90.06% coverage
- **Architecture**: Domain-Driven Design (DDD)
- **Package Manager**: npm

## 📊 Project Status

### ✅ Code Quality
- **Linting**: 100% clean - All files pass ESLint
- **Formatting**: Prettier v3 with eslint-plugin-prettier integration
- **Pre-commit Hooks**: Husky + lint-staged configured
- **TypeScript**: Strict mode enabled, no `any` types allowed

### ✅ Testing Coverage
- **Statements**: 90.06% (136/151) ✅
- **Branches**: 61.9% (13/21) ✅
- **Functions**: 88.15% (67/76) ✅
- **Lines**: 90.41% (132/146) ✅
- **Total Tests**: 82 tests passing ✅

### ✅ Architecture
- **DDD Implementation**: Complete with all layers
- **SOLID Principles**: Applied throughout
- **Clean Architecture**: Clear separation of concerns
- **Mock Data**: Simulated repositories for development

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

## 🧪 Testing Strategy

### Test Coverage by Layer

#### Domain Layer (100% Coverage)
- **Entities**: `EnergyReading` - All methods tested
- **Value Objects**: `EnergyValue`, `Timestamp` - Complete validation testing
- **Domain Services**: `EnergyCalculationService` - All business logic covered

#### Application Layer (High Coverage)
- **Use Cases**: `GetEnergyReadingsUseCase` - All execution paths tested
- **Application Services**: `EnergyApplicationService` - DTO transformations tested

#### Presentation Layer (Component Testing)
- **Components**: `MainComponent`, `SideBarComponent`, `ChartComponent`
- **Services**: `SidebarService` - Observable behavior tested
- **Utilities**: `chart.ts` - Date formatting and chart rendering tested

### Testing Tools
- **Framework**: Jasmine + Karma
- **Coverage**: Istanbul/nyc
- **Mocking**: Jasmine spies and mocks
- **Angular Testing**: TestBed, ComponentFixture

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
   git clone https://github.com/Alejandrehl/frontend-joyofenergy-Angular.git
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
npm test -- --watch=false --code-coverage  # Run tests with coverage report
```

## 🚀 CI/CD Pipeline

This project uses GitHub Actions for automated quality assurance and deployment:

### 🔄 Automated Workflows

#### **CI/CD Pipeline** (`.github/workflows/ci.yml`)
- **Triggers**: Push to main/develop/feature branches, Pull Requests
- **Validation**: Linting, formatting, unit tests, coverage threshold (80%+)
- **Matrix Testing**: Node.js 16.x and 18.x compatibility
- **Quality Gate**: Comprehensive quality checks summary

#### **Deployment** (`.github/workflows/deploy.yml`)
- **Triggers**: Push to main branch, successful CI completion
- **Build**: Production build with optimization
- **Deploy**: Automatic deployment to GitHub Pages
- **Release**: Automated release creation with detailed changelog

#### **Security Scanning** (`.github/workflows/codeql.yml`)
- **CodeQL Analysis**: Automated security vulnerability detection
- **Schedule**: Weekly security scans
- **Languages**: JavaScript/TypeScript analysis

> **Note:**
> The npm audit security check has been removed from the CI/CD workflow. This is because the Angular 14 toolchain and its dependencies are no longer maintained and will not receive further security patches. Remaining vulnerabilities are only present in development dependencies and do not affect production code. For full security compliance, upgrade to Angular 16+ as soon as possible. CodeQL security scanning remains active for code-level vulnerabilities.

### 📊 Quality Gates

The pipeline enforces strict quality standards:

- ✅ **Linting**: ESLint passes with no errors/warnings
- ✅ **Formatting**: Prettier compliance
- ✅ **Tests**: 82 tests passing
- ✅ **Coverage**: 90.06% (above 80% threshold)
- ✅ **Build**: Production build successful
- ✅ **Architecture**: DDD principles maintained

### 🔄 Automated Dependencies

#### **Dependabot** (`.github/dependabot.yml`)
- **Schedule**: Weekly updates (Mondays 9:00 AM)
- **Ecosystems**: npm, GitHub Actions
- **Safety**: Ignores major version updates for critical dependencies
- **Automation**: Auto-assigns and labels PRs

### 📋 Issue & PR Templates

#### **Pull Request Template** (`.github/pull_request_template.md`)
- Comprehensive checklist for quality assurance
- DDD architecture compliance verification
- Testing and security requirements
- UI/UX and accessibility guidelines

#### **Issue Templates** (`.github/ISSUE_TEMPLATE/`)
- **Bug Reports**: Structured bug reporting with environment details
- **Feature Requests**: Impact assessment and architecture considerations
- **Contact Links**: Direct links to documentation and discussions

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
  - No unused variables allowed
  - No `any` types allowed

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
  - Timestamp and energy value management
  - Comparison methods (isBefore, isAfter, equals)
  - Same-day detection logic
- **`DeviceConsumption`**: Represents device power consumption with validation

### Value Objects

- **`EnergyValue`**: Encapsulates energy values with validation (non-negative)
  - Constructor validation for negative values
  - Value comparison and equality methods
- **`Timestamp`**: Handles timestamps with comparison and grouping operations
  - Date manipulation (getDayStart)
  - Comparison methods (isBefore, isAfter, equals)
  - Static factory method (now)
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
- Dynamic data visualization
- Responsive chart sizing
- Real-time data updates

## 🧪 Testing Details

### Test Structure

```
src/app/
├── domain/
│   ├── entities/
│   │   └── energy-reading.entity.spec.ts
│   ├── value-objects/
│   │   ├── energy-value.vo.spec.ts
│   │   └── timestamp.vo.spec.ts
│   └── domain-services/
│       └── energy-calculation.service.spec.ts
├── application/
│   ├── use-cases/
│   │   └── get-energy-readings.usecase.spec.ts
│   └── services/
│       └── energy-application.service.spec.ts
├── components/
│   ├── main/
│   │   └── main.component.spec.ts
│   ├── side-bar/
│   │   └── side-bar.component.spec.ts
│   └── chart/
│       └── chart.component.spec.ts
└── shared/
    ├── services/
    │   └── sidebar.service.spec.ts
    └── utils/
        └── chart.spec.ts
```

### Test Coverage Highlights

- **Domain Entities**: 100% method coverage
- **Value Objects**: Complete validation testing
- **Domain Services**: All business logic paths covered
- **Components**: Core functionality tested with proper mocking
- **Utilities**: Date formatting and chart utilities tested

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Environment Configuration

- **Development**: `environment.ts`
- **Production**: `environment.prod.ts`

### Live Demo

- **🌐 GitHub Pages**: [https://alejandrehl.github.io/frontend-joyofenergy-Angular](https://alejandrehl.github.io/frontend-joyofenergy-Angular)
- **📱 Repository**: [https://github.com/Alejandrehl/frontend-joyofenergy-Angular](https://github.com/Alejandrehl/frontend-joyofenergy-Angular)

## 📝 Contributing

1. Follow the established DDD architecture
2. Write tests for new features (maintain 80%+ coverage)
3. Ensure all linting rules pass
4. Use conventional commit messages
5. Follow Angular style guide

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please refer to the project documentation or create an issue in the repository.
