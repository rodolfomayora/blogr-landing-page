import { render, screen } from '@testing-library/react';
import { ButtonLink } from '.';

describe('Component: ButtonLInk', () => {
  test('Should renders an internal navigation link', () => {
    render(<ButtonLink href='/internal'>Test</ButtonLink>);
    const link = screen.getByRole('link', { name: /^test$/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target'); // Not an external link
    expect(link).not.toHaveAttribute('rel');    // Not an external link
  });
});