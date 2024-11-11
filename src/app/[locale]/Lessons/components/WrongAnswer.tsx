import WrongIcon from "@/Midias/close-square.svg";
import Image from "next/image";

interface WrongAnswerProps {
  onRetryLesson: () => void;
}

function index({ onRetryLesson }: WrongAnswerProps) {
  return (
    <section className="w-[100%] h-[258px] flex flex-col justify-around bg-[#f14968] fixed bottom-0 left-0 px-4">
      <article className="w-full flex flex-row gap-2">
        <Image src={WrongIcon} alt="Correto" className="w-6 h-6" />

        <h1 className="text-white text-lg font-bold font-['Nunito'] leading-7">
          Wrong!
        </h1>
      </article>

      <article className="flex flex-col gap-2">
        <h1 className="text-white text-lg font-bold font-['Nunito'] leading-7">
          Correct Answer:
        </h1>
        <div className="w-[350px]">
          <span className="text-white text-sm font-medium font-['Nunito'] leading-tight">
            The{" "}
          </span>
          <span className="text-white text-sm font-extrabold font-['Nunito'] leading-tight">
            pilot
          </span>
          <span className="text-white text-sm font-medium font-['Nunito'] leading-tight">
            {" "}
            greeted the passengers.
          </span>
        </div>
      </article>

      <button className="w-[100%] h-[58px] px-4 py-[18px] bg-white rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex" onClick={onRetryLesson}>
        <h1 className="grow shrink basis-0 text-center text-[#f14968] text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Ok
        </h1>
      </button>
    </section>
  );
}

export default index;
