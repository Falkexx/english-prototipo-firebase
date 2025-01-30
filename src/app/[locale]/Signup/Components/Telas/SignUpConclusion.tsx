import { useTranslations } from "next-intl";
import LeftDuck from "@/Midias/LeftDuck.svg";
import Image from "next/image";

function SignUpConclusion() {
  const t = useTranslations("SignUpStages.SignUpConclusion"); // Obtendo as traduções

  return (
    <div className="w-full">
      <main className="w-full flex flex-col gap-4">
        <div className="p-5 rounded-3xl border-2 border-zinc-200 justify-center items-center gap-2 inline-flex">
          <h1 className="grow shrink basis-0 text-center text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
            {t("welcome")} {/* Usando a tradução para o título */}
          </h1>
        </div>

        <Image src={LeftDuck} alt="Patinho" />

        <article className="flex flex-col gap-2">
          <h1 className="grow shrink basis-0 text-center text-bg-primary text-3xl font-bold font-['Nunito'] leading-loose">
            {t("allSet")} {/* Usando a tradução para o título */}
          </h1>

        </article>

        <div className="w-16 m-auto h-16 border-4 border-solid border-[#F14968] border-t-transparent rounded-full animate-spin"></div>
      </main>
    </div>
  );
}

export default SignUpConclusion;
