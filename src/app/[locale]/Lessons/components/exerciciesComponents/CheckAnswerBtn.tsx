'use'
import CorrectAnswer from "./CorrectAnswer";

function CheckAnswerBtn() {
  return (
    <button className="w-[100%] h-[58px] px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
      <div className="grow shrink basis-0 text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
        Check Answer
      </div>
    </button>
  );
}

export default CheckAnswerBtn;
