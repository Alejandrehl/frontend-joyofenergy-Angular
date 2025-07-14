# JOI Energy - Angular Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code quality tools

This project uses several tools to ensure code quality and consistency:

### ESLint
- **Purpose**: Static code analysis and linting
- **Configuration**: `.eslintrc.json`
- **Commands**:
  - `npm run lint` - Check for linting issues
  - `npm run lint:fix` - Fix auto-fixable issues

### Prettier
- **Purpose**: Code formatting
- **Configuration**: `.prettierrc`
- **Commands**:
  - `npm run format` - Format all files
  - `npm run format:check` - Check if files are formatted

### Husky + lint-staged
- **Purpose**: Git hooks to run quality checks before commits
- **Configuration**: `.husky/pre-commit` and `package.json` lint-staged section
- **Behavior**: Automatically runs ESLint and Prettier on staged files before each commit

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code quality workflow

1. **Before committing**: Quality checks run automatically via Husky
2. **Manual checks**:
   - `npm run lint` - Check for linting issues
   - `npm run format:check` - Check formatting
3. **Auto-fix**:
   - `npm run lint:fix` - Fix linting issues
   - `npm run format` - Format code

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── chart/
│   │   ├── main/
│   │   └── side-bar/
│   ├── shared/
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   └── ...
├── assets/
└── ...
```

## Responsive Design

The application is fully responsive with:
- **Desktop**: Sidebar always visible
- **Mobile**: Hamburger menu with slide-out sidebar
- **Breakpoints**: 767px and 480px

## Technologies

- Angular 14
- TypeScript
- SCSS
- Chart.js
- BassCSS (utility-first CSS framework)
- ESLint + Prettier
- Husky + lint-staged
