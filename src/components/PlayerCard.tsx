import React from "react";
import { PlayerImage } from "@/types/playerImage";
import Image from "next/image";

interface PlayerCardProps {
    player: PlayerImage;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
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
                    <li><span className="font-semibold">Matches:</span> {player.matches}</li>
                    <li><span className="font-semibold">Innings:</span> {player.innings}</li>
                    <li><span className="font-semibold">Runs:</span> {player.runs}</li>
                    <li><span className="font-semibold">Highest Score:</span> {player.highestScore}</li>
                    <li><span className="font-semibold">Average:</span> {player.average}</li>
                    <li><span className="font-semibold">Strike Rate:</span> {player.strikeRate}</li>
                    <li><span className="font-semibold">Centuries:</span> {player.centuries}</li>
                    <li><span className="font-semibold">Half Centuries:</span> {player.halfCenturies}</li>
                    <li><span className="font-semibold">Fours:</span> {player.fours}</li>
                    <li><span className="font-semibold">Sixes:</span> {player.sixes}</li>
                    <li><span className="font-semibold">Wickets:</span> {player.wickets}</li>
                </ul>
            </div>
        </div>
    );
};
