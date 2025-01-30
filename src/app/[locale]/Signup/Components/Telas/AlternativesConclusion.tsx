"use client"

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import LeftDuck from '@/Midias/LeftDuck.svg'
import Image from "next/image";
import {useTranslations} from 'next-intl';


function AlternativesConclusion() {
    const [showConfetti, setShowConfetti] = useState(false);

    const t = useTranslations('SignUpStages');

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Pega o tamanho da janela quando o componente é montado
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Atualiza as dimensões na montagem
        updateDimensions();

        // Inicia o confetti
        setShowConfetti(true);

        // Remove o confetti após 3 segundos
        setTimeout(() => setShowConfetti(false), 4000);

        // Opcional: atualiza as dimensões quando a janela é redimensionada
        window.addEventListener('resize', updateDimensions);

        // Limpa o listener no unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className="w-full">


            <main className="w-full flex flex-col justify-center items-center gap-4">

                <div className="w-[358px] h-[168px] p-5 rounded-3xl border-2 border-zinc-200 justify-center items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-center text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">{t('conclusion.title')}</div>
                </div>


                <Image src={LeftDuck} alt='Patinho' />


            </main>

            {/*ESSA PARTE É INUTILIZAVEL. VAI FUNCIONAR PARA CHAMAR O O CONFETTI */}
            {showConfetti && (
                <Confetti width={dimensions.width} height={dimensions.height} />
            )}
            {/* .................................................................*/}

        </div>
    );
}

export default AlternativesConclusion;
