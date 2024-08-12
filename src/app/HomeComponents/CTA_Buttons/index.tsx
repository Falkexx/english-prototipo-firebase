import Link from "next/link";

function index() {
    return (
        <section className="flex flex-col gap-5">

            <article className="w-full m-auto">
                <Link href={"/Cadastro"}>
                    <button className="Btn_Primary">Comece agora</button>
                </Link>
            </article>


            <article className="w-full m-auto">
                <Link href={"/Login"}>
                    <button className="Btn_Secundary">Acessar minha conta</button>
                </Link>
            </article>

        </section>
    );
}

export default index;