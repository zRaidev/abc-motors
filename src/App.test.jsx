import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import App from './App';

describe('App', () => {
  test('renders the Navbar component', () => {
    render(<App />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });
});
