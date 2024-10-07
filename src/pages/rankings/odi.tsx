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
              <th className="py-3 px-4">Pos</th>
              <th className="py-3 px-4">Team</th>
              <th className="py-3 px-4">Matches</th>
              <th className="py-3 px-4">Points</th>
              <th className="py-3 px-4">Rating</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-base font-medium text-center">
            <tr className="bg-gray-100">
              <td className="py-2 px-4">01</td>
              <td className="py-2 px-4">India</td>
              <td className="py-2 px-4">45</td>
              <td className="py-2 px-4">5298</td>
              <td className="py-2 px-4">118</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">02</td>
              <td className="py-2 px-4">Australia</td>
              <td className="py-2 px-4">39</td>
              <td className="py-2 px-4">4463</td>
              <td className="py-2 px-4">114</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">03</td>
              <td className="py-2 px-4">South Africa</td>
              <td className="py-2 px-4">34</td>
              <td className="py-2 px-4">3672</td>
              <td className="py-2 px-4">108</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">04</td>
              <td className="py-2 px-4">Pakistan</td>
              <td className="py-2 px-4">26</td>
              <td className="py-2 px-4">2762</td>
              <td className="py-2 px-4">106</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">05</td>
              <td className="py-2 px-4">New Zealand</td>
              <td className="py-2 px-4">33</td>
              <td className="py-2 px-4">3349</td>
              <td className="py-2 px-4">101</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">06</td>
              <td className="py-2 px-4">England</td>
              <td className="py-2 px-4">33</td>
              <td className="py-2 px-4">3201</td>
              <td className="py-2 px-4">97</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">07</td>
              <td className="py-2 px-4">Sri Lanka</td>
              <td className="py-2 px-4">50</td>
              <td className="py-2 px-4">4825</td>
              <td className="py-2 px-4">97</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">08</td>
              <td className="py-2 px-4">Bangladesh</td>
              <td className="py-2 px-4">40</td>
              <td className="py-2 px-4">3453</td>
              <td className="py-2 px-4">86</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">09</td>
              <td className="py-2 px-4">Afghanistan</td>
              <td className="py-2 px-4">34</td>
              <td className="py-2 px-4">2855</td>
              <td className="py-2 px-4">84</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">10</td>
              <td className="py-2 px-4">West Indies</td>
              <td className="py-2 px-4">32</td>
              <td className="py-2 px-4">2205</td>
              <td className="py-2 px-4">69</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">11</td>
              <td className="py-2 px-4">Scotland</td>
              <td className="py-2 px-4">28</td>
              <td className="py-2 px-4">1450</td>
              <td className="py-2 px-4">52</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">12</td>
              <td className="py-2 px-4">Zimbabwe</td>
              <td className="py-2 px-4">24</td>
              <td className="py-2 px-4">1181</td>
              <td className="py-2 px-4">49</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">13</td>
              <td className="py-2 px-4">Ireland</td>
              <td className="py-2 px-4">23</td>
              <td className="py-2 px-4">1131</td>
              <td className="py-2 px-4">49</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">14</td>
              <td className="py-2 px-4">Netherlands</td>
              <td className="py-2 px-4">38</td>
              <td className="py-2 px-4">1791</td>
              <td className="py-2 px-4">47</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">15</td>
              <td className="py-2 px-4">Canada</td>
              <td className="py-2 px-4">17</td>
              <td className="py-2 px-4">562</td>
              <td className="py-2 px-4">33</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
