import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import EvolutionChain from '../EvolutionChain';

afterEach(cleanup);

describe("Testing EvolutionChain", () => {
    const mockPokemons = [
        {
            id: 1,
            name: 'bulbasaur',
            types: [
              { type: { name: 'grass' } },
              { type: { name: 'poison' } }
            ],
            sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }
        },
        {
            id: 2,
            name: 'ivysaur',
            types: [
              { type: { name: 'grass' } },
              { type: { name: 'dragon' } }
            ],
            sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }
        },
        {
            id: 3,
            name: 'venusaur',
            types: [
              { type: { name: 'dark' } },
              { type: { name: 'flying' } }
            ],
            sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' }
        }
    ];

    it('renders the correct number of PokemonCard components', () => {
        render(<EvolutionChain pokemons={mockPokemons} />);
        const pokemonCards = screen.getAllByTestId('pokemon-card');
        expect(pokemonCards.length).toBe(mockPokemons.length);
    });

    it('renders the PokemonCard components with the correct props', () => {
        render(<EvolutionChain pokemons={mockPokemons} />);
        const bulbasaurCard = screen.getByText('bulbasaur');
        expect(bulbasaurCard).toBeInTheDocument();

        const charizardCard = screen.getByText('ivysaur');
        expect(charizardCard).toBeInTheDocument();

        const pikachuCard = screen.getByText('venusaur');
        expect(pikachuCard).toBeInTheDocument();
    });
});