"use client";

// Importando os hooks e bibliotecas necessárias
import { useQuery } from "react-query";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import GetUserDatas from "@/services/GetUserDatas"; // Função para pegar dados do usuário
import nookies from "nookies"; // Importando nookies
import { UserDTO } from "@/services/GetUserDatas";
import { Chapters } from "./Mocked_datas/Chapters";

function ShowChapters({ moduleId }: { moduleId: string }) {
  const router = useRouter(); // Inicializa o hook useRouter
  const locale = useLocale(); // Obtém o locale atual

  // Função de redirecionamento para as lições
  const RedirectToLessons = (chapterId: string) => {
    // Salvar o moduleId nos cookies
    nookies.set(null, "moduleId", moduleId, {
      maxAge: 30 * 24 * 60 * 60, // O cookie dura 30 dias
      path: "/", // O cookie é acessível em todo o domínio
    });

    // Redirecionar para o capítulo
    router.push(`/Lessons/${chapterId}`);
  };

  // Query para obter os capítulos

  const chaptersData = Chapters

  // Query para obter os dados do usuário
  const token = "user-auth-token"; // Exemplo de token, substitua conforme sua lógica de autenticação
  const { data: userData, isLoading: isLoadingUser } = useQuery(
    ["userData"],
    () => GetUserDatas(token),
    { enabled: !!token }
  );

  // Verificar se o capítulo foi feito pelo usuário
  const isChapterCompleted = (chapterId: string) => {
    // Verificar se algum objeto em chapters_done tem o slug igual ao chapterId
    return userData?.chapters_done?.some(
      (chapter: { slug: string }) => chapter.slug == chapterId
    );
  };

  const isChapterPremium = (chapter_premium_data: boolean) => {
    return chapter_premium_data;
  };

  return (
    <section className="my-6 flex flex-row justify-center lg:w-[100%] scrollbar-hide">
      {chaptersData.length > 0 ? (
        <div className="relative flex flex-row w-full">
          {/* Linha da timeline */}
          <div className="absolute left-[22px] top-10 bottom-0 w-[4px] bg-[#f14968]"></div>

          <div className="flex flex-col items-center w-full space-y-6">
            {chaptersData
              .filter((chapter) => chapter.module_id === moduleId) // Filtrando pelos capítulos que possuem o mesmo module_id
              .map((chapter: any) => (
                <div
                  key={chapter.id}
                  className="flex flex-row w-full items-center space-x-4"
                >
                  {/* Imagem conectada pela linha */}
                  <div className="relative flex-shrink-0">
                    <img
                      className={`w-12 h-12 rounded-full ${
                        isChapterCompleted(chapter.id)
                          ? "border-4 border-[#f14968] z-10"
                          : ""
                      }`}
                      src={chapter.image_url}
                      alt={chapter.name}
                    />
                  </div>

                  {/* Conteúdo dos capítulos */}
                  <div
                    className={`w-[269px] lg:w-full h-16 px-6 py-2 bg-white rounded-2xl border-2 ${
                      isChapterCompleted(chapter.id) ||
                      isChapterPremium(chapter.is_Premium)
                        ? "border-gray-400 cursor-not-allowed"
                        : "border-[#f14968] cursor-pointer"
                    }`}
                    onClick={() => {
                      if (!isChapterCompleted(chapter.id) && !isChapterPremium(chapter.is_Premium)) {
                        RedirectToLessons(chapter.id);
                      }
                    }}
                  >
                    <div className="gap-1 flex flex-row justify-between items-center">
                      <div>
                        <div className="self-stretch text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
                          {chapter.name}
                        </div>
                        <div className="text-zinc-600 text-xs font-medium font-['Nunito'] leading-none">
                          {chapter.description}
                        </div>
                      </div>

                      {/* Se o capítulo foi feito, mostrar mensagem */}
                      {isChapterCompleted(chapter.id) && (
                        <h1 className="text-sm text-green-500">
                          Capítulo já feito!
                        </h1>
                      )}

                      {isChapterPremium(chapter.is_Premium) && (
                        <h1 className="text-sm text-green-500">
                          Obetnha o Premium para acessar
                        </h1>
                      )}
                    </div>
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
