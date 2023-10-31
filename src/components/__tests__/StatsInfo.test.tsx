import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import StatsInfo from '../StatsInfo';

afterEach(cleanup);

describe('Testing StatsInfo', () => {
    const mockStats = [
        { stat: { name: 'hp' }, base_stat: 80 },
        { stat: { name: 'attack' }, base_stat: 100 },
        { stat: { name: 'defense' }, base_stat: 120 },
        { stat: { name: 'special-attack' }, base_stat: 90 },
        { stat: { name: 'special-defense' }, base_stat: 110 },
        { stat: { name: 'speed' }, base_stat: 70 },
    ];

    it('renders the correct base stat values', () => {
        render(<StatsInfo stats={mockStats} />);
        mockStats.map((stat) => {
            const baseStatValue = screen.getByText(stat.base_stat)
            expect(baseStatValue).toBeInTheDocument();
        })
    });

    it('renders the correct number of stats meter', () => {
        render(<StatsInfo stats={mockStats} />);
        const meterNumber = screen.getAllByTestId("stats-meter");
        expect(meterNumber.length).toBe(mockStats.length);
    })
});