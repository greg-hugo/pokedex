import type { EvolutionStage } from "./types";

export const traverseEvolutionChain = async(data: EvolutionStage[], speciesNames: string[]) => {
    if (data && data.length > 0) {
        data.forEach((evolution) => {
          const speciesName = evolution.species.name;
          speciesNames.push(speciesName);

          traverseEvolutionChain(evolution.evolves_to, speciesNames);
        });
    }
}