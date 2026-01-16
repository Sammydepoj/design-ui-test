# Contributing to Design UI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Design UI project.

## Code of Conduct

Please be respectful and constructive in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/design-ui.git`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Install dependencies: `npm install --legacy-peer-deps`

## Development Workflow

### Before Starting

- Check existing issues and pull requests
- Create an issue describing your proposed changes
- Wait for feedback before starting major work

### Making Changes

1. Create a new branch from `develop`
2. Make your changes following the code style
3. Write tests for new features
4. Update documentation and Storybook stories
5. Ensure all tests pass: `npm test`
6. Ensure code is formatted: `npm run format`
7. Check types: `npm run type-check`

### Commit Messages

Follow conventional commits format:

```
type(scope): description

body (optional)

footer (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:

```
feat(button): add loading state
fix(card): adjust padding on mobile
docs: update component API
```

## Pull Request Process

1. Create a descriptive PR title
2. Link related issues
3. Provide a clear description of changes
4. Ensure CI/CD pipeline passes
5. Request review from maintainers
6. Address feedback and update PR

## Adding a New Component

1. Create component directory in `src/components/`
2. Write component file with TypeScript and JSDoc comments
3. Add unit tests
4. Create Storybook stories with multiple variants
5. Update `src/components/index.ts`
6. Update README with usage example

## Testing

- Write tests for all new features
- Maintain minimum 80% code coverage
- Run `npm run test:coverage` to check coverage

## Reporting Issues

- Use clear, descriptive titles
- Describe the issue and expected behavior
- Provide minimal code example
- Include environment info (OS, Node version, etc.)

## Questions?

Feel free to open a discussion or issue for questions about contributing.
