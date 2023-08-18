import { test, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('<App />', () => {
  it('should render the App', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /Vite + React/i,
        level: 1,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});
