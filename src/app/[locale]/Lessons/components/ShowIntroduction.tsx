'use client'

import IconAudio from "@/Midias/Icons/AudioIcon.svg";
import PauseIcon from "@/Midias/Icons/audioPause.svg";
import Image from "next/image";
import NextIntroBtn from "@/app/[locale]/Lessons/components/NextIntroBtn";
import IntroductionHeader from "./IntroductionHeader";
import { useRef, useState } from "react";

interface props {
  data: {
    id: string;
    description: string;
    imgUrl: string;
    audioUrl: string;
  };
}

function ShowIntroduction({ data }: props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          src={data.imgUrl}
          alt="Introduction Image"
        />
      </article>

      <article className="w-full text-zinc-700 text-center font-medium font-['Nunito'] leading-normal flex justify-center items-center">
        <p>{data.description}</p>
      </article>

      <article className="flex flex-row items-center gap-4 my-5">
        <button className="flex flex-row items-center gap-4" onClick={toggleAudio}>
          <Image src={isPlaying ? PauseIcon : IconAudio} alt="Audio Icon" />
          <p className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
            {isPlaying ? "Pause" : "Play text"}
          </p>
        </button>
        <audio ref={audioRef} src={data.audioUrl} />
      </article>

      <NextIntroBtn HaveBreakDown={true} LessonID={"1"} />
    </section>
  );
}

export default ShowIntroduction;