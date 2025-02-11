import Image from "next/image";
import LeftDuck from '@/Midias/LeftDuck.svg'
import { useTranslations } from "next-intl";

function BemVindo() {
    const t = useTranslations('SignUpStages')

    return (<>

        <section className=" flex flex-col gap-5 lg:items-center lg:h-[70vh] lg:justify-center">
            <article className="w-full text-center border-2 rounded-3xl py-5 px-4">
                <span className="leading-normal font-extrabold text-xl text-zinc-700 lg:text-2xl">{t("welcome.title")}<span className="text-text-secundary font-extrabold">{t("welcome.subtitle")}</span> {t("welcome.description")}</span>
            </article>

            <section className="mt-10">
                <Image src={LeftDuck} alt="Patinho" priority quality={100}/>
            </section>

        </section>


    </>);
}

export default BemVindo;