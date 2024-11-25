
import EditBtns from "./components/EditBtns";
import Header from "./components/Header";
import ShowStatistics from "./components/ShowStatistics";
import UserDatas from "./components/UserDatas";
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import NotAuthenticaded from '@/Components/NotAuthenticaded/index'

async function page() {
  await IsAuthenticated()

    return (
      <>
        <BottomHeader ActualPath="Profile" />

        <main className="px-6">
          <UserDatas />
          <EditBtns />
          <ShowStatistics />
        </main>
      </>
    );
  }

export default page;
