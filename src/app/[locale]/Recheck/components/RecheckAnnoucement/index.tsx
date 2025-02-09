import BottomHeader from "@/app/[locale]/Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import PremiumDescription from "@/app/[locale]/Recheck/components/PremiumDescriptionRecheck";
import Header from "@/app/[locale]/Home/Components/Header";
import ButtonsContainer from "@/app/[locale]/PaymentPage/components/ButtonsContainer";

function RecheckAnnoucement() {
  return (
    <>
      <Header />
      <main className="px-4 h-[calc(100vh-24vh)] flex flex-col justify-between">
        <PremiumDescription />
        <ButtonsContainer />
      </main>

      <BottomHeader ActualPath="Exams" />
    </>
  );
}

export default RecheckAnnoucement;