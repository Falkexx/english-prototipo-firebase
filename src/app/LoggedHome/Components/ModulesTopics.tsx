'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { LegacyRef } from 'react';

function ModulesTopics() {

    const carousel = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState<number | any>();

    function handleResize() {

        setWidth(window.screen.width);

    }


    useEffect(() => {
        console.log(width)

    }, [width])

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize); //TODA VEZ QUE O TAMANHO DA TELA FOR MUDADO, SERÁ ATRIBUIDO UM NOVO VALOR AO WIDTH
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <section className='mt-14'>

            <motion.div ref={carousel} whileTap={width < 1100 ? { cursor: "pointer" } : { cursor: "" }}>

                <motion.div className={`w-[100%]  lg:w-full`}

                    drag={width <= 1100 ? "x" : false}

                    dragConstraints={width <= 1100 ? { right: 0, left: -width } : false}>

                    <div className="flex flex-row  gap-4 lg:gap-20 lg:w-fit lg:pl-8 lg:justify-center lg:m-auto ">

                        <div className="h-[45px] px-6 py-2.5 bg-[#f14968] rounded-[100px] justify-center items-center gap-1 inline-flex">
                            <div className="text-center text-white text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">Aviação</div>
                        </div>


                        <div className="h-[45px] px-6 py-2.5 rounded-[100px] border-2 border-zinc-200 justify-center items-center gap-1 inline-flex">
                            <div className="text-center text-zinc-200 text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">Cotidiano</div>
                        </div>

                        <div className="h-[45px] px-6 py-2.5 rounded-[100px] border-2 border-zinc-200 justify-center items-center gap-1 inline-flex">
                            <div className="text-center text-zinc-200 text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">Lorem</div>
                        </div>

                        <div className="h-[45px] px-6 py-2.5 rounded-[100px] border-2 border-zinc-200 justify-center items-center gap-1 inline-flex">
                            <div className="text-center text-zinc-200 text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">Cotidiano</div>
                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </section>
    );
}

export default ModulesTopics;