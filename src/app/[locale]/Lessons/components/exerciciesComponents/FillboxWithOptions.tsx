import React, { useState, useEffect } from "react";

function FillboxWithOptions({
  title,
  description,
  questions,
  options,
  correctAnswer,
  onCheckAnswers,
}: {
  title: string;
  description: string;
  questions: string[];
  options: { img: string; value: string }[];
  correctAnswer: string[];
  onCheckAnswers: (isCorrect: boolean) => void;
}) {
  const [filledAnswers, setFilledAnswers] = useState<(null | { img: string; value: string })[]>(
    Array(questions.length).fill(null) // Estado para respostas de cada pergunta
  );
  const [availableOptions, setAvailableOptions] = useState(options); // Opções disponíveis no acordeon

  // Resetar estados ao alterar perguntas ou opções
  useEffect(() => {
    setFilledAnswers(Array(questions.length).fill(null));
    setAvailableOptions(options);
  }, [questions, options]);

  // Preencher o quadrado ao clicar no ícone do acordeon
  const handleSelectOption = (questionIndex: number, option: { img: string; value: string }) => {
    const updatedAnswers = [...filledAnswers];
    const updatedOptions = availableOptions.filter((opt) => opt.value !== option.value); // Remove a opção do acordeon

    // Preenche a resposta para a pergunta correspondente
    updatedAnswers[questionIndex] = option; // Salva o objeto { img, value }
    setFilledAnswers(updatedAnswers); // Atualiza o estado com o objeto completo
    setAvailableOptions(updatedOptions); // Atualiza as opções disponíveis
  };

  // Remover o preenchimento do quadrado e devolver o ícone ao acordeon
  const handleRemoveAnswer = (questionIndex: number) => {
    const updatedAnswers = [...filledAnswers];
    const removedOption = updatedAnswers[questionIndex]; // Valor removido

    if (removedOption) {
      // Retorna o ícone ao acordeon
      const updatedOptions = [
        ...availableOptions,
        options.find((opt) => opt.value === removedOption.value)!,
      ];
      setAvailableOptions(updatedOptions);
    }

    // Esvazia o quadrado
    updatedAnswers[questionIndex] = null;
    setFilledAnswers(updatedAnswers);
  };

  // Verificar respostas
  const checkAnswers = () => {
    // Compara os valores preenchidos com os valores corretos
    const isCorrect =
      JSON.stringify(filledAnswers.map((answer) => answer?.value)) === JSON.stringify(correctAnswer);
  
    // Chama o callback passando true ou false
    onCheckAnswers(isCorrect);
  };
  

  return (
    <section className="my-4">
      {/* Título e descrição */}
      <article className="flex flex-col gap-4">
        <h1 className="w-[358px] text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
          {title}
        </h1>
        <h2 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">{description}</h2>
      </article>

      <div className="w-full h-[0px] border border-zinc-200 my-4"></div>

      {/* Perguntas */}
      {questions.map((question, index) => (
        <section key={index} className="w-full flex flex-col items-start justify-between my-4">
          {/* Cabeçalho da pergunta */}
          <div className="w-full flex items-center justify-between">
            <h1 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">{question}</h1>
            {/* Quadrado preenchido ou vazio */}
            <div
              onClick={() => filledAnswers[index] && handleRemoveAnswer(index)} // Remove ao clicar no quadrado
              className={`w-12 h-12 flex items-center justify-center border rounded-lg cursor-pointer ${
                filledAnswers[index] ? "bg-blue-100" : "bg-zinc-100"
              }`}
            >
              {filledAnswers[index] ? (
                <img
                  src={filledAnswers[index]?.img} // Renderiza o ícone no quadrado
                  alt={filledAnswers[index]?.value}
                  className="w-6 h-6"
                />
              ) : (
                <span className="text-zinc-400">+</span>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Acordeon de opções */}
      <div className="flex flex-wrap gap-4 my-6 justify-center">
        {availableOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              // Preencher a primeira pergunta vazia
              const emptyIndex = filledAnswers.findIndex((answer) => answer === null);
              if (emptyIndex !== -1) handleSelectOption(emptyIndex, option);
            }}
            className="flex items-center gap-2 p-2 border rounded bg-white hover:bg-gray-100"
          >
            <img src={option.img} alt={option.value} className="w-6 h-6" />

            <span>{option.value}</span>
          </button>
        ))}
      </div>

      {/* Botão de checagem */}
      <button
        onClick={checkAnswers}
        className="w-full h-[58px] px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex"
      >
        <span className="grow shrink basis-0 text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Check Answers
        </span>
      </button>
    </section>
  );
}

export default FillboxWithOptions;
