import { useRouter } from "next/router";
import { PlayerCard } from "@/components/PlayerCard"; 
import { PlayerImage } from "@/types/playerImage";
import { ODIbattersImage } from "@/db/ODIBattersImage";
import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { BowlerCard } from "@/components/BowlerCard";
import { ODIBowlersImage } from "@/db/ODIBowlersImage";
import { BowlertypeImage } from "@/types/BowlerImage";
import { T20BowlersImage } from "@/db/T20BowlersImage";

const PlayerDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    // Debugging log
    // console.log("Combined Players:", allPlayers);

    const player: BowlertypeImage | undefined = T20BowlersImage.find((batter) => batter.id === Number(id));

    if (!player) {
        return <div>Player not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow mb-0">
                <Appbar />
                <BowlerCard player={player} />
            </div>
            <Footer />
        </div>
    );
};

export default PlayerDetail;
