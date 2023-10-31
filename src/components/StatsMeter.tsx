"use client"
import { visualizeStats } from "@/utils/stats";
import { useMemo } from "react"

interface StatsMeterProps {
    stat: number;
}

const StatsMeter = ({ stat }: StatsMeterProps) => {
    const {percentage, color} = useMemo(() => visualizeStats(stat), [stat]);

    return (
        <div className="flex items-center">
            <div data-testid="stats-meter" style={{ width: `${percentage}%`, backgroundColor: `${color}`, height: '10px' }}></div>
        </div>
    )
};

export default StatsMeter;