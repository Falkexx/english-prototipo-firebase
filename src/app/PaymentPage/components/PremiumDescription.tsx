import CheckedIcon from '@/Midias/Icons/Checked.svg'
import Image from 'next/image';

function PremiumDescription() {
    return (
        <section className='w-full flex h-full flex-col gap-10'>
            <article>
                <div className="w-full text-center text-[20px] font-extrabold">
                    <span style={{ color: '#4a4a4a', fontSize: '1.25rem', fontWeight: '800', fontFamily: "'Nunito'", lineHeight: '2.25rem' }}>Seja </span>
                    <span style={{ color: '#f14968', fontSize: '1.25rem', fontWeight: '800', fontFamily: "'Nunito'", lineHeight: '2.25rem' }}>Premium</span>
                    <span style={{ color: '#4a4a4a', fontSize: '1.25rem', fontWeight: '800', fontFamily: "'Nunito'", lineHeight: '2.25rem' }}> e aproveite todo o potencial da plataforma! 🔥</span>
                </div>
            </article>


            <article className='w-full flex h-[65%] justify-center'>
                <table className='w-[90%]'>
                    <thead className='mb-6'>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className='font-bold uppercase text-sm'>Free</th>
                            <th scope="col" className='font-bold uppercase text-sm'>Premium</th>
                        </tr>
                    </thead>
                    <tbody className='' >
                        <tr className='h-8 '>
                            <td>Atividades de Ensino</td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Pular Tempo de Espera</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Lembrete de Estudo</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Boost de EXP</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Acesso Grupo de Alunos</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Leaderboard</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Ipsum</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                        <tr className='h-8 '>
                            <td>Dolor Sit Amet</td>
                            <td></td>
                            <td className="text-center"><Image className='m-auto' src={CheckedIcon} alt='icone de checagem' /></td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>
    );
}

export default PremiumDescription;
