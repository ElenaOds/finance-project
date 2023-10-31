import { render, screen } from '@testing-library/react';
import { AppBar } from './AppBar';

test('AppBar component testing', () => {
    render(<AppBar />)
    const textElement = screen.queryByText('Finance stock')
    expect(textElement).toBeInTheDocument()
})