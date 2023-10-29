import type { SimplePokemon, PokemonDetail, EvolutionChain, PokemonSpecies } from "./types"
import { traverseEvolutionChain } from "./evolution";

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

    if (pokemon.species.url){
        const speciesResponse = await fetch(pokemon.species.url, { cache: 'force-cache' });
        const species: PokemonSpecies = await speciesResponse.json();

        if (species.evolution_chain?.url){
            const evolutionResponse = await fetch(species.evolution_chain.url, { cache: 'force-cache' });
            const evolutionChain: EvolutionChain = await evolutionResponse.json();

            let speciesNames: string[] = [];
            speciesNames.push(evolutionChain.chain.species.name);
            await traverseEvolutionChain(evolutionChain.chain.evolves_to, speciesNames);
            const popIndex = speciesNames.indexOf(pokemon.name);
            if (popIndex != -1){
                speciesNames.splice(popIndex, 1);
            }

            const evolutions = await Promise.all(
                speciesNames.map(name => 
                    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {cache: 'force-cache'})
                    .then(response => response.json())
                )
            );

            return {...pokemon, evolution_chain: evolutions};
        }
    }

    return pokemon;
}