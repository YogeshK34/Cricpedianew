import { useRouter } from "next/router";
import React from 'react';
import { Appbar } from "./Appbar";
import { T20Bowlers } from "@/db/T20Bowlers";

export const T20BowlersGrid = () => {
    const router = useRouter();

    const handleVideoClick = (batterId: number) => {
        router.push(`/videos/bowler/ttwenty/${batterId}`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
            <Appbar />

            <div className="flex-grow p-4 overflow-x-auto">
                <table className="min-w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white text-sm uppercase font-bold">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Career</th>
                            <th className="px-6 py-3">Matches</th>
                            <th className="px-6 py-3">Innings</th>
                            <th className="px-6 py-3">Balls Bowled</th>
                            <th className="px-6 py-3">Overs Bowled</th>
                            <th className="px-6 py-3">Maidens</th>
                            <th className="px-6 py-3">Runs Conceded</th>
                            <th className="px-6 py-3">Wickets</th>
                            <th className="px-6 py-3">Best Bowling</th>
                            <th className="px-6 py-3">5 Wicket Hauls</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 text-base font-medium text-center">
                        {T20Bowlers.map((batter, index) => (
                            batter ? (
                                <tr
                                    key={batter.id}
                                    className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}
                                >
                                    <td
                                        onClick={() => handleVideoClick(batter.id)} 
                                        className="cursor-pointer px-6 py-4 border border-gray-300">{batter.name}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.career}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.matches}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.innings}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.balls_bowled}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.overs_bowled}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.maidens}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.runs_conceded}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.wickets}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.best_bowling}</td>
                                    <td className="px-6 py-4 border border-gray-300">{batter.five_wicket_hauls}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
