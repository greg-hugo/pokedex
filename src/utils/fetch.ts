import { type SimplePokemon, PokemonDetail, EvolutionChain } from "./types"

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

export const fetchPokemonDetail = async(id: number): Promise<PokemonDetail> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: 'force-cache'});
    const pokemon: PokemonDetail = await response.json();

    if (pokemon.species.evolution_chain){
        const evolutionResponse = await fetch(pokemon.species.evolution_chain.url, { cache: 'force-cache' });
        const evolutionChain: EvolutionChain = await evolutionResponse.json();

        return { ...pokemon, evolution_chain: evolutionChain };
    }

    return pokemon;
}