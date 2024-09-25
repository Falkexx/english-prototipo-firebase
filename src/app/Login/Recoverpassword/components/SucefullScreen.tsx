import Image from "next/image";

function SucefullScreen({ avancar }: { avancar: () => void }) {
  return (
    <section className="h-[calc(100vh-10vh)] flex flex-col">
      <article className="h-1/2  flex flex-col justify-center items-center">
        <img src='https://images.creativefabrica.com/products/previews/2023/10/27/LH874No6w/2XLj7loRuN3Sa7nt65RxsyKSx7Y-mobile.jpg' alt='sucess' className="w-[136px] h-[136px] rounded-[68px]"/>
        <h1 className="text-center text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">Senha Alterada com Sucesso!</h1>
        <p className="text-center text-zinc-500 text-sm font-normal font-['Nunito'] leading-tight">Você já pode acessar a plataforma e continuar sua jornada de estudos!</p>
      </article>

      <div className="h-1/2  flex flex-col justify-end">
        <button type="submit" className="Btn_Primary" onClick={avancar}>
          Acessar minha conta
        </button>
      </div>
    </section>
  );
}

export default SucefullScreen;
