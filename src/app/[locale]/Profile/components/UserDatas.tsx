import { Userdatas } from "@/app/Types/Types";

import PerfilImg from '../../../Midias/FotoUsuarioEditar.png'

import Image from "next/image";

function UserDatas() {

    const User: Userdatas = {

        data: [{ imgUrl: 'https://i.ibb.co/vmXkZ5W/img2ca.png', userName: 'Lucas Naruto', memberSince: 'Membro desde 20 de Julho de 2024' }]
    }
    return (

        <section className="w-full mt-8 ">

            {User.data.map((e) => {

                return (

                    <section className="w-full flex flex-col text-center justify-center items-center gap-4">
                        <img className="w-24 h-24 rounded-[110.40px]" src={e.imgUrl}  alt='perfil Img' />

                        <article className="flex flex-col gap-4">
                            <h1 className="text-zinc-800 text-2xl font-bold font-['Nunito'] leading-9">{e.userName}</h1>
                            <p className="text-zinc-500 text-sm font-medium font-['Nunito'] leading-tight">{e.memberSince}</p>
                        </article>
                    </section>
                )
            })}
        </section>
    );
}

export default UserDatas;