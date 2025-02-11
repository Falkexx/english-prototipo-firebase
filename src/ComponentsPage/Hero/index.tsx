import Image from "next/image";
import MascoteHome from "@/Midias/MascoteHome.svg";
import DuckRightDesk from "@/Midias/duckRightDesk.svg";
import { useTranslations } from "next-intl";

function index() {
  const t = useTranslations("HomePage");

  return (
    <section className="w-full flex flex-col gap-3 justify-center items-center lg:flex lg:flex-row lg:max-w-7xl lg:m-auto ">
      <Image
        src={MascoteHome}
        alt="Duck"
        className="w-full mb-6 block "
      />

      <div className="text-center">
        <span className="text-2xl font-extrabold text-zinc-700">
          {t("title")}
        </span>
      </div>
    </section>
  );
}

export default index;
