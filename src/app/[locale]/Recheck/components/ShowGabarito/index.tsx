interface ShowGabaritoProps {
  correct_answers: number[];
  wrong_answers: number[];
  onClose: () => void;
}

function ShowGabarito({ correct_answers, wrong_answers, onClose }: ShowGabaritoProps) {
  // Encontrar o número máximo de questão (última questão)
  const maxQuestion = Math.max(...[...correct_answers, ...wrong_answers]);

  // Criar um array de bolinhas coloridas
  const getBalloonClass = (index: number) => {
    if (correct_answers.includes(index)) {
      return "bg-green-50 border border-green-500"; // Bolinha verde para as respostas corretas
    } else if (wrong_answers.includes(index)) {
      return "bg-orange-50 border border-orange-700"; // Bolinha vermelha para as respostas erradas
    } else {
      return "bg-white"; // Bolinha branca caso não tenha sido marcada
    }
  };

  // Definir a cor do texto de acordo com a bolinha
  const getTextClass = (index: number) => {
    if (correct_answers.includes(index)) {
      return "text-green-600"; // Texto verde para as respostas corretas
    } else if (wrong_answers.includes(index)) {
      return "text-orange-600"; // Texto laranja para as respostas erradas
    } else {
      return "text-gray-600"; // Texto cinza para bolinhas não marcadas
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 sm:w-1/2 h-4/5 rounded-lg p-6 overflow-y-auto relative">
        {/* Botão para fechar o modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
        >
          ×
        </button>

        <section className="flex flex-col items-center justify-center mt-8">
          <h2 className="text-center text-[#f14968] text-2xl font-extrabold font-['Nunito'] leading-9">Gabarito:</h2>

          {/* Exibindo as bolinhas com os números dentro */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {Array.from({ length: maxQuestion }, (_, index) => {
              const questionNumber = index + 1; // O número da questão é 1-based (1, 2, 3, ...)
              return (
                <div
                  key={index}
                  className={`w-11 h-11 flex justify-center items-center rounded-full ${getBalloonClass(questionNumber)}`}
                >
                  <span className={`text-center text-lg font-bold font-['Nunito'] leading-7 ${getTextClass(questionNumber)}`}>
                    {questionNumber}
                  </span>
                </div>
              );
            })}
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default ShowGabarito;
