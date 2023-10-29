"use client"
import PokemonTypePill from "./PokemonTypePill";
import { type SimplePokemon, SimplePokemonType } from "@/utils/types";
import { getTypeColor } from "@/utils/typecolor";
import Link from "next/link";

interface PokemonCardProps {
    pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {


    return (
        <Link href={`/pokemon/${pokemon.id}`}>
            <div className="grid grid-cols-2 h-44 w-full rounded-xl border pl-4 pt-4 cursor-pointer hover:opacity-60" style={{ backgroundColor: `${getTypeColor(pokemon.types[0].type.name)}` }}>
                <div className="flex flex-col space-y-1">
                    <h3 className="mb-2 capitalize"> {pokemon?.name} </h3>
                    {
                        pokemon?.types.map((type: SimplePokemonType, index: number) => {
                            return <PokemonTypePill type={type.type.name} key={index}/>
                        })
                    }
                </div>
                <div className="relative overflow-hidden">
                    <div className='absolute top-0 right-4'>
                        <p className="text-2xl font-black opacity-30"> {`#${String(pokemon.id).padStart(3, '0')}`} </p>
                    </div>
                    <div className='absolute -bottom-16 -right-6'>
                        <img src='/images/pokeball.svg' className='h-52 w-52 opacity-5' alt='Pokeball'/>
                    </div>
                    <div className='w-full h-full flex justify-center items-end'>
                        <img src={pokemon?.sprites.front_default} className='h-[90%] w-[90%]' alt='Pokemon'/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;