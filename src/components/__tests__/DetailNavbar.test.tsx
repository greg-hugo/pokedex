import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailNavbar from '../DetailNavbar';

afterEach(cleanup);

describe('Testin DetailNavbar', () => {
    const mockSetSelectedItem = jest.fn();
    const mockMenuItems = ['Item 1', 'Item 2', 'Item 3'];

    it('renders correctly', () => {
        const { getByText } = render(<DetailNavbar menuItems={mockMenuItems} selectedItem="Item 1" setSelectedItem={mockSetSelectedItem} />);
        mockMenuItems.forEach(item => {
          expect(getByText(item)).toBeInTheDocument();
        });
    });

    it('calls setSelectedItem when a button is clicked', () => {
        const { getByText } = render(<DetailNavbar menuItems={mockMenuItems} selectedItem="Item 1" setSelectedItem={mockSetSelectedItem} />);
        fireEvent.click(getByText('Item 2'));
        expect(mockSetSelectedItem).toHaveBeenCalledWith('Item 2');
    });

    it('renders the correct number of buttons', () => {
        const { getAllByText } = render(<DetailNavbar menuItems={mockMenuItems} selectedItem="Item 1" setSelectedItem={mockSetSelectedItem} />);
        const buttons = getAllByText(/Item/i);
        expect(buttons).toHaveLength(mockMenuItems.length);
    });
});