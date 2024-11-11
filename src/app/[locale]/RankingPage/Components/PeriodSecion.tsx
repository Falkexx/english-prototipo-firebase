
function index() {
    const Periods = [
        { title: 'Semanal', value: 'Semanal' },
        { title: 'Mensal', value: 'Mensal' },
        { title: 'Total', value: 'Total' }
    ];

    return (
        <section className="w-full flex justify-between">
            {Periods.map((e) => {
                return (
                    <div className="h-[45px] px-6 py-2.5 bg-[#f14968] rounded-[100px] justify-center items-center gap-1 inline-flex my-6">
                        <div className="text-center text-white text-lg font-bold font-['Nunito'] leading-[25.20px] tracking-tight">{e.title}</div>
                    </div>
                );
            })}
        </section>
    );
}

export default index;
