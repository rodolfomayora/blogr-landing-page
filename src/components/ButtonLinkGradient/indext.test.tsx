import { render, screen } from '@testing-library/react';
import { ButtonLinkGradient } from '.';

describe('Component: ButtonLInkGradient', () => {
  test('Should renders an internal navigation link', () => {
    render(<ButtonLinkGradient href='/internal'>Test</ButtonLinkGradient>);
    const link = screen.getByRole('link', { name: /^test$/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target'); // Not an external link
    expect(link).not.toHaveAttribute('rel');    // Not an external link
  });
});