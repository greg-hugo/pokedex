"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import { type SimplePokemon, SimplePokemonType } from "@/utils/types";
import { fetchPokemons } from "@/utils/fetch";
import PokemonCard from "./PokemonCard";


const PokemonGrid = () => {
    const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
    const [pokemonRange, setPokemonRange] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const loaderRef = useRef(null);

    const loadNextPage = useCallback(async () => {
        setIsLoading(true);
        const nextPokemonRange = pokemonRange + 8;
        const newPokemons = await fetchPokemons(pokemonRange, nextPokemonRange);
        setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
        setPokemonRange(nextPokemonRange + 1);
        setIsLoading(false);
    }, [pokemonRange]);

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '20px',
          threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && !isLoading) {
            loadNextPage();
          }
        }, options);

        if (loaderRef.current) {
          observer.observe(loaderRef.current);
        }

        return () => {
          if (loaderRef.current) {
            observer.unobserve(loaderRef.current);
          }
        };
    }, [isLoading, loadNextPage]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-3" data-testid="pokemon-grid">
            {
                pokemons?.map((pokemon: SimplePokemon, index: number) => {
                    return <PokemonCard pokemon={pokemon} key={index} />
                })
            }
            <div ref={loaderRef} style={{ height: '20px' }}></div>
        </div>
    )
}

export default PokemonGrid;