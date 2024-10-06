import { useRouter } from "next/router";
import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { BowlerCard } from "@/components/BowlerCard";
import { ODIBowlersImage } from "@/db/ODIBowlersImage";
import { BowlertypeImage } from "@/types/BowlerImage";

const PlayerDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    const player: BowlertypeImage | undefined = ODIBowlersImage.find((batter) => batter.id === Number(id));

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
