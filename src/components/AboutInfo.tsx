import { hectoToPounds, hectoToKg, decimeterToCentimeter, decimeterToFeetAndInches } from "@/utils/unitConverter";


interface AboutInfoProps {
    species?: string;
    height?: number;
    weight?: number;
    abilities?: string[];
}

const AboutInfo = ({ species, height, weight, abilities }: AboutInfoProps) => {
    return (
        <div className="bg-inherit w-1/2 grid grid-cols-2">
            <div className="text-gray-500 grid gap-2">
                <p>Species</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
            </div>
            <div className="grid gap-2">
                <p className="capitalize">{species}</p>
                <p>{height && `${decimeterToFeetAndInches(height)} (${decimeterToCentimeter(height)} cm)`}</p>
                <p>{weight && `${hectoToPounds(weight)} lbs (${hectoToKg(weight)} kg)`}</p>
                <p className="capitalize">{abilities?.join(", ")}</p>
            </div>
        </div>
    )
};

export default AboutInfo;