"use client"
import { useState, useEffect, useCallback } from "react"
import type { PokemonDetail, EvolutionStage, SimplePokemonType } from "@/utils/types"
import { fetchPokemonDetail } from "@/utils/fetch";
import { getTypeColor } from "@/utils/typecolor";
import PokemonTypePill from "@/components/PokemonTypePill";
import DetailNavbar from "@/components/DetailNavbar";
import AboutInfo from "@/components/AboutInfo";
import StatsInfo from "@/components/StatsInfo";
import EvolutionChain from "@/components/EvolutionChain";
import MoveInfo from "@/components/MoveInfo";
import Link from "next/link";


const menuItems = [
    "About",
    "Base Stats",
    "Evolution",
    "Moves"
];

export default function Page({ params }: { params: { id: number } }) {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const [selectedItem, setSelectedItem] = useState<string>(menuItems[0]);

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
        <div className="h-screen flex flex-col" style={{ backgroundColor: `${getBackground()}` }}>
            <Link href={'/'} className="pt-3 opacity-25 hover:opacity-100 w-16">
                <span className="px-8">Home</span>
            </Link>
            <div className="flex justify-between px-8 pt-5">
                <div>
                    <h1 className="mb-2 capitalize"> {pokemon?.name} </h1>
                    <div className="flex">
                        {
                            pokemon?.types.map((type: SimplePokemonType, index: number) => {
                                return (
                                    <div key={index} className="w-28">
                                        <PokemonTypePill type={type.type.name} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className="opacity-30"> {`#${String(pokemon?.id).padStart(3, '0')}`} </h1>
                </div>
            </div>
            <div className="relative h-36">
                <div className="relative overflow-hidden h-36">
                    <div className='absolute -bottom-20 -right-10'>
                        <img src='/images/pokeball.svg' className='h-60 w-60 opacity-5' alt='Pokeball'/>
                    </div>
                </div>
                <div className="absolute -bottom-16 sm:-bottom-24 xl:-bottom-16 left-1/2 transform -translate-x-1/2 h-[25vh] w-[25vh] xl:h-[40vh] xl:w-[40vh] flex justify-center items-end">
                    <img src={pokemon?.sprites.front_default} className='h-full w-full' alt='Pokemon'/>
                </div>
            </div>
            <div className="flex-grow bg-white rounded-tl-3xl rounded-tr-3xl pt-24 px-8 lg:px-20">
                <DetailNavbar 
                    menuItems={menuItems}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />  
                {
                    selectedItem === "About" &&
                    <AboutInfo 
                        species={pokemon?.species.name} 
                        height={pokemon?.height}
                        weight={pokemon?.weight}
                        abilities={pokemon?.abilities.map((ability) => ability.ability.name)}
                    />
                }
                {
                    selectedItem === "Base Stats" && pokemon &&
                    <StatsInfo stats={pokemon?.stats}/>
                }
                {
                    selectedItem === "Evolution" && pokemon?.evolution_chain &&
                    <EvolutionChain pokemons={pokemon.evolution_chain}/>
                }
                {
                    selectedItem === "Moves" && pokemon?.moves &&
                    <MoveInfo moves={pokemon.moves} />
                }
            </div>
        </div>
    )
};