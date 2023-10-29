"use client"
import { useState, useEffect, useCallback } from "react"
import type { PokemonDetail, EvolutionStage, SimplePokemonType } from "@/utils/types"
import { fetchPokemonDetail } from "@/utils/fetch";
import { getTypeColor } from "@/utils/typecolor";
import PokemonTypePill from "@/components/PokemonTypePill";
import DetailNavbar from "@/components/DetailNavbar";
import AboutInfo from "@/components/AboutInfo";

export default function Page({ params }: { params: { id: number } }) {
    const [pokemon, setPokemon] = useState<PokemonDetail>();

    useEffect(() => {
        const fetchData = async () => {
            const newPokemon= await fetchPokemonDetail(params.id);
            setPokemon(newPokemon);
        };

        void fetchData();
    }, [params.id]);

    const getBackground = useCallback(() => {
        if (pokemon) {
            return getTypeColor(pokemon.types[0].type.name);
        }
        return "#C0C0C0";
    }, [pokemon]);

    return (
        <div className="h-screen " style={{ backgroundColor: `${getBackground()}` }}>
            <div className="flex justify-between p-8">
                <div>
                    <h1 className="mb-2 capitalize"> {pokemon?.name} </h1>
                    <div className="flex space-x-2">
                        {
                            pokemon?.types.map((type: SimplePokemonType, index: number) => {
                                return <PokemonTypePill type={type.type.name} key={index}/>
                            })
                        }
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className="opacity-30"> {`#${String(pokemon?.id).padStart(3, '0')}`} </h1>
                </div>
            </div>
            <div className="relative">
                <div className="relative overflow-hidden h-36">
                    <div className='absolute -bottom-20 -right-10'>
                        <img src='/images/pokeball.svg' className='h-60 w-60 opacity-5' alt='Pokeball'/>
                    </div>
                </div>
                <div className="absolute -bottom-24 left-[38%] h-[50vh]">
                    <img src={pokemon?.sprites.front_default} className='h-full w-full' alt='Pokemon'/>
                </div>
            </div>
            <div className="h-96 bg-white rounded-tl-3xl rounded-tr-3xl pt-24 px-8">
                <DetailNavbar />
                <AboutInfo />
            </div>
        </div>
    )
};