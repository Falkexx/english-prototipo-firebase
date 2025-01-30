"use-client"

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import RightSmallDuck from '@/Midias/RightSmallDuck.svg';
import LevelBar1 from '@/Midias/LevelsIcons/progress-bar-var1.svg';
import LevelBar2 from '@/Midias/LevelsIcons/progress-bar-var2.svg';
import LevelBar3 from '@/Midias/LevelsIcons/progress-bar-var3.svg';
import LevelBar4 from '@/Midias/LevelsIcons/progress-bar-var4.svg';

function Index() {
    const [SelectedItem, setSelectedItem] = useState(null);

    const t = useTranslations('SignUpStages')

    function HandleClick(index:any){
        setSelectedItem(index);
    };

    const LevelOptions = [
        {
            Title: t('englishLevel.options.beginner'),
            Icon: LevelBar1,
        },
        {
            Title: t('englishLevel.options.someWords'),
            Icon: LevelBar2,
        },
        {
            Title: t('englishLevel.options.easyConversation'),
            Icon: LevelBar3,
        },
        {
            Title: t('englishLevel.options.advanced'),
            Icon: LevelBar4,
        },
    ];

    return (
        <div className="h-full mt-6">


            <section className="flex flex-col gap-8 h-full">
                <section className="flex flex-row items-center">
                <Image src={RightSmallDuck} alt="Patinho" />
                    <article className="bg-zinc-50 p-5 border-2 border-zinc-100 rounded-3xl">
                        <span className="text-lg font-extrabold text-zinc-800">{t('englishLevel.title')}</span>
                    </article>
                </section>



                <section className="gap-4 flex flex-col text-zinc-800">
                    {LevelOptions.map((option, index) => (
                        <section onClick={() => HandleClick(option.Title)} 
                        style={{borderColor: SelectedItem === option.Title ? "var(--color-red-default)" : "", 
                            backgroundColor: SelectedItem === option.Title ? "#FEF4F6" : "",
                            borderWidth: SelectedItem === option.Title ? "3px" : ""
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

export default Index;
