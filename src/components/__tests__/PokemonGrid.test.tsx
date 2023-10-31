import React from 'react';
import { render, waitFor, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonGrid from '../PokemonGrid';
import { fetchPokemons } from '@/utils/fetch';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

jest.mock('@/utils/fetch.ts', () => ({
  fetchPokemons: jest.fn()
}));

afterEach(cleanup);

describe('Testing PokemonGrid', () => {
    it('renders correctly', () => {
        render(<PokemonGrid />);
        expect(screen.getByTestId("pokemon-grid")).toBeInTheDocument();
    });

    it('fetches correctly', async () => {
        (fetchPokemons as jest.Mock).mockResolvedValueOnce([
          { id: 1, name: 'bulbasaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' } },
          { id: 2, name: 'ivysaur', types: [{ type: { name: 'grass' } }], sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' } }
        ]);
      
        render(<PokemonGrid />);
      
        mockAllIsIntersecting(true);
        await waitFor(() => expect(fetchPokemons).toHaveBeenCalledTimes(1));
      
        expect(screen.getByText('bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });
});