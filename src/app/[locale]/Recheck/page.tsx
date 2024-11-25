import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
async function Recheck() {

  await IsAuthenticated();
  
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <h1 className="font-bold text-black  text-xl text-center">
          Pagina em desenvolvimento. Volte em breve!
        </h1>
      </section>


      <BottomHeader ActualPath="Exams"/>
    </>
  );
}

export default Recheck;
