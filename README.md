# JOI Energy – Angular Frontend

[![CI/CD Pipeline](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/actions)
[![Deploy to Production](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/Deploy%20to%20Production/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/actions)
[![CodeQL](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/workflows/CodeQL/badge.svg)](https://github.com/Alejandrehl/frontend-joyofenergy-Angular/security/code-scanning)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue?style=flat&logo=github)](https://alejandrehl.github.io/frontend-joyofenergy-Angular)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚩 Project Overview

**JOI Energy** is a modern, production-grade Angular 14 application for real-time energy consumption monitoring. It is designed as a technical showcase for:

- **Domain-Driven Design (DDD)** and SOLID principles
- Clean, scalable, and testable architecture
- Professional CI/CD, code quality, and deployment workflows
- Responsive, accessible, and maintainable UI

**Live Demo:** [https://alejandrehl.github.io/frontend-joyofenergy-Angular/#/](https://alejandrehl.github.io/frontend-joyofenergy-Angular/#/)

---

## ✨ Key Features

- **Real-time Dashboard:** Visualize energy usage, solar production, and grid feed
- **Device Management:** Track and analyze individual device consumption
- **Responsive UI:** Mobile-first, tablet, and desktop layouts
- **Interactive Charts:** Chart.js integration for dynamic data
- **SPA Routing:** HashLocationStrategy for robust static hosting
- **Mock Data System:** Simulated API and repository layer
- **Comprehensive Testing:** 90%+ code coverage, 82+ unit tests
- **Code Quality:** ESLint, Prettier, Husky, lint-staged
- **CI/CD:** Automated validation, build, and deployment via GitHub Actions
- **Security:** CodeQL scanning, dependency management

---

## 🏗️ Architecture & Best Practices

- **Domain-Driven Design (DDD):**
  - Clear separation: Domain, Application, Infrastructure, Presentation
  - Entities, Value Objects, Domain Services, Repositories, Use Cases
- **SOLID Principles:**
  - Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion
- **Angular Best Practices:**
  - Strict typing, no `any`, no unused variables
  - Feature modules, smart/dumb components, service injection
  - Reactive programming with RxJS
- **Clean Code:**
  - Readable, maintainable, and well-documented
  - Minimal comments (code is self-explanatory)

### 📂 Folder Structure

```text
src/app/
├── domain/           # Business logic (entities, value objects, services, repos)
├── application/      # Use cases and application services
├── infrastructure/   # Data access (mock repositories)
├── presentation/     # UI components (chart, main, sidebar)
├── shared/           # Shared models, services, utils
```

---

## 🚀 Quick Start

### 1. **Clone the repository**

```bash
git clone https://github.com/Alejandrehl/frontend-joyofenergy-Angular.git
cd frontend-joyofenergy-Angular
```

### 2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

### 3. **Run the app locally**

```bash
npm start
# or
ng serve
```

Visit: [http://localhost:4200/](http://localhost:4200/)

### 4. **Run tests**

```bash
npm test
# or with coverage
npm test -- --watch=false --code-coverage
```

### 5. **Lint and format**

```bash
npm run lint         # Lint code
npm run lint:fix     # Auto-fix lint issues
npm run format       # Format code
npm run format:check # Check formatting
```

### 6. **Build for production**

```bash
npm run build
```

Output: `dist/angular-frontend-developer-joyofenergy/`

---

## 🌐 Deployment & CI/CD

- **GitHub Actions** automates:
  - Lint, format, test, coverage (>=90%)
  - Build and deploy to GitHub Pages (`gh-pages` branch)
  - Security scanning with CodeQL
- **SPA Routing:** Uses `HashLocationStrategy` (`/#/`) for static hosting compatibility
- **404.html** and `.nojekyll` ensure correct routing and asset serving
- **Base Href:** Set to `/frontend-joyofenergy-Angular/` for correct asset loading

**Live Demo:** [https://alejandrehl.github.io/frontend-joyofenergy-Angular/#/](https://alejandrehl.github.io/frontend-joyofenergy-Angular/#/)

---

## 🧪 Testing & Code Quality

- **Coverage:** 90.06% statements, 90.41% lines, 88.15% functions
- **Tools:** Jasmine, Karma, ESLint, Prettier, Husky, lint-staged
- **Pre-commit hooks:** Enforce linting and formatting
- **No `any` types, no unused variables** (strict ESLint rules)
- **Test structure:**
  - Domain, value objects, services, use cases, components, utilities

---

## 🧠 Explaining the Project (Interview Tips)

### **How to explain the architecture:**

- "This project is structured using DDD, separating business logic (domain), application logic (use cases), infrastructure (data), and presentation (UI). This makes the codebase scalable, testable, and easy to maintain."
- "SOLID principles are applied throughout, ensuring each class/service has a single responsibility and is easy to extend or replace."
- "Angular best practices are enforced: strict typing, modularization, and reactive programming with RxJS."

### **How to explain SPA routing and the # (hash):**

- "GitHub Pages is a static host and cannot handle client-side routes. Using Angular's HashLocationStrategy (`/#/`) ensures all routes are handled by the app, preventing 404 errors on refresh or direct navigation."
- "A custom 404.html and .nojekyll file are included to support SPA routing and asset loading."

### **How to answer common Angular interview challenges:**

- **Add a new feature:**
  - "I would create a new use case in the application layer, a new service or entity in the domain layer if needed, and connect it to the UI via a new component."
- **Improve performance:**
  - "I would use OnPush change detection, lazy loading, and memoization where appropriate."
- **Testing strategy:**
  - "I use Jasmine and Karma for unit testing, aiming for >90% coverage, and enforce TDD for all new features."
- **Code quality:**
  - "Pre-commit hooks, ESLint, and Prettier ensure code quality and consistency."
- **Deployment:**
  - "CI/CD is automated with GitHub Actions, deploying to GitHub Pages with correct routing for SPAs."
- **Migration to Firebase or Vercel:**
  - "I would update the build output and routing strategy, and configure rewrites for clean URLs."

---

## 🛠️ Extending or Migrating

- **To add features:**
  - Follow DDD: add to domain, application, then presentation
- **To migrate to Firebase Hosting:**
  - Update `angular.json` baseHref to `/`
  - Add `firebase.json` with rewrite rules:

    ```json
    {
      "hosting": {
        "public": "dist/angular-frontend-developer-joyofenergy",
        "rewrites": [ { "source": "**", "destination": "/index.html" } ]
      }
    }
    ```

  - Deploy with `firebase deploy`

---

## ❓ FAQ / Troubleshooting

- **Why does the URL have a # (hash)?**
  - For SPA routing compatibility on static hosts like GitHub Pages.
- **Why do I get a 404 on refresh?**
  - You must use hash routing or configure server rewrites (not possible on GitHub Pages).
- **How do I run tests with coverage?**
  - `npm test -- --watch=false --code-coverage`
- **How do I check code quality?**
  - `npm run lint` and `npm run format:check`
- **How do I deploy?**
  - Push to `main` branch; GitHub Actions handles the rest.

---

## 📚 Resources

- [Angular DDD Example](https://github.com/Alejandrehl/frontend-joyofenergy-Angular)
- [Angular Docs](https://angular.io/)
- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [GitHub Pages SPA](https://angular.io/guide/deployment#deploy-to-github-pages)

---

## 🏆 About

This project was designed as a technical showcase for a Senior Angular Engineer role at Thoughtworks. It demonstrates:

- Advanced Angular architecture
- DDD and SOLID in practice
- Professional CI/CD and code quality
- High test coverage and maintainability

**Author:** [Alejandro Exequiel Hernández Lara](https://github.com/Alejandrehl)

---
