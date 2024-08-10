function YourName() {
    return (<>

        <section className="flex flex-col gap-8 mt-4">
            <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">Primeiro, como devemos te chamar?</h1>

            <form className="flex flex-col gap-2" >
                <label className="labelDef">Seu nome</label>
                <input type="text" className="inputDef"/>
            </form>
        </section>
    </>);
}

export default YourName;