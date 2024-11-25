import Header from "@/app/[locale]/Home/Components/Header";
import ChooseACard from '@/app/[locale]/PaymentPage/Subscribe/PaymentMethod/components/ChooseACard'
import Btn_Continue from "./components/Btn_Continue";
import BottomHeader from "@/app/[locale]/Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
async function index() {

    await IsAuthenticated();
    return ( 

        
        <>
            <Header/>

            <main className="px-4 h-[calc(100vh-30vh)] flex flex-col justify-between">

                <ChooseACard/>
            </main>

            <BottomHeader ActualPath="Plans"/>
        </>
     );
}

export default index;