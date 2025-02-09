import { Link } from "@/i18n/routing";
import close_icon from "@/Midias/Icons/x.svg";
import Image from "next/image";
import todo_icon from "@/Midias/Icons/todo_list.svg";
import timer from "@/Midias/Icons/timer.svg";

function Header({ path, currentTask, currentTime }: { path: string; currentTask: number; currentTime?: number }) {
  if (path === "introduction") {
    return (
      <header className="w-full my-4">
        <Link href="/Home">
          <Image src={close_icon} alt="close icon" />
        </Link>
      </header>
    );
  } else if(path == "on_exercises") {
    return (
      <header className="w-full my-4 flex flex-row justify-between">
        <Link href="/Home">
          <Image src={close_icon} alt="close icon" />
        </Link>

        <section className="flex flex-row gap-6">
          <div className="flex flex-row items-center gap-3">
            <Image src={todo_icon} className="w-4 h-4" alt="todo icon" />
            <span>{currentTask}</span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Image src={timer} className="w-4 h-4" alt="timer icon" />
            <span>{currentTime}s</span>
          </div>
        </section>
      </header>
    );
  } else if(path == "gabarito") {

    return (
      <header className="w-full my-4 flex flex-row justify-between">
        <Link href="/Home">
          <Image src={close_icon} alt="close icon" />
        </Link>

        <section className="flex flex-row ">

          <h1 className="text-center text-[#f14968] text-2xl font-extrabold leading-9">Gabarito</h1>
        </section>
      </header>
    );

  }

  else if(path == "conclusion") {

    return (
      <header className="w-full my-4 flex flex-row justify-between">
        <Link href="/Home">
          <Image src={close_icon} alt="close icon" />
        </Link>
      </header>
    );

  }
}

export default Header;
