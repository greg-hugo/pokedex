import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import StatsMeter from '../StatsMeter'

afterEach(cleanup);

describe('Testing StatsMeter', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<StatsMeter stat={50} />);
        expect(getByTestId('stats-meter')).toHaveStyle('width: 20%'); 
    });

    it('changes width based on stat prop', () => {
        const { getByTestId, rerender } = render(<StatsMeter stat={100} />);
        expect(getByTestId('stats-meter')).toHaveStyle(`width: 40%`);

        rerender(<StatsMeter stat={75} />);
        expect(getByTestId('stats-meter')).toHaveStyle(`width: 30%`);
    });

    it('changes color based on stat prop', () => {
        const { getByTestId, rerender } = render(<StatsMeter stat={50} />);
        expect(getByTestId('stats-meter')).toHaveStyle(`backgroundColor: #FF5252`); //red

        rerender(<StatsMeter stat={80} />);
        expect(getByTestId('stats-meter')).toHaveStyle(`backgroundColor: #FFD600`); //yellow

        rerender(<StatsMeter stat={150} />);
        expect(getByTestId('stats-meter')).toHaveStyle(`backgroundColor: #00BFA5`); //green
  });
}); 