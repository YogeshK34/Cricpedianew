import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { ODIBattersGrid } from "@/components/ODIBattersGrid";
import { ODIBowlersGrid } from "@/components/ODIBowlersGrid";
import { T20BowlersGrid } from "@/components/T20BowlersGrid";

export default function ODI(){
    return <div>
        <div>
        <T20BowlersGrid/>
        <Footer/>
        </div>
    </div>
}