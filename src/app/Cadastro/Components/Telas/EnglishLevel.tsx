import Image from "next/image";
import RightSmallDuck from '@/Midias/RightSmallDuck.svg';
import LevelBar1 from '@/Midias/LevelsIcons/progress-bar-var1.svg';
import LevelBar2 from '@/Midias/LevelsIcons/progress-bar-var2.svg';
import LevelBar3 from '@/Midias/LevelsIcons/progress-bar-var3.svg';
import LevelBar4 from '@/Midias/LevelsIcons/progress-bar-var4.svg';

function Index() {
    const LevelOptions = [
        {
            Title: "Estou apenas começando a aprender Inglês",
            Icon: LevelBar1,
        },
        {
            Title: "Conheço algumas palavras e frases",
            Icon: LevelBar2,
        },
        {
            Title: "Consigo ter conversações simples",
            Icon: LevelBar3,
        },
        {
            Title: "Posso me comunicar em nível intermediário ou superior",
            Icon: LevelBar4,
        },
    ];

    return (
        <>
            <section>
                <section>
                    <article>
                        <h1>Vamos começar! Qual é o seu nível atual de Inglês?</h1>
                    </article>
                    <Image src={RightSmallDuck} alt="Patinho" />
                </section>
                <section>
                    {LevelOptions.map((option, index) => (
                        <section key={index}>
                            <Image src={option.Icon} alt="Icone" />
                            <h1>{option.Title}</h1>
                        </section>
                    ))}
                </section>
            </section>
        </>
    );
}

export default Index;
