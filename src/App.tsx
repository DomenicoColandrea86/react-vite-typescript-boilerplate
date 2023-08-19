import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo h-24 p-4 filter will-change-filter transition-filter-300ms hover:filter-drop-shadow-2xl hover:filter-[#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo h-24 p-4 filter will-change-filter transition-filter-300ms hover:filter-drop-shadow-2xl hover:filter-[#646cffaa] react:hover:filter-drop-shadow-2xl react:hover:filter-[#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <p className="text-gray-500 p-2 max-w-lg">This is a boilerplate made with React, TypeScript, Vite, Vitest, Testing Library, Tailwind, ESLint, Prettier, Nx, and pnpm.</p>
      <div className="p-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-4" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default App;
