import React from "react";
import Image from "next/image";
import { BowlertypeImage } from "@/types/BowlerImage";

interface PlayerCardProps {
    player: BowlertypeImage;
}

export const BowlerCard: React.FC<PlayerCardProps> = ({ player }) => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex"> {/* Flex layout for horizontal alignment */}
            <Image
                src={player.image} // Ensure this points to the correct path
                alt={`${player.name}'s Profile Image`}
                width={416} // Adjusted width for left alignment
                height={392} // Set height for rectangular format
                className="rounded-lg mr-4" // Added margin to the right
            />
            <div className="flex-grow"> {/* Allow this div to take remaining space */}
                <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                <ul className="mt-3 text-gray-600 list-disc list-inside"> {/* Use an unordered list for bullet points */}
                    <li><span className="font-semibold">Carrer:</span> {player.career}</li>
                    <li><span className="font-semibold">Matches:</span> {player.matches}</li>
                    <li><span className="font-semibold">Innings:</span> {player.innings}</li>
                    <li><span className="font-semibold">Balls Bowled:</span> {player.balls_bowled}</li>
                    <li><span className="font-semibold">Over Bowled:</span> {player.overs_bowled}</li>
                    <li><span className="font-semibold">Maidens:</span> {player.maidens}</li>
                    <li><span className="font-semibold">Runs Conceded:</span> {player.runs_conceded}</li>
                    <li><span className="font-semibold">Wickets:</span> {player.wickets}</li>
                    <li><span className="font-semibold">Best Bowling:</span> {player.best_bowling}</li>
                    <li><span className="font-semibold">5 Wicket Hauls:</span> {player.five_wicket_hauls}</li>
                </ul>
            </div>
        </div>
    );
};
