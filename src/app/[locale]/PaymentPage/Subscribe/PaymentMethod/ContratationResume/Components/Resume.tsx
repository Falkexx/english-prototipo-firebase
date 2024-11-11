function Resume() {
    return (

        <section>

            <h1 className="text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">Resumo da Contratação</h1>

            <div className="w-full h-52 p-6 bg-neutral-50 rounded-3xl border-2 border-zinc-100 flex-col justify-center items-start gap-4 inline-flex">

                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Assinatura Premium</div>
                    <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">3 Meses</div>
                </div>

                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-jusNametify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Preço</div>
                    <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">$30.00</div>
                </div>

                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Desconto</div>
                    <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">$4.00</div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Pagamento Total</div>
                    <div className="text-justify text-[#f14968] text-base font-bold font-['Nunito'] leading-normal">$26.00</div>
                </div>
            </div>

            <div className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">Método de Pagamento</div>

            <div className="w-full h-24 px-6 py-5 bg-white rounded-3xl border-2 border-zinc-100 justify-start items-center gap-4 inline-flex">
                <div className="w-14 h-14 justify-center items-center flex">
                    <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                </div>
                <div className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-[28.80px]">•••• •••• •••• 4679</div>
                <div className="grow shrink basis-0 text-right text-[#f14968] text-sm font-bold font-['Nunito'] leading-tight">Alterar</div>
            </div>

        </section>
    );
}

export default Resume;