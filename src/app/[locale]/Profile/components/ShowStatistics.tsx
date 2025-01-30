import Image from "next/image";
import Stats from '@/Midias/Icons/image 6.png'
import RaioIcon from '@/Midias/Icons/image 12.png'
import MedalIcon from '@/Midias/Icons/image 16.png'
import ClockIcon from '@/Midias/Icons/image 14.png'
import EditIcon from '@/Midias/Icons/image 15.png'
import StarIcon from '@/Midias/Icons/image 17.png'
import FireIcon from '@/Midias/Icons/image 13.png'


function ShwoStatistics() {
    return (

        <section className="w-full mb-4">

            <article className="w-full text-left flex flex-row gap-2 items-center">
                <h1 className="text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">Minhas estatísticas</h1>
                <Image src={Stats} alt="Statis" className="inline" />
            </article>

            <section className="grid grid-cols-2 gap-2">

                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={RaioIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>


                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={MedalIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>


                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={ClockIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>


                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={EditIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>

                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={StarIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>

                <article className="h-[81px] p-4 rounded-3xl border border-zinc-200 flex-col justify-center items-start gap-[5px] inline-flex ">

                    <div className="w-full flex flex-row items-center gap-1">
                        <Image src={FireIcon} alt="Statis" className="inline" />
                        <span className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">45</span>
                    </div>

                    <div className="text-justify text-zinc-500 text-xs font-semibold font-['Nunito'] leading-none">EXP Total Adquirida</div>

                </article>


            </section>

        </section>
    );
}

export default ShwoStatistics;