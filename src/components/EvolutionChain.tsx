import PokemonCard from "./PokemonCard";
import type { SimplePokemon } from "@/utils/types";

interface EvolutionChainProps {
    pokemons: SimplePokemon[];
}

const EvolutionChain = ({ pokemons }: EvolutionChainProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-3">
            {
                pokemons?.map((pokemon: SimplePokemon, index: number) => {
                    return <PokemonCard pokemon={pokemon} key={index} />
                })
            }
        </div>
    )
};

export default EvolutionChain;