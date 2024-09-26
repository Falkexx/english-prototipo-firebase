"use client";

import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function ShowChapters({ moduleId }: { moduleId: string }) {
  // Função para buscar os capítulos com base no moduleId
  const fetchChaptersByModule = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/chapter/all?take=10&skip=0&moduleId=${moduleId}`
    );
    return data;
  };

  const { data: chaptersData = [], isLoading } = useQuery(
    ["chapters", moduleId],
    fetchChaptersByModule,
    {
      enabled: !!moduleId, // Só faz a requisição se moduleId for válido
    }
  );

  return (
    <section className="mt-9">
      {isLoading ? (
        <div>Loading chapters...</div>
      ) : chaptersData.length > 0 ? (
        chaptersData.map((chapter: any) => (
          <div
            key={chapter.id}
            className="w-full h-16 bg-gray-300 rounded-md mb-2 p-4"
          >
            <h2 className="font-bold">{chapter.name}</h2>
            <p>{chapter.description}</p>
          </div>
        ))
      ) : (
        <div>No chapters found for this module.</div>
      )}
    </section>
  );
}

export default ShowChapters;
