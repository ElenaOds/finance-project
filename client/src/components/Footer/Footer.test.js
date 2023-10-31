import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer component testing', () => {
    const date = new Date().getFullYear();
    render(<Footer />)
    const textElement = screen.queryByText(`All rights are reserved © ${date}`)
    expect(textElement).toBeInTheDocument()
})