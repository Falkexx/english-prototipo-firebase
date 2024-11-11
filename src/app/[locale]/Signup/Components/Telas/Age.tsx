"use-client"

import { useState } from "react";
import Image from "next/image";
import RightSmallDuck from '@/Midias/RightSmallDuck.svg';

function Age() {

    const [SelectedReason, setSelectedReason] = useState(null);

    function HandleClick(index: any) {
        setSelectedReason(index);
    };

    const Options = [
        {
            Title: "Menor de 18 anos",
        },
        {
            Title: "18 - 24 anos",
        },
        {
            Title: "25 - 34 anos",
        },
        {
            Title: "35 - 44 anos",
        },
        {
            Title: "45 - 54 anos",
        },
        {
            Title: "Maior de 55 anos",
        }
    ];

    return (
        <div className="h-full mt-6">


            <section className="flex flex-col gap-8 h-full">

                <section className="flex flex-row items-center">

                    <Image src={RightSmallDuck} alt="Patinho" />

                    <article className="bg-zinc-50 p-5 border-2 border-zinc-100 rounded-3xl">
                        <span className="text-lg font-extrabold text-zinc-800">Qual é a sua idade?</span>
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


                            className="flex items-center gap-6 border-2 px-5 py-5 rounded-3xl border-zinc-100"
                            key={index}>

                            <h1 className="text-lg font-extrabold">{option.Title}</h1>
                        </section>
                    ))}
                    
                </section>


            </section>
        </div>
    );
}

export default Age;
