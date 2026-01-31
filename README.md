# kelvinward-libs

A lightweight React UI component library built with TypeScript and bundled by **tsup**.

- React components written in TypeScript
- Ships ESM + CJS builds
- Includes `.d.ts` type definitions
- Includes CSS file for styling
- Easy install via npm

---

## Installation

Using **npm**:

```bash
npm i kelvinward-libs
```

Using **yarn**:

```bash
yarn add kelvinward-libs
```

Using **pnpm**:

```bash
pnpm add kelvinward-libs
```

### Use components

```tsx
import { Button } from 'kelvinward-libs';
import 'kelvinward-libs/style.css';

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <Button onClick={() => alert('Hello!')}>Click me</Button>
    </div>
  );
}
```

## Supported Environments\*\*

### This package works with:

- React 18 / 19
- Vite + React
- Next.js
- CRA
