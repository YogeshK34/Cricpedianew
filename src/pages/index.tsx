import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import RecentMatches from "@/components/RecentMatches";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-blue-200">
      <Appbar />
      <div className="flex-grow p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First row of Recent Matches */}
        <div className="min-w-[300px] min-h-[150px]">
          <RecentMatches
            tour={"Bangladesh tour of India"}
            match={"1st T20I"}
            flag1={"indianflag.png"}
            flag2={"banglaflag.png"}
            score1={"132/3 (11.5)"}
            score2={"127 (19.5)"}
            date={"Oct 6"}
          />
        </div>
        <div className="min-w-[300px] min-h-[150px]">
          <RecentMatches
            tour={"Australia tour of England"}
            match={"5th ODI"}
            flag1={"englandflag.png"}
            flag2={"ausflag.png"}
            score1={"309 (49.2)"}
            score2={"165/2 (20.4)"}
            date={"Sep 27"}
          />
        </div>

        {/* Second row of Recent Matches */}
        <div className="min-w-[300px] min-h-[150px]">
          <RecentMatches
            tour={"Bangladesh tour of India"}
            match={"2nd Test"}
            flag1={"indianflag.png"}
            flag2={"banglaflag.png"}
            score1={"285/9 d & 98/3 (17.2)"}
            score2={"233 & 146 (47.0)"}
            date={"Sep 29"}
          />
        </div>
        <div className="min-w-[300px] min-h-[150px]">
          <RecentMatches
            tour={"Australia tour of England"}
            match={"4th ODI"}
            flag1={"englandflag.png"}
            flag2={"ausflag.png"}
            score1={"312/5 (39.0)"}
            score2={"126 (24.4)"}
            date={"Sep 27"}
          />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
