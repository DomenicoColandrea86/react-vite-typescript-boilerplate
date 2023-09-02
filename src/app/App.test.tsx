import React from 'react';
import { test, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('<App />', () => {
  it('should render the App', () => {
    render(<App />);
    expect(screen.getByText(/Vite + React/i)).toBeInTheDocument();
  });
});
