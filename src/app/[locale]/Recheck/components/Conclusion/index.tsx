import { Link } from "@/i18n/routing";
import LeftDuck from "@/Midias/LeftDuck.svg";
import Image from "next/image";
import Header from "../Header";
import Timer_colored from "@/Midias/Icons/timer_colored.png";
import acurracy_icon from "@/Midias/Icons/acurracy.png";
import SeeGabarito from "./buttons/SeeGabarito";
import Share from "./buttons/Share";

interface ConclusionProps {
  totalTime: number; // Tempo total em segundos
  accuracy: number; // Acurácia
  correct_answers: number[];
  wrong_answers: number[];
}

function Conclusion({
  totalTime,
  accuracy,
  correct_answers,
  wrong_answers,
}: ConclusionProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <>
      <Header path="conclusion" currentTask={0} />

      <section className="w-full flex flex-col justify-center gap-4 h-[90vh] items-center">
        <section className="flex flex-col gap-3">
          <h1 className="text-center text-[#f14968] text-2xl font-extrabold font-['Nunito'] leading-9">
            Lessons completed!
          </h1>

          <Image src={LeftDuck} alt="Patinho" />
        </section>

        <div className="w-full h-[0px] border border-zinc-200"></div>

        <section>
          <section className="flex flex-row gap-4">
            <div className="">
              <div className="w-[98px] h-9 flex justify-center items-center bg-blue-600 rounded-tl-[10px] rounded-tr-[10px]">
                <span className="text-white text-center text-sm font-extrabold leading-tight ">
                  Timer
                </span>
              </div>
              <div className="w-[98px] h-[46px] rounded-bl-[10px] rounded-br-[10px] border border-blue-600 flex justify-center items-center">
                <div className="flex flex-row items-center gap-1">
                  <Image src={Timer_colored} alt="Timer colored" />

                  <p className="text-justify text-zinc-700 text-lg font-bold leading-7">
                    {formatTime(totalTime)}
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-[98px] h-9 flex justify-center items-center bg-[#f14968] rounded-tl-[10px] rounded-tr-[10px]">
                <span className="text-white text-center text-sm font-extrabold leading-tight ">
                  Accuracy
                </span>
              </div>
              <div className="w-[98px] h-[46px] rounded-bl-[10px] rounded-br-[10px] border border-[#f14968] flex justify-center items-center">
                <div className="flex flex-row items-center gap-1">
                  <Image src={acurracy_icon} alt="accuracy" />

                  <p className="text-justify text-zinc-700 text-lg font-bold leading-7">
                    {Math.round(accuracy)}%
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="w-full flex flex-col gap-2 my-8">
          <SeeGabarito
            correct_answers={correct_answers}
            wrong_answers={wrong_answers}
          />
        </section>
      </section>
    </>
  );
}

export default Conclusion;
