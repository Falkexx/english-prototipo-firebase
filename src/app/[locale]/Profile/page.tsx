import EditBtns from "./components/EditBtns";
import Header from "./components/Header";
import ShowStatistics from "./components/ShowStatistics";
import UserDatas from "./components/UserDatas";
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import NotAuthenticaded from "@/Components/NotAuthenticaded/index";
import Sidebar from "../Home/Components/Desktop/Sidebar/Sidebar";

async function page() {
  await IsAuthenticated();

  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">

        <div className="hidden lg:block lg:w-[23%]">

          <Sidebar ActualPath="Profile" />

        </div>
        <div className="lg:hidden">
          <BottomHeader ActualPath="Profile" />
        </div>

        <main className="px-6 lg:w-[80%] ">
          <UserDatas />
          <EditBtns />
          <ShowStatistics />
        </main>

      </section>
    </>
  );
}

export default page;
