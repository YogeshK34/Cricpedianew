import { useRouter } from "next/router";
import React from 'react';
import { Appbar } from "./Appbar";
import { T20Batters } from "@/db/T20batters";

export const T20BattersGrid = () => {
    const router = useRouter();

    const handleVideoClick = (batterId: number) => {
        router.push(`/videos/batsman/ttwenty/${batterId}`);
    };

    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            <th className="px-6 py-3 border border-gray-300">Name</th>
                            <th className="px-6 py-3 border border-gray-300">Matches</th>
                            <th className="px-6 py-3 border border-gray-300">Innings</th>
                            <th className="px-6 py-3 border border-gray-300">Runs</th>
                            <th className="px-6 py-3 border border-gray-300">Highest Score</th>
                            <th className="px-6 py-3 border border-gray-300">Average</th>
                            <th className="px-6 py-3 border border-gray-300">Strike Rate</th>
                            <th className="px-6 py-3 border border-gray-300">Centuries</th>
                            <th className="px-6 py-3 border border-gray-300">Half Centuries</th>
                            <th className="px-6 py-3 border border-gray-300">Fours</th>
                            <th className="px-6 py-3 border border-gray-300">Sixes</th>
                            <th className="px-6 py-3 border border-gray-300">Wickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {T20Batters.map((batter, index) => (
                            batter ? (
                                <tr
                                    key={batter.id}
                                    className={`hover:bg-black-100 transition-colors duration-200 ${index % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}`}
                                >
                                    <td
                                    onClick={() => handleVideoClick(batter.id)} 
                                    className="cursor-pointer text-black px-6 py-4 border border-gray-300">{batter.name}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.matches}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.innings}</td>
                                    <td className="text-black px-6 py-4 py-4 border border-gray-300">{batter.runs}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.highestScore}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.average}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.strikeRate}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.centuries}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.halfCenturies}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.fours}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.sixes}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.wickets}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
