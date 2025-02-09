import Header from "./Header";
import Image from "next/image";
import timer from "@/Midias/Icons/timer.svg";
import todo_list from "@/Midias/Icons/todo_list.svg";
import listen from "@/Midias/Icons/listening_volume.svg";
import { Link } from "@/i18n/routing";

function ExamsInstructions() {
  return (
    <section className="h-[calc(100vh-120px)] px-4">

      <Header path="introduction" currentTask={0} />

      <section className="h-full flex flex-col justify-between">

        <main className="flex flex-col gap-4 w-full ">
          <h1 className="text-zinc-800 text-lg font-bold leading-7">
            Re-check for Cabine Crew
          </h1>

          <p className="w-[358px] text-zinc-700 text-base font-medium leading-normal">
            Lorem ipsum dolor sit amet. Qui officiis tempore cum quaerat
            eligendi vel doloremque odit et velit nostrum eum eveniet voluptas!
            Eos suscipit laboriosam et voluptates quas non dolorem voluptas ut
            necessitatibus eligendi et mollitia totam a quaerat libero aut nobis
            esse. Ad inventore magni ad quas totam qui facere harum ut quia
            repellat et dolorem laborum. Et repellat rerum in voluptatum
            laudantium sed dicta veritatis ut nihil sequi
          </p>

          <section className="w-full flex flex-row gap-10 flex-wrap">
            <div className="flex flex-row items-center gap-3">
              <Image src={timer} alt="" className="w-6 h-6" />
              <p className="text-zinc-700 text-base font-bold leading-normal">
                Será Timado
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <Image src={todo_list} alt="" className="w-6 h-6" />
              <p className="text-zinc-700 text-base font-bold leading-normal">
                X Questões
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <Image src={listen} alt="" className="w-6 h-6" />
              <p className="text-zinc-700 text-base font-bold leading-normal">
                Ouvir
              </p>
            </div>
          </section>
        </main>

        
        <section className="mb-8 w-full">
          <Link
            href="/Recheck/Alternatives"
            className="w-full block text-white text-center h-[58px] px-8 py-[18px] bg-[#f14968] rounded-[100px] shadow-[4px_8px_24px_0px_rgba(241,73,104,0.25)] font-extrabold font-['Nunito'] leading-snug tracking-tight"
          >
            Começar
          </Link>
        </section>
      </section>
    </section>
  );
}

export default ExamsInstructions;
