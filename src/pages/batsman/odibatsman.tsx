import { Appbar } from "@/components/Appbar";
import Footer from "@/components/Footer";
import { ODIBattersGrid } from "@/components/ODIBattersGrid";

export default function ODI(){
    return <div>
        <div>
        <ODIBattersGrid/>
        <Footer/>
        </div>
    </div>
}