import LeftDuck from '@/Midias/LeftDuck.svg'
import Image from 'next/image';
function ShowStatistics() {
  return <section className='w-full flex flex-col justify-center'>

    <section>
      <h1 className="text-center text-[#f14968] text-2xl font-extrabold font-['Nunito'] leading-9">Lessons completed!</h1>

      <Image src={LeftDuck} alt='Patinho'/>
    </section>

    <article>

    </article>

  </section>;
}

export default ShowStatistics;
