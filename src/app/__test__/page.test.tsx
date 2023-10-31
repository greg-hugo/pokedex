import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Home from '../page';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { fetchPokemons } from '@/utils/fetch';

jest.mock('@/utils/fetch.ts', () => ({
  fetchPokemons: jest.fn()
}));

afterEach(cleanup);

describe("Testing Home Page", () => {
    it('renders the heading "Pokédex"', async() => {
        (fetchPokemons as jest.Mock).mockResolvedValueOnce([
          { id: 1, name: 'bulbasaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' } },
          { id: 2, name: 'ivysaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' } }
        ]);

        render(<Home />);
        mockAllIsIntersecting(true);
        const heading = screen.getByText('Pokédex');
        expect(heading).toBeInTheDocument();
    });

    it('renders the PokemonGrid component', async() => {
        (fetchPokemons as jest.Mock).mockResolvedValueOnce([
          { id: 1, name: 'bulbasaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' } },
          { id: 2, name: 'ivysaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' } }
        ]);
        
        render(<Home />);
        mockAllIsIntersecting(true);
        const pokemonGrid = screen.getByTestId('pokemon-grid');
        expect(pokemonGrid).toBeInTheDocument();
    });
});