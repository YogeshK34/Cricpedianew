import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
      <Appbar />

      <div className="flex-grow p-4">
        <table className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white text-sm uppercase font-bold">
            <tr>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Team</th>
              <th className="py-3 px-4">Matches</th>
              <th className="py-3 px-4">Points</th>
              <th className="py-3 px-4">Rating</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-base font-medium text-center">
            <tr className="bg-gray-100">
              <td className="py-2 px-4">01</td>
              <td className="py-2 px-4">Australia</td>
              <td className="py-2 px-4">30</td>
              <td className="py-2 px-4">3715</td>
              <td className="py-2 px-4">124</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">02</td>
              <td className="py-2 px-4">India</td>
              <td className="py-2 px-4">29</td>
              <td className="py-2 px-4">3498</td>
              <td className="py-2 px-4">121</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">03</td>
              <td className="py-2 px-4">England</td>
              <td className="py-2 px-4">38</td>
              <td className="py-2 px-4">4111</td>
              <td className="py-2 px-4">108</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">04</td>
              <td className="py-2 px-4">South Africa</td>
              <td className="py-2 px-4">21</td>
              <td className="py-2 px-4">2179</td>
              <td className="py-2 px-4">104</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">05</td>
              <td className="py-2 px-4">Sri Lanka</td>
              <td className="py-2 px-4">25</td>
              <td className="py-2 px-4">2271</td>
              <td className="py-2 px-4">91</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">06</td>
              <td className="py-2 px-4">New Zealand</td>
              <td className="py-2 px-4">25</td>
              <td className="py-2 px-4">2220</td>
              <td className="py-2 px-4">89</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">07</td>
              <td className="py-2 px-4">West Indies</td>
              <td className="py-2 px-4">26</td>
              <td className="py-2 px-4">1992</td>
              <td className="py-2 px-4">77</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">08</td>
              <td className="py-2 px-4">Pakistan</td>
              <td className="py-2 px-4">20</td>
              <td className="py-2 px-4">1528</td>
              <td className="py-2 px-4">76</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">09</td>
              <td className="py-2 px-4">Bangladesh</td>
              <td className="py-2 px-4">23</td>
              <td className="py-2 px-4">1491</td>
              <td className="py-2 px-4">65</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">10</td>
              <td className="py-2 px-4">Ireland</td>
              <td className="py-2 px-4">5</td>
              <td className="py-2 px-4">131</td>
              <td className="py-2 px-4">26</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">11</td>
              <td className="py-2 px-4">Zimbabwe</td>
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">11</td>
              <td className="py-2 px-4">4</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">12</td>
              <td className="py-2 px-4">Afghanistan</td>
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">0</td>
              <td className="py-2 px-4">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
