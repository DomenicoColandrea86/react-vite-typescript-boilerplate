import { useState } from 'react';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="logo h-24 p-4 transition duration-300"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo h-24 p-4 transition duration-300"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <p className="max-w-lg p-2 text-gray-500">
        This is a boilerplate made with React, Vite, TypeScript, Vitest, Testing
        Library, Tailwind, ESLint, Prettier, Nx, Pnpm, Docker and NGINX.
      </p>
      <div className="p-4">
        <button
          className="m-4 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/main.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default App;
