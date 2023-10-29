import { type SimplePokemon } from "./types"
import { getTypeColor } from "./typecolor";
import { types } from "util";

export const fetchPokemon = async (id: number): Promise<SimplePokemon> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: 'force-cache'});
    return res.json(); 
};

export const fetchPokemons = async (start: number, end: number): Promise<SimplePokemon[]> => {
    const pokemonIds = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    const pokemons = await Promise.all(
        pokemonIds.map(id => 
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: 'force-cache'})
            .then(response => response.json())
        )
    );
    return pokemons; 
};