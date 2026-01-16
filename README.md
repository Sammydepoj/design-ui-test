# Design UI - React Design System

A comprehensive, production-ready React design system built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✨ **Component Library** - Pre-built, customizable React components
- 🎨 **Design Tokens** - Centralized design system values (colors, typography, spacing)
- 📚 **Storybook Documentation** - Interactive component documentation
- 🧪 **Full Test Coverage** - Unit tests with Vitest and React Testing Library
- 🏗️ **TypeScript** - Full type safety and IDE support
- 🎯 **Tailwind CSS** - Utility-first styling with custom tokens
- 📦 **Tree-shakeable** - Optimized bundle size with ESM support
- 🚀 **CI/CD Ready** - GitHub Actions for testing and publishing

## Installation

```bash
npm install @yourusername/design-ui
# or
yarn add @yourusername/design-ui
```

## Quick Start

### Using Components

```tsx
import { Button } from '@yourusername/design-ui';

function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

### Using Design Tokens

```tsx
import { tokens } from '@yourusername/design-ui';

const primaryColor = tokens.colors.primary[500];
const spacing = tokens.spacing.lg;
```

## Development

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Setup

```bash
npm install --legacy-peer-deps
```

### Available Scripts

```bash
# Development
npm run dev                # Start Storybook dev server
npm run build             # Build library for production
npm run build:storybook   # Build static Storybook site

# Testing
npm run test              # Run tests
npm run test:ui           # Run tests with UI
npm run test:coverage     # Generate coverage report

# Code Quality
npm run lint              # Run ESLint
npm run lint:fix          # Fix linting issues
npm run format            # Format code with Prettier
npm run type-check        # Check TypeScript types
```

## Project Structure

```
design-ui/
├── src/
│   ├── components/        # React components
│   │   ├── Button/
│   │   └── ...
│   ├── tokens/            # Design tokens (colors, typography, etc.)
│   ├── lib/               # Utility functions
│   ├── styles/            # Global styles
│   └── index.ts           # Main entry point
├── stories/               # Storybook stories
├── tests/                 # Test files
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
└── tailwind.config.js     # Tailwind configuration
```

## Creating New Components

### 1. Create component file

```tsx
// src/components/Card/Card.tsx
import React from 'react';
import { cn } from '@/lib';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-lg bg-white p-6', elevated && 'shadow-lg', className)}
      {...props}
    />
  ),
);

Card.displayName = 'Card';
```

### 2. Create test file

```tsx
// tests/Card.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from '../src/components';

describe('Card', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Card>Content</Card>);
    expect(getByText('Content')).toBeInTheDocument();
  });
});
```

### 3. Create story file

```tsx
// stories/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Card content',
  },
};
```

### 4. Export from index files

```tsx
// src/components/index.ts
export { Card } from './Card/Card';
```

## Design Tokens

Access design tokens for consistent styling:

```tsx
import { tokens } from '@yourusername/design-ui';

// Colors
tokens.colors.primary[500]; // #5c6fff
tokens.colors.secondary[600]; // #7c3aed

// Typography
tokens.typography.fontSize.base; // { size: '16px', lineHeight: '24px' }

// Spacing
tokens.spacing.lg; // 16px

// Shadows
tokens.shadows.lg; // 0 10px 15px -3px rgb(0 0 0 / 0.1)
```

## Publishing to npm

### Prerequisites

1. Create an npm account at https://www.npmjs.com
2. Update package name in `package.json` to your scope
3. Generate npm token and add to GitHub Secrets as `NPM_TOKEN`

### Manual Publishing

```bash
npm run build
npm publish --access public
```

### Automatic Publishing

The CI/CD pipeline automatically publishes when a commit message starts with `chore(release):`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
