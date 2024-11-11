import Image from "next/image";

import EditIcon from '@/Midias/Icons/edit.svg'
import CupIcon from '@/Midias/Icons/cup.svg'

import {Link} from '@/i18n/routing'

function EditBtns() {
    return (


        <section className="w-full flex flex-row justify-between gap-3 my-8">

            <Link href='/EditProfile' className='Btn_Primary_edit w- flex justify-center items-center gap-1 h-11'>
                <Image src={EditIcon} alt='Edit icone' />
                Editar perfil
            </Link>

            <Link href='/Ranking' className='Btn_Secundary flex justify-center items-center gap-1 h-11'>
                <Image src={CupIcon} alt='Cup Icone' />
                Ver ranking
            </Link>
        </section>
    );
}

export default EditBtns;