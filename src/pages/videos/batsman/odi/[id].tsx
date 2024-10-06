import { useRouter } from "next/router";
import { PlayerCard } from "@/components/PlayerCard"; 
import { PlayerImage } from "@/types/playerImage";
import { ODIbattersImage } from "@/db/ODIBattersImage";
import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";

const PlayerDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    const player: PlayerImage | undefined = ODIbattersImage.find((batter) => batter.id === Number(id));

    if (!player) {
        return <div>Player not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow mb-0">
                <Appbar />
                <PlayerCard player={player} />
            </div>
            <Footer />
        </div>
    );
};

export default PlayerDetail;
