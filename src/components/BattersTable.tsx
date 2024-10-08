import { ODIbatters } from "../db/ODIBatters";
import { useRouter } from "next/router";

// Define the type for each batter
interface Batter {
    id: number;
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

export const ODIbattersTable = () => {
    const router = useRouter();

    const handleVideoClick = (playerID: number) => {
        router.push(`/videos/${playerID}`);
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 text-sm text-left">
                    <thead className="hover:bg-black-50">
                        <tr className='text-white'>
                            <th className="p-3 border border-gray-300">Name</th>
                            <th className="p-3 border border-gray-300">Matches</th>
                            <th className="p-3 border border-gray-300">Innings</th>
                            <th className="p-3 border border-gray-300">Runs</th>
                            <th className="p-3 border border-gray-300">Highest Score</th>
                            <th className="p-3 border border-gray-300">Average</th>
                            <th className="p-3 border border-gray-300">Strike Rate</th>
                            <th className="p-3 border border-gray-300">Centuries</th>
                            <th className="p-3 border border-gray-300">Half Centuries</th>
                            <th className="p-3 border border-gray-300">Fours</th>
                            <th className="p-3 border border-gray-300">Sixes</th>
                            <th className="p-3 border border-gray-300">Wickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ODIbatters.map((batter: Batter) => (
                            <tr key={batter.id} className="bg-gray-50 text-black">
                                <td 
                                    onClick={() => handleVideoClick(batter.id)}
                                    className="cursor-pointer p-3 border border-gray-300"
                                >
                                    {batter.name || 'Unknown'}
                                </td>
                                <td className="p-3 border border-gray-300">{batter.matches || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.innings || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.runs || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.highestScore || 'N/A'}</td>
                                <td className="p-3 border border-gray-300">{batter.average || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.strikeRate || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.centuries || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.halfCenturies || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.fours || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.sixes || 0}</td>
                                <td className="p-3 border border-gray-300">{batter.wickets || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
