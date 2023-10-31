import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarButton from '../NavbarButton';

afterEach(cleanup);

describe('Testing NavbarButton', () => {
    const mockOnClick = jest.fn();

    it('renders correctly', () => {
        const { getByText } = render(<NavbarButton text="Test" onClick={mockOnClick} selected={false} />);
        expect(getByText('Test')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const { getByText } = render(<NavbarButton text="Test" onClick={mockOnClick} selected={false} />);
        fireEvent.click(getByText('Test'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('has correct style when selected', () => {
        const { getByText } = render(<NavbarButton text="Test" onClick={mockOnClick} selected={true} />);
        expect(getByText('Test')).toHaveClass('text-black underline');
    });

    it('has correct style when not selected', () => {
        const { getByText } = render(<NavbarButton text="Test" onClick={mockOnClick} selected={false} />);
        expect(getByText('Test')).toHaveClass('text-gray-400');
        expect(getByText('Test')).not.toHaveClass('underline');
    });

    it('changes style on hover', () => {
        const { getByText, rerender } = render(<NavbarButton text="Test" onClick={mockOnClick} selected={false} />);
        const button = getByText('Test');

        fireEvent.mouseEnter(button);
        expect(button).toHaveClass('hover:text-black hover:underline');

        fireEvent.mouseLeave(button);
        expect(button).toHaveClass('text-gray-400');
        expect(button).not.toHaveClass('underline');
    });
});