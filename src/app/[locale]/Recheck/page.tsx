import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import RecheckAnnoucement from "./components/RecheckAnnoucement";
import ExamsInstructions from "./components/ExamsInstructions";
import Sidebar from "../Home/Components/Desktop/Sidebar/Sidebar";

async function Recheck() {
  await IsAuthenticated();

  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">

        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Exams" />
        </div>

        <main className="lg:px-6 lg:w-[80%] ">
          {/*
        <RecheckAnnoucement/>
        */}
          <ExamsInstructions />
          <BottomHeader ActualPath="Exams" />
        </main>
      </section>
    </>
  );
}

export default Recheck;
