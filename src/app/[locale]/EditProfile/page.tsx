'use client'

import Image from 'next/image'
import React from 'react'
import FotoPerfilEditar from '@/Midias/FotoUsuarioEditar.png'
import { optionsPaises } from '@/constants/constants'
import axios from 'axios'
import BottomHeader from '../Home/Components/BottomHeader'


const page = () => {
    
    //Forma muito boa de puxar os forms de um Formulário
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formObject: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());
        console.log(formObject);

        
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            
            <Image src={FotoPerfilEditar} alt='Foto de perfil' className='mt-[24.2px]' />
            <form className='mt-[40px] flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="name" className='labelDef'>Nome</label>
                <input type="text" name='name' placeholder="Insira seu nome" className='inputDef' />

                <label htmlFor="cellphone" className='labelDef mt-[32px]'>Número de telefone</label>
                <input type="tel" name="cellphone" placeholder="Número de telefone" className='inputDef' />

                <label htmlFor="email" className='labelDef mt-[32px]'>Email</label>
                <input type="email" name="email" placeholder="Insira seu e-mail" className='inputDef' />

                <label htmlFor="dateOfBirth" className='labelDef mt-[32px]'>Data de Nascimento</label>
                <input type="date" name="dateOfBirth" placeholder="Data de nascimento" className='inputDef' />

                <label htmlFor="country" className='labelDef mt-[32px]'>País</label>
                <select name="country" id="country" className='inputDef' defaultValue={"BR"}>
                    {optionsPaises.map((pais) => (
                        <option key={pais.value} value={pais.value}>{pais.label}</option>
                    ))}
                </select>

                <button type="submit" className='mt-[47px] rounded-[100px] bg-[#F14968]
            text-white py-[18px] px-[16px] shadow-buttonSubmit text-[16px] font-extrabold leading-[140%]
            text-center tracking-[0.2px]'>Salvar</button>
            </form>

            <BottomHeader ActualPath='Profile'/>

        </div>
    )
}

export default page