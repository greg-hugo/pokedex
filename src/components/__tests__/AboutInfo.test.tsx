import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutInfo from '../AboutInfo';

describe("Testing AboutInfo", () => {
    it('displays the correct species', () => {
        const species = 'Pikachu';
        render(<AboutInfo species={species} />);
        expect(screen.getByText(species)).toBeInTheDocument();
    });

    it('displays the correct height', () => {
        const height = 50; 
        render(<AboutInfo height={height} />);
        expect(screen.getByText(`16'4.85" (500 cm)`)).toBeInTheDocument();
    });

    it('displays the correct weight', () => {
        const weight = 60;
        render(<AboutInfo weight={weight} />);
        expect(screen.getByText(`13.23 lbs (6 kg)`)).toBeInTheDocument();
    });

    it('displays the correct abilities', () => {
        const abilities = ['Ability 1', 'Ability 2', 'Ability 3'];
        render(<AboutInfo abilities={abilities} />);
        expect(screen.getByText(abilities.join(', '))).toBeInTheDocument();
    });

    it('displays all stats correctly', () => {
        const abilities = ['Ability 1', 'Ability 2', 'Ability 3'];
        render(<AboutInfo species={"Gyarados"} height={50} weight={60} abilities={abilities} />);
        expect(screen.getByText("Gyarados")).toBeInTheDocument();
        expect(screen.getByText(`16'4.85" (500 cm)`)).toBeInTheDocument();
        expect(screen.getByText(`13.23 lbs (6 kg)`)).toBeInTheDocument();
        expect(screen.getByText(abilities.join(', '))).toBeInTheDocument();
    });
}); 