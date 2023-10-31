import type { Move } from "@/utils/types";

interface MoveInfoProps {
    moves: Move[];
}

const MoveInfo = ({ moves }: MoveInfoProps) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-7 gap-2" data-testid="move-info">
            {
                moves.map((move: Move) => 
                    (
                        <div className="border-2 rounded-lg pl-2" key={move.move.name}>
                            <h5 data-testid="move-item" className="capitalize" >{move.move.name}</h5>
                        </div>
                    )
                )
            }
        </div>
    )
};

export default MoveInfo;