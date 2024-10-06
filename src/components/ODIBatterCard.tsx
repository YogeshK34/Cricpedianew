// ODIBatterCard.tsx
import React from 'react';

interface ODIBatterProps {
    name: string;
    matches: number;
    innings: number;
    runs: number;
    highestScore: string;
    average: number;
    strikeRate: number;
    centuries: number;
    halfCenturies: number;
    fours: number;
    sixes: number;
    wickets: number;
}

const ODIBatterCard: React.FC<ODIBatterProps> = ({
    name,
    matches,
    innings,
    runs,
    highestScore,
    average,
    strikeRate,
    centuries,
    halfCenturies,
    fours,
    sixes,
    wickets,
}) => {
    return (
        <div className="border p-4 m-2 rounded">
            <h3 className="font-bold">{name}</h3>
            <p>Matches: {matches}</p>
            <p>Innings: {innings}</p>
            <p>Runs: {runs}</p>
            <p>Highest Score: {highestScore}</p>
            <p>Average: {average}</p>
            <p>Strike Rate: {strikeRate}</p>
            <p>Centuries: {centuries}</p>
            <p>Half Centuries: {halfCenturies}</p>
            <p>Fours: {fours}</p>
            <p>Sixes: {sixes}</p>
            <p>Wickets: {wickets}</p>
        </div>
    );
};

export default ODIBatterCard;
