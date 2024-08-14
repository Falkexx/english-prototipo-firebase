'use client'

import { useState } from 'react';

function ModuleContainer() {
    const [progress, setProgress] = useState(40); // Estado inicial da progress bar

    // Função para calcular o preenchimento do círculo com base na porcentagem de progresso
    const circleRadius = 34; // Raio do círculo
    const circleCircumference = 2 * Math.PI * circleRadius; // Circunferência do círculo
    const progressOffset = circleCircumference - (progress / 100) * circleCircumference;

    return (
        <section className="mt-9">
            <div className="w-full h-20 bg-blue-500 rounded-tl-2xl rounded-bl-2xl rounded-tr-3xl rounded-br-3xl relative">
                <article className="flex flex-col gap-2 text-white pl-2 pt-2 leading-normal">
                    <h1 className="font-extrabold font-['Nunito']">Modulo 1</h1>
                    <p>Basic English Skills for Cabin Crew</p>
                </article>

                {/* Progress Bar em Círculo */}
                <section className="absolute -right-3 -top-1 bg-white rounded-full h-[86px] w-[86px] flex justify-center items-center">
                    <svg className="w-20 h-20 transform rotate-[-90deg]" width="80" height="80" viewBox="0 0 80 80">
                        {/* Fundo da barra de progresso */}
                        <circle
                            cx="40"
                            cy="40"
                            r={circleRadius}
                            stroke="#f5f5f5" // Cor bg-neutral-50
                            strokeWidth="8"
                            fill="transparent"
                        />
                        {/* Preenchimento da barra de progresso */}
                        <circle
                            cx="40"
                            cy="40"
                            r={circleRadius}
                            stroke="#f14968" // Cor de preenchimento
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circleCircumference}
                            strokeDashoffset={progressOffset}
                        />
                    </svg>
                    <div className="absolute text-black text-sm font-bold">{progress}%</div>
                </section>
            </div>
        </section>
    );
}

export default ModuleContainer;
