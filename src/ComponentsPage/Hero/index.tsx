import Image from "next/image";
import MascoteHome from '@/Midias/MascoteHome.svg'
import {useTranslations} from 'next-intl';

import SignUpConclusion from "@/app/[locale]/Signup/Components/Telas/SignUpConclusion";

function index() {

    const t = useTranslations('HomePage');

    return (

        <section className="w-full flex flex-col gap-3 justify-center items-center">
            <Image src={MascoteHome} alt="Mascote" className="w-full mb-6"/>

            <div className="text-center">
                <span className="text-2xl font-extrabold text-zinc-700">{t('title')}</span>
            </div>
        </section>

    );
}

export default index;