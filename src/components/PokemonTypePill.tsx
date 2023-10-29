interface PokemonTypePillProps {
    type: string;
}


const PokemonTypePill = ({ type }: PokemonTypePillProps) => {
    return (
        <button className="px-1 h-8 mb-1 bg-opacity-30 w-4/5 rounded-2xl bg-white" disabled>
            <h5 className="capitalize">{ type }</h5>
        </button>
    )
};

export default PokemonTypePill