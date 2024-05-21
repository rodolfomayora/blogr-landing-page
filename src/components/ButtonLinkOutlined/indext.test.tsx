import { render, screen } from '@testing-library/react';
import { ButtonLinkOutlined } from '.';

describe('Component: ButtonLinkOutlined', () => {
  test('Should renders an internal navigation link', () => {
    render(<ButtonLinkOutlined href='/internal'>Test</ButtonLinkOutlined>);
    const link = screen.getByRole('link', { name: /^test$/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link).not.toHaveAttribute('target'); // Not an external link
    expect(link).not.toHaveAttribute('rel');    // Not an external link
  });
});