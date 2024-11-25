import { Link } from '@/i18n/routing';
import CloseIcon from '@/Midias/Icons/x.svg'
import Image from 'next/image';

function IntroductionHeader() {
  return ( 

    <Link href='/Home' >
      <Image src={CloseIcon} alt='Icone de fechar' />
    </Link>
   );
}

export default IntroductionHeader;