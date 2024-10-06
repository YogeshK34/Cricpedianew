import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { ODIBattersGrid } from "@/components/ODIBattersGrid";
import { ODIBowlersGrid } from "@/components/ODIBowlersGrid";

export default function ODI(){
    return <div>
        <div>
        <ODIBowlersGrid/>
        <Footer/>
        </div>
    </div>
}