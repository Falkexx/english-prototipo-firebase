import { RankingUsers } from '@/Types/Types';
import Image from 'next/image';

import GoldMedal from '@/Midias/Icons/GoldMedal.svg'
import SilverMedal from '@/Midias/Icons/SilverMedal.svg'
import BronzeMedal from '@/Midias/Icons/BronzeMedal.svg'

function Index() {
    const rankingUsers: RankingUsers = {
        data: [
            {
                position: '1',
                medal: 'https://i.ibb.co/R4yq2CN/Gold-Medal.png', // Você pode colocar a URL de uma medalha ou deixar uma string vazia
                imgUrl: 'https://i.ibb.co/XS71mg5/Ellipse-6.jpg',
                userName: 'Ashlynn Dias',
                userEXP: '53 EXP'
            },

            {
                position: '2',
                medal: 'https://i.ibb.co/fCvf6f4/Silver-Medal.png', // Você pode colocar a URL de uma medalha ou deixar uma string vazia
                imgUrl: 'https://i.ibb.co/XS71mg5/Ellipse-6.jpg',
                userName: 'Lucas Naruto',
                userEXP: '45 EXP'
            },

            {
                position: '3',
                medal: 'https://i.ibb.co/PwRvp5R/Bronze-Medal.png', // Você pode colocar a URL de uma medalha ou deixar uma string vazia
                imgUrl: 'https://i.ibb.co/XS71mg5/Ellipse-6.jpg',
                userName: 'Paityn Stanton',
                userEXP: '63 EXP'
            },

            {
                position: '4',
                medal: false,
                imgUrl: 'https://i.ibb.co/XS71mg5/Ellipse-6.jpg',
                userName: 'Miracle Vaccaro',
                userEXP: '40 EXP'
            },
        ]
    };

    return (
        <section className='w-full flex flex-col gap-8'>
            {rankingUsers.data.map((e, index) => (
                <section key={index} className='w-full flex flex-row items-center gap-4 py-2'>

                    <section className=' w-10 h-8 flex items-center justify-center '>
                        {typeof e.medal === 'string' && e.medal ? (
                            <img src={e.medal} alt='Medalha' className='' />
                        ) : (
                            <div className='flex items-center justify-center '>
                                <h1>{e.position}</h1>
                            </div>
                        )}
                    </section>


                    <section className='w-full flex justify-between flex-row items-center '>
                        <div className='flex flex-row gap-4 items-center'>
                            <img src={e.imgUrl} />

                            <h1 className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-7">{e.userName}</h1>
                        </div>

                        <div>
                            <span className="text-right text-zinc-700 text-base font-semibold font-['Nunito'] leading-normal">
                                {e.userEXP}
                            </span>
                        </div>
                    </section>

                </section>
            ))}
        </section>
    );
}

export default Index;
