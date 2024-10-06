import { useRouter } from "next/router";
import React from 'react';
import { Appbar } from "./Appbar";
import { TestBowlers } from "@/db/TestBowlers";

export const TestBowlersGrid = () => {
    const router = useRouter();

    const handleVideoClick = (batterId: number) => {
        router.push(`/videos/bowler/test/${batterId}`);
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
                            <th className="px-6 py-3 border border-gray-300">Career</th>
                            <th className="px-6 py-3 border border-gray-300">Matches</th>
                            <th className="px-6 py-3 border border-gray-300">Innings</th>
                            <th className="px-6 py-3 border border-gray-300">Balls Bowled</th>
                            <th className="px-6 py-3 border border-gray-300">Overs Bowled</th>
                            <th className="px-6 py-3 border border-gray-300">Maidens</th>
                            <th className="px-6 py-3 border border-gray-300">Runs Conceded</th>
                            <th className="px-6 py-3 border border-gray-300">Wickets</th>
                            <th className="px-6 py-3 border border-gray-300">Best Bowling</th>
                            <th className="px-6 py-3 border border-gray-300">5 Wicket Hauls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TestBowlers.map((batter, index) => (
                            batter ? (
                                <tr
                                    key={batter.id}
                                    className={`hover:bg-black-100 transition-colors duration-200 ${index % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}`}
                                >
                                    <td
                                    onClick={() => handleVideoClick(batter.id)} 
                                    className="cursor-pointer text-black px-6 py-4 border border-gray-300">{batter.name}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.career}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.matches}</td>
                                    <td className="text-black px-6 py-4 py-4 border border-gray-300">{batter.innings}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.balls_bowled}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.overs_bowled}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.maidens}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.runs_conceded}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.wickets}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.best_bowling}</td>
                                    <td className="text-black px-6 py-4 border border-gray-300">{batter.five_wicket_hauls}</td>
                                </tr>
                            ) : null
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
