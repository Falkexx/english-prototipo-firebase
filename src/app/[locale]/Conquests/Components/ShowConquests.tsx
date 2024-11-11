import { ConquestsUser } from "@/app/Types/Types";

function ShowConquests() {

    const Conquests: ConquestsUser = {

        data: [{
            conquest: 'Falando nas alturas',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Aprendendo a servir',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Show na entrevista!',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Show na entrevista!',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Show na entrevista!',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Show na entrevista!',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        {
            conquest: 'Show na entrevista!',
            description: 'Parabéns por ter completado o móduloo "falando nas alturas" ',
            imgUrl: ''
        },

        ]
    }
    return (
        <section className="mt-6 flex flex-col gap-12">

            {Conquests.data.map((e) => {

                return (


                    <div className="w-[358px] h-[90px] justify-start items-center gap-2.5 inline-flex">
                        <div className="w-24 h-[90px] p-4 bg-zinc-200 rounded-3xl border border-zinc-200"></div>
                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-[66px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch text-zinc-700 text-lg font-extrabold font-['Nunito'] leading-7">{e.conquest}</div>
                                <div className="self-stretch text-zinc-500 text-xs font-bold font-['Nunito'] leading-none">{e.description}</div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </section>
    );
}

export default ShowConquests;