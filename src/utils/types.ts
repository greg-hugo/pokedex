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
        front_default: string;
    }
}