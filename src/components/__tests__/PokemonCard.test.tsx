import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard from '../PokemonCard';

afterEach(cleanup);

describe('Testing PokemonCard', () => {
    const mockPokemon = {
        id: 1,
        name: 'bulbasaur',
        types: [
          { type: { name: 'grass' } },
          { type: { name: 'poison' } }
        ],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }
    };

    it('renders correctly', () => {
        render(<PokemonCard pokemon={mockPokemon} />);
        expect(screen.getByTestId("pokemon-card")).toBeInTheDocument();
        expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('#001')).toBeInTheDocument();
        expect(screen.getByAltText('Pokemon')).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    });

    it('renders the correct number of type pills', () => {
        render(<PokemonCard pokemon={mockPokemon} />);
        const typePills = screen.getAllByRole('heading', {
            level: 5
        })
        expect(typePills).toHaveLength(mockPokemon.types.length);
    });
});