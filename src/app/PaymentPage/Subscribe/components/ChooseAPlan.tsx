function ChooseAPlan() {

    const Plans = [
        {
            duration: "Mensal",
            description: "Mais de 10% de desconto",
            price: "$10.00"
        },
        {
            duration: "3 Meses",
            description: "Mais de 20% de desconto",
            price: "$26.00"
        },
        {
            duration: "6 Meses",
            description: "Mais de 30% de desconto",
            price: "$46.00"
        },
        {
            duration: "12 Meses",
            description: "Mais de 40% de desconto",
            price: "$86.00"
        },
    ];

    return (
        <section className="w-full flex flex-col gap-5 mt-5">
            <article className="w-[100%] text-center text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">
                <h1>Escolha seu Plano de Assinatura</h1>
            </article>

            <section className='flex flex-col gap-5'>
                {Plans.map((e) => {

                    const formattedDescription = e.description.replace(/(\d+%)/g, `<span style="color: #f14968; font-weight: 800;">$1</span>`);

                    return (
                        <article key={e.price} className="w-full py-5 px-6 rounded-3xl border-2 border-zinc-100 flex flex-row justify-between">
                            <div>
                                <h1 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">{e.duration}</h1>
                                {/* Usando dangerouslySetInnerHTML para inserir o HTML */}
                                <span className="text-zinc-400 text-sm font-medium font-['Nunito'] leading-tight" dangerouslySetInnerHTML={{ __html: formattedDescription }}></span>
                            </div>
                            <h2 className="text-[#f14968] text-lg font-extrabold font-['Nunito'] leading-7">{e.price}</h2>
                        </article>
                    );
                })}
            </section>
        </section>
    );
}

export default ChooseAPlan;
