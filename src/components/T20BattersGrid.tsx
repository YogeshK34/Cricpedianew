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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
            <Appbar />

            <div className="flex-grow p-4 overflow-x-auto">
                <table className="min-w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white text-sm uppercase font-bold">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Matches</th>
                            <th className="px-6 py-3">Innings</th>
                            <th className="px-6 py-3">Runs</th>
                            <th className="px-6 py-3">Highest Score</th>
                            <th className="px-6 py-3">Average</th>
                            <th className="px-6 py-3">Strike Rate</th>
                            <th className="px-6 py-3">Centuries</th>
                            <th className="px-6 py-3">Half Centuries</th>
                            <th className="px-6 py-3">Fours</th>
                            <th className="px-6 py-3">Sixes</th>
                            <th className="px-6 py-3">Wickets</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 text-base font-medium text-center">
                        {T20Batters.map((batter, index) => (
                            batter ? (
                                <tr
                                    key={batter.id}
                                    className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}
                                >
                                    <td
                                        onClick={() => handleVideoClick(batter.id)}
                                        className="cursor-pointer px-6 py-4 border border-gray-300">{batter.name}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.matches}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.innings}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.runs}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.highestScore}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.average}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.strikeRate}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.centuries}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.halfCenturies}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.fours}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.sixes}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.wickets}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
