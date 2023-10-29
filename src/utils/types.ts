export type SimplePokemonType = {
    type: {
        name: string;
    };
}

export type SimplePokemon = {
    id: number;
    name: string;
    types: SimplePokemonType[];
    sprites: {
        front_default?: string;
    }
}

export type PokemonAbility = {
    ability: {
        name: string;
    };
}

export type PokemonStat = {
    base_stat: number;
    stat: {
        name: string;
    };
}

export type Move = {
    move: {
        name: string;
    };
}

export type PokemonSpecies = {
    name: string;
    evolution_chain?: {
        url: string;
    };
    url?: string;
}

export type EvolutionStage = {
    species: PokemonSpecies;
    evolves_to: EvolutionStage[];
}

export type EvolutionChain = {
    chain: EvolutionStage;
} 

export type PokemonDetail = SimplePokemon & {
    height: number;
    weight: number;
    species: PokemonSpecies;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    moves: Move[];
    evolution_chain?: SimplePokemon[];
}