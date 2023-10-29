import type { Move } from "@/utils/types";

interface MoveInfoProps {
    moves: Move[];
}

const MoveInfo = ({ moves }: MoveInfoProps) => {
    return (
        <div className="grid grid-cols-7 gap-2">
            {
                moves.map((move: Move) => 
                    (
                        <div className="border-2 rounded-lg pl-2" key={move.move.name}>
                            <h5 className="capitalize" >{move.move.name}</h5>
                        </div>
                    )
                )
            }
        </div>
    )
};

export default MoveInfo;