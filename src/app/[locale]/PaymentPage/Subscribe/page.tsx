import Header from "@/app/[locale]/Home/Components/Header";
import ChooseAPlan from "./components/ChooseAPlan";
import Btn_Continue from "./components/Btn_Continue";
import BottomHeader from "../../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";

async function index() {

    await IsAuthenticated();
    
    return (

        <>
            <Header/>

            <main className="px-4 flex flex-col justify-between">
                <ChooseAPlan/>
            </main>

            <BottomHeader ActualPath="Plans"/>
        </>
    );
}

export default index;