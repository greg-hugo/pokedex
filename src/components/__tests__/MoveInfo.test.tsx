import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoveInfo from '../MoveInfo';

afterEach(cleanup);

describe('Testing MoveInfo', () => {
    const moves = [
        { move: { name: 'move1' } },
        { move: { name: 'move2' } },
        { move: { name: 'move3' } },
    ];

    it('renders the correct number of move items', () => {
        render(<MoveInfo moves={moves} />);
        const moveItems = screen.getAllByTestId('move-item');
        expect(moveItems.length).toBe(moves.length);
    });

    it('displays the correct move names', () => {
        render(<MoveInfo moves={moves} />);
        const moveItems = screen.getAllByTestId('move-item');
        moveItems.forEach((moveItem, index) => {
            expect(moveItem).toHaveTextContent(moves[index].move.name);
        });
    });

    it('renders no move items when moves array is empty', () => {
        render(<MoveInfo moves={[]} />);
        const moveItems = screen.queryAllByTestId('move-item');
        expect(moveItems.length).toBe(0);
    });

});
