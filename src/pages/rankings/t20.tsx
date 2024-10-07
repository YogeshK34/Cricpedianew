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
              <td className="py-2 px-4">63</td>
              <td className="py-2 px-4">16835</td>
              <td className="py-2 px-4">267</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">02</td>
              <td className="py-2 px-4">Australia</td>
              <td className="py-2 px-4">45</td>
              <td className="py-2 px-4">11545</td>
              <td className="py-2 px-4">257</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">03</td>
              <td className="py-2 px-4">West Indies</td>
              <td className="py-2 px-4">49</td>
              <td className="py-2 px-4">12502</td>
              <td className="py-2 px-4">255</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">04</td>
              <td className="py-2 px-4">England</td>
              <td className="py-2 px-4">41</td>
              <td className="py-2 px-4">10391</td>
              <td className="py-2 px-4">253</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">05</td>
              <td className="py-2 px-4">New Zealand</td>
              <td className="py-2 px-4">49</td>
              <td className="py-2 px-4">12113</td>
              <td className="py-2 px-4">247</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">06</td>
              <td className="py-2 px-4">South Africa</td>
              <td className="py-2 px-4">40</td>
              <td className="py-2 px-4">9800</td>
              <td className="py-2 px-4">245</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">07</td>
              <td className="py-2 px-4">Pakistan</td>
              <td className="py-2 px-4">46</td>
              <td className="py-2 px-4">11097</td>
              <td className="py-2 px-4">241</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">08</td>
              <td className="py-2 px-4">Sri Lanka</td>
              <td className="py-2 px-4">40</td>
              <td className="py-2 px-4">9159</td>
              <td className="py-2 px-4">229</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">09</td>
              <td className="py-2 px-4">Bangladesh</td>
              <td className="py-2 px-4">50</td>
              <td className="py-2 px-4">11253</td>
              <td className="py-2 px-4">225</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">10</td>
              <td className="py-2 px-4">Afghanistan</td>
              <td className="py-2 px-4">39</td>
              <td className="py-2 px-4">8682</td>
              <td className="py-2 px-4">223</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">11</td>
              <td className="py-2 px-4">Ireland</td>
              <td className="py-2 px-4">49</td>
              <td className="py-2 px-4">9629</td>
              <td className="py-2 px-4">197</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">12</td>
              <td className="py-2 px-4">Zimbabwe</td>
              <td className="py-2 px-4">46</td>
              <td className="py-2 px-4">8896</td>
              <td className="py-2 px-4">193</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">13</td>
              <td className="py-2 px-4">Scotland</td>
              <td className="py-2 px-4">27</td>
              <td className="py-2 px-4">5151</td>
              <td className="py-2 px-4">191</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4">14</td>
              <td className="py-2 px-4">Netherlands</td>
              <td className="py-2 px-4">25</td>
              <td className="py-2 px-4">4600</td>
              <td className="py-2 px-4">184</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4">15</td>
              <td className="py-2 px-4">Namibia</td>
              <td className="py-2 px-4">40</td>
              <td className="py-2 px-4">7336</td>
              <td className="py-2 px-4">18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
