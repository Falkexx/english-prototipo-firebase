import PeriodSection from './Components/PeriodSecion'
import UserRanking from './Components/UsersRanking'
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";

async function page() {

    await IsAuthenticated();
    
    return (

        <>
            <BottomHeader ActualPath="RankingPage"/>

            <main className="px-6">

                <PeriodSection/>
                <UserRanking/>

            </main>
        </>
    );
}

export default page;