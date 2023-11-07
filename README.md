# React Vite TypeScript Boilerplate

> This is a boilerplate made with React, TypeScript, Vite, Vitest, Testing Library, Tailwind, ESLint, Prettier, Nx, Pnpm, Docker and NGINX.

## What's inside?

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwind](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Nx](https://nx.dev/)
- [Pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [NGINX](https://nginx.org/en/)

## Local Development Quick Start

Download and install `nvm` (Node Version Manager)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/vx.x.x/install.sh | bash
```

Download and Install `pnpm`

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

or via `npm`

```bash
npm install -g pnpm
```

<br>

Copy and paste the following into Terminal:

```sh
npx degit DomenicoColandrea86/react-vite-typescript-boilerplate app
cd app
nvm use
pnpm install
pnpm dev
```

Served with hot reload at [http://localhost:5173](http://localhost:5173)

## Scripts

### Format

```bash
pnpm prettier
```

### Lint

```bash
pnpm lint
```

### Build

```bash
pnpm build
```

### Start

```bash
pnpm start
```

### Test

```bash
pnpm test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

### Clean

```bash
pnpm clean
```

### Docker Build

```bash
pnpm docker:build
```

### Docker Run

Served via NGINX at [http://localhost](http://localhost)

```bash
pnpm docker:run
```

## License

This project is licensed under the MIT License. Happy Coding!
