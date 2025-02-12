"use client";

//import { useState } from "react";
//import axios from "axios";
import { useQuery } from "react-query";
import {useRouter} from '@/i18n/routing';
//import {Link} from '@/i18n/routing';
import { useLocale } from 'next-intl';




function ShowChapters({ moduleId }: { moduleId: string }) {
  const router = useRouter(); // Inicializa o hook useRouter
  const locale = useLocale(); // Obtém o locale atual


  // Função para buscar os capítulos com base no moduleId
  const fetchChaptersByModule = async () => {

    /*
    
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chapter/all?take=10&skip=0&moduleId=${moduleId}`
    );
    return data;
    
    */


    //MOCKUP ABAIXO ====

    return [
      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },

      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },

      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },

      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },

      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },

      {
        id: "1",
        name: "In the plane",
        description: "pre-flight",
        difficulty: "easy",
        image_url: "https://i.ibb.co/d6kgqkD/Ellipse-153.png",
        exp_as_done: 10,
        create_at: "2024-11-22T17:35:00.000Z",
        updated_at: "2024-11-22T17:35:00.000Z"
      },
    ]


  };

  // Função de redirecionamento
  function RedirectToLessons(chapterId: string) {
    router.push(`/Lessons/${chapterId}`); // Redireciona para Lessons/id do capítulo
  }

  const { data: chaptersData = [], isLoading } = useQuery(
    ["chapters", moduleId],
    fetchChaptersByModule,
    {
      enabled: !!moduleId, // Só faz a requisição se moduleId for válido
    }
  );

  return (
    <section className="mt-9 flex flex-row  justify-center lg:w-[100%]">
      {isLoading ? (
        <div>Loading chapters...</div>
      ) : chaptersData.length > 0 ? (
        <div className="relative flex flex-row w-full ">
          {/* Linha da timeline */}
          <div className="absolute left-[22px] top-10 bottom-0 w-[4px] bg-[#f14968]"></div>

          <div className="flex flex-col items-center w-full space-y-6 ">
            {chaptersData.map((chapter: any, index: number) => (
              <div key={index} className="flex flex-row w-full  items-center space-x-4">
                {/* Imagem conectada pela linha */}
                <div className="relative flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full border-4 border-[#f14968] z-10"
                    src={chapter.image_url}
                  />
                </div>

                {/* Conteúdo dos capítulos */}
                <div
                  className="w-[269px] lg:w-full h-16 px-6 py-2 bg-white rounded-2xl border-2 border-[#f14968] justify-between items-center inline-flex cursor-pointer"
                  onClick={() => RedirectToLessons(chapter.id)} // Passa o ID do capítulo na função
                >
                  <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
                      {chapter.name}
                    </div>
                    <div className="text-zinc-600 text-xs font-medium font-['Nunito'] leading-none">
                      {chapter.description}
                    </div>
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No chapters found for this module.</div>
      )}
    </section>
  );
}

export default ShowChapters;
