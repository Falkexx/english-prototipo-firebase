import { useForm } from "react-hook-form";
import Mail from "@/Midias/mail.png";
import Image from "next/image";
import GenerateToken from "../services/GenerateToken";

// Definindo o tipo dos dados do formulário
type FormData = {
  email: string;
};


function EmailContainer({ avancar, GetEmail }: { avancar: () => void, GetEmail:any }) {

  const { register, handleSubmit } = useForm<FormData>();

  async function handleEmail(data: { email: string }) {
    GetEmail(data.email)
    GenerateToken(data.email)
    avancar();
  }

  return (
    <section className="h-[calc(100vh-10vh)] flex flex-col gap-8">

      <article className="w-full">
        <h1 className=" text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
          Esqueceu sua senha?
        </h1>

        <p className="text-zinc-500 text-sm font-normal font-['Nunito'] leading-tight">
          Nada de pânico! Estamos aqui para ajudar. Preencha abaixo o seu e-mail
          cadastrado que será enviado um código (OTP) para você alterar sua
          senha.
        </p>
      </article>

      <form
        className="h-3/4 flex flex-col justify-between"
        method="post"
        onSubmit={handleSubmit(handleEmail)}
      >
        <section className="flex flex-col gap-2 ">

          <label className="labelDef" htmlFor="Email">
            Seu Email
          </label>

          <div className="relative">

            <div className="absolute inset-y-0 left-0 flex items-center">
              <Image src={Mail} alt="Mail Icon" width={20} height={20} />
            </div>

            <input
              {...register("email")}
              type="text"
              name="email"
              className="inputDef pl-7 w-full"
              placeholder="Digite seu Email..."
              required
              autoComplete="current-email"
            />
          </div>

        </section>


        <button type="submit" className="Btn_Primary">avancar</button>

      </form>
    </section>
  );
}

export default EmailContainer;
