"use-client"

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import RightSmallDuck from '@/Midias/RightSmallDuck.svg';
import Icon1 from '@/Midias/ReasonToStudyIcons/image 1.png';
import Icon2 from '@/Midias/ReasonToStudyIcons/image 2.svg';
import Icon3 from '@/Midias/ReasonToStudyIcons/image 3.svg';
import Icon4 from '@/Midias/ReasonToStudyIcons/image 4.svg';

function ReasonToStudy() {

    const [SelectedReason, setSelectedReason] = useState(null);

    const t = useTranslations('SignUpStages')

    function HandleClick(index: any) {
        setSelectedReason(index);
    };

    const Options = [
        {
            Title: t("studyMotivation.options.fun"),
            Icon: Icon1,
        },

        {
            Title: t("studyMotivation.options.others"),
            Icon: Icon4,
        },
    ];

    return (
        <div className="h-full mt-6">


            <section className="flex flex-col gap-8 h-full">

                <section className="flex flex-row items-center">

                    <Image src={RightSmallDuck} alt="Patinho" />

                    <article className="bg-zinc-50 p-5 border-2 border-zinc-100 rounded-3xl">
                        <span className="text-lg font-extrabold text-zinc-800">Agora, por que você quer estudar Inglês?</span>
                    </article>

                </section>



                <section className="gap-4 flex flex-col text-zinc-800">

                    {Options.map((option, index) => (
                        
                        <section onClick={() => HandleClick(option.Title)}

                            style={{
                                borderColor: SelectedReason === option.Title ? "var(--color-red-default)" : "",
                                backgroundColor: SelectedReason === option.Title ? "#FEF4F6" : "",
                                borderWidth: SelectedReason === option.Title ? "3px" : ""
                            }}


                            className="flex items-center gap-6 h-24 border-2 px-4 py-5 rounded-3xl border-zinc-100"
                            key={index}>

                            <Image src={option.Icon} alt="Icone" />
                            <h1 className="text-lg font-extrabold">{option.Title}</h1>
                        </section>
                    ))}
                    
                </section>


            </section>
        </div>
    );
}

export default ReasonToStudy;
