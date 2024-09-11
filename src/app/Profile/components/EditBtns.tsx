import Image from "next/image";

import EditIcon from '@/Midias/Icons/edit.svg'
import CupIcon from '@/Midias/Icons/cup.svg'

function EditBtns() {
    return (


        <section className="w-full flex flex-row justify-between gap-3 my-8">

            <button className='Btn_Primary_edit w- flex justify-center items-center gap-1 h-11'>
                <Image src={EditIcon} alt='Edit icone' />
                Editar perfil
            </button>

            <button className='Btn_Secundary flex justify-center items-center gap-1 h-11'>
                <Image src={CupIcon} alt='Cup Icone' />
                Ver ranking
            </button>
        </section>
    );
}

export default EditBtns;