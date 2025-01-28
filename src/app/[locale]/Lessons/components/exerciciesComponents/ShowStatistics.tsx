import { Link } from '@/i18n/routing';
import LeftDuck from '@/Midias/LeftDuck.svg'
import Image from 'next/image';
function ShowStatistics() {
  return <section className='w-full flex flex-col justify-center gap-4 h-screen items-center'>

    <section className='flex flex-col gap-3'>
      <h1 className="text-center text-[#f14968] text-2xl font-extrabold font-['Nunito'] leading-9">Lessons completed!</h1>

      <Image src={LeftDuck} alt='Patinho'/>
    </section>

    <article className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose mb-4 w-full text-center">
      <Link href='/Home' >Ir para tela de Home</Link>
    </article>

  </section>;
}

export default ShowStatistics;
