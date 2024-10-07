export default function RecentMatches({ tour, match, date, score1, score2, flag1, flag2 }: any) {
    return (
      <div className="border rounded-lg p-4 max-w-sm shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl">
        <div className="mt-2">
          <div className="text-sm font-semibold text-blue-600">{tour}</div>
          <div className="text-xs text-gray-500">{match}</div>
          <div className="text-xs text-gray-400 mb-3">{date}</div>
          <div className="flex flex-col space-y-2">
            {/* First team's score */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-2">
                <img src={flag1} className="w-8 h-auto rounded-full shadow-md" alt="Team 1 Flag" />
                <span className="text-sm font-medium text-gray-700">Team 1</span>
              </div>
              <div className="text-gray-400 p-2 text-sm font-semibold text-right bg-blue-100 border rounded-md w-32 shadow-sm">
                {score1}
              </div>
            </div>
  
            {/* Second team's score */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-2">
                <img src={flag2} className="w-8 h-auto rounded-full shadow-md" alt="Team 2 Flag" />
                <span className="text-sm font-medium text-gray-700">Team 2</span>
              </div>
              <div className="text-gray-400 p-2 text-sm font-semibold text-right bg-red-100 border rounded-md w-32 shadow-sm">
                {score2}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  