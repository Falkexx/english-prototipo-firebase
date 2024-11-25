import introductionImg from "@/Midias/introduction.svg";
import IconAudio from "@/Midias/Icons/AudioIcon.svg";
import Image from "next/image";
import NextIntroBtn from "@/app/[locale]/Lessons/components/NextIntroBtn";
import IntroductionHeader from "./IntroductionHeader";
interface props {
  data: {
    id: string;
    description: string;
    imgUrl: string;
  };
}

function ShowIntroduction({ data }: props) {
  return (
    <section>
      <div className="my-4">
        <IntroductionHeader />
      </div>

      <article>
        <h1 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
          Introduction
        </h1>
      </article>

      <article className="my-4">
        <img
          className="w-full h-[217px] rounded-[10px] shadow border-2 border-[#f14968]"
          src={data.imgUrl}
          alt="Introduction Image"
        />
      </article>

      <article className="w-full text-zinc-700 text-center font-medium font-['Nunito'] leading-normal flex justify-center items-center">
        <p>{data.description}</p>
      </article>

      <article className="flex flex-row items-center gap-4 my-5">
        {/* Quando o botão Play Text for clicado, chama a função playAudio */}
        <button className="flex flex-row items-center gap-4">
          <Image src={IconAudio} alt="Audio Icon" />
          <p className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
            Play text
          </p>
        </button>
      </article>

      <NextIntroBtn HaveBreakDown={true} LessonID={"1"} />
    </section>
  );
}

export default ShowIntroduction;
