import { useState } from "react";
import ShowGabarito from "../../ShowGabarito";

interface SeeGabaritoProps {
  correct_answers: number[];
  wrong_answers: number[];
}

function SeeGabarito({ correct_answers, wrong_answers }: SeeGabaritoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="w-full h-[58px] px-8 py-[18px] bg-[#ffeeef] rounded-[100px] justify-center items-center gap-2.5 inline-flex"
        onClick={handleOpenModal}
      >
        <p className="text-center text-[#f14968] text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Ver Gabarito
        </p>
      </button>

      {isModalOpen && (
        <ShowGabarito
          correct_answers={correct_answers}
          wrong_answers={wrong_answers}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default SeeGabarito;
