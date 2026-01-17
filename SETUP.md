# Quick Start Guide

## Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/design-ui.git
cd design-ui
npm install --legacy-peer-deps
```

### 2. Development Workflow

```bash
# Start Storybook (documentation UI)
npm run dev

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Check code coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

### 3. Building & Publishing

```bash
# Build library for distribution
npm run build

# Build Storybook static files
npm run build:storybook

# Publish to npm (manual, requires npm auth)
npm publish --access public
```

## GitHub Setup

### 1. Create Repository
```bash
git remote add origin https://github.com/yourusername/design-ui.git
git push -u origin main
```

### 2. Configure Secrets
Add these secrets to your GitHub repository settings:

- **NPM_TOKEN**: Your npm registry token
  - Get it from https://www.npmjs.com/settings/yourusername/tokens
  - Create: "Automation" token with Publish permission

- **GITHUB_TOKEN**: (auto-provided by GitHub Actions)

### 3. Branch Protection
1. Go to Repository Settings → Branches
2. Add rule for `main` branch:
   - Require status checks to pass before merging
   - Require code reviews

## Publishing to npm

### First Time Setup
```bash
# Log in to npm
npm login

# Update .npmrc with token
npm token create --read-only

# Copy token to .npmrc
# //registry.npmjs.org/:_authToken=<YOUR_TOKEN>
```

### Automatic Publishing (via semantic-release)
1. Create conventional commits (`feat:`, `fix:`, etc.)
2. Push to `main` branch
3. GitHub Actions will:
   - Run tests
   - Determine version bump (major, minor, patch)
   - Create GitHub release
   - Publish to npm
   - Generate changelog

### Manual Publishing
```bash
npm run build
npm publish --access public
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:
- Creating feature branches
- Writing tests
- Adding new components
- Commit message conventions

## Adding New Components

1. Create in `src/components/ComponentName/`
2. Write component with TypeScript
3. Add tests in `tests/ComponentName.test.tsx`
4. Create stories in `stories/ComponentName.stories.tsx`
5. Export from `src/components/index.ts`
6. Run `npm test` and `npm run lint`

## Troubleshooting

### Storybook won't start
- Clear cache: `rm -rf node_modules/.cache`
- Reinstall: `npm install --legacy-peer-deps`
- Try: `npx storybook@latest dev`

### Tests failing
- Clear cache: `npm test -- --clearCache`
- Check Node version: `node --version` (should be 18+)

### Build errors
- Check TypeScript: `npm run type-check`
- Lint: `npm run lint`
- Ensure all imports are correct

## Next Steps

1. Update `package.json` with your package name
2. Set up GitHub repository and configure secrets
3. Update README.md with your package details
4. Customize design tokens in `src/tokens/tokens.ts`
5. Build additional components
6. Publish to npm registry
