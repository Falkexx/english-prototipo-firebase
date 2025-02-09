import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import RecheckAnnoucement from "./components/RecheckAnnoucement";
import ExamsInstructions from "./components/ExamsInstructions";

async function Recheck() {
  await IsAuthenticated();

  return (
    <>
      {
        /*
        <RecheckAnnoucement/>
        */
      }
      <ExamsInstructions/>
      <BottomHeader ActualPath="Exams" />
    </>
  );
}

export default Recheck;
