import StatsMeter from "./StatsMeter";
import type { PokemonStat } from "@/utils/types";

interface StatsInfoProps {
    stats: PokemonStat[];
}

const StatsInfo = ({ stats }: StatsInfoProps) => {
    return (
        <div className="bg-inherit w-2/3 grid grid-cols-4">
            <div className="text-gray-500 grid gap-2">
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp.Atk</p>
                <p>Sp.Def</p>
                <p>Speed</p>
            </div>
            <div className="grid gap-2">
                {stats.map((stat: PokemonStat) => (<p key={stat.stat.name}>{stat.base_stat}</p>))}
            </div>
            <div className="grid gap-2 col-span-2">
                {stats.map((stat: PokemonStat) => (<StatsMeter stat={stat.base_stat} key={stat.stat.name}/>))}
            </div>
        </div>
    )
};

export default StatsInfo;