import Image from "next/image";
import DuckRightDesk from "@/Midias/duckRightDesk.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function HeroDesk() {
  const t = useTranslations("HomePage");

  return (
    <section className="flex flex-row items-center lg:max-w-7xl lg:m-auto ">
      <div>
        <Image
          src={DuckRightDesk}
          alt="patinho"
          className="w-[267px] h-[334px]"
        />
      </div>

      <section className="flex flex-col gap-12">
        <span className="text-zinc-700 text-4xl font-extrabold leading-10">
          {t("title")}
        </span>

        <div className="w-full flex flex-row gap-7">

            <Link href={`/Signup`} className="w-2/4">
              <button className="Btn_Primary">{t("startNow")}</button>{" "}
              {/* Usar a tradução da HomePage */}
            </Link>


            <Link href={`/Login`} className="w-2/4">
              <button className="Btn_Secundary">{t("accessAccount")}</button>{" "}
              {/* Usar a tradução da HomePage */}
            </Link>

        </div>
      </section>
    </section>
  );
}

export default HeroDesk;
