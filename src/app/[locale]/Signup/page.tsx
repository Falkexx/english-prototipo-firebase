"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SIGNUP_STAGES } from "./utils/stages";
import { AuthContext } from "@/contexts/AuthContext";
import useValidation from "./hooks/useValidation";
import Container from "./Components/Container";
import BemVindo from "./Components/Telas/Welcome";
import HeaderCadastros from "./Components/Header";
import AvanceBtn from "./Components/AvanceBtn";
import EnglishLevel from "./Components/Telas/EnglishLevel";
import ReasonToStudy from "./Components/Telas/ReasonToStudy";
import Skills from "./Components/Telas/Skills";
import Difficulty from "./Components/Telas/Difficulty";
import Age from "./Components/Telas/Age";
import TimeToStudy from "./Components/Telas/TimeToStudy";
import SignUpConclusion from "./Components/Telas/SignUpConclusion";
import YourName from "./Components/Telas/YourName";
import YourEmail from "./Components/Telas/YourEmail";
import YourPsswrd from "./Components/Telas/YourPsswrd";
import Loading from "@/Components/UI/LoginLoading";
import AlternativesConclusion from "./Components/Telas/AlternativesConclusion";

export default function Index() {
  const [progressBar, setProgressBar] = useState(SIGNUP_STAGES.WELCOME);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { signUp } = useContext(AuthContext);

  const { errors, validateName, validateEmail, validatePassword } =
    useValidation();

  const stages = [
    { component: <BemVindo />, container: true },
    { component: <EnglishLevel />, container: false },
    { component: <ReasonToStudy />, container: false },
    { component: <Skills />, container: false },
    { component: <Difficulty />, container: false },
    { component: <Age />, container: false },
    { component: <TimeToStudy />, container: false },
    { component: <AlternativesConclusion />, container: true },
    { component: <YourName onNameChange={setName} />, container: true },
    {
      component: <YourEmail Nome={name} onEmailChange={setEmail} />,
      container: true,
    },
    {
      component: (
        <>
          <YourPsswrd
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
          />
          {errors.passwordError && (
            <p className="text-red-500">{errors.passwordError}</p>
          )}
        </>
      ),
      container: true,
    },
    { component: <Loading />, container: false },
    { component: <SignUpConclusion />, container: false },
  ];

  const handleValidation = () => {
    if (progressBar === SIGNUP_STAGES.NAME && !validateName(name)) return false;
    if (progressBar === SIGNUP_STAGES.EMAIL && !validateEmail(email))
      return false;
    if (
      progressBar === SIGNUP_STAGES.PASSWORD &&
      !validatePassword(password, confirmPassword)
    )
      return false;
    return true;
  };

  const handleNextStage = () => {
    if (!handleValidation()) return;

    setProgressBar((prev) => prev + 1);
  };

  const handleBack = () => {
    if (progressBar === SIGNUP_STAGES.WELCOME) {
      router.push("/");
    } else {
      setProgressBar((prev) => prev - 1);
    }
  };

  const handleSignUp = async () => {
    if (!name || !email || !password) return;

    setProgressBar(SIGNUP_STAGES.LOADING); // Exibe a tela de loading
    setLoading(true);

    try {
      await signUp({ name, email, password, country: "Brazil" });
      setProgressBar(SIGNUP_STAGES.SIGNUP_CONCLUSION); // Vai direto para a conclusão
    } catch (error) {
      console.error("Erro ao se cadastrar:", error);
      setProgressBar(SIGNUP_STAGES.PASSWORD); // Retorna para a tela de senha em caso de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="lg:min-h-screen lg:w-full flex flex-col justify-between">
          <main
            className={`${
              progressBar === SIGNUP_STAGES.SIGNUP_CONCLUSION
                ? "flex justify-center items-center h-screen lg:min-h-fit"
                : `p-4 ${
                    stages[progressBar].container
                      ? "h-[calc(100vh-15vh)] lg:min-h-fit"
                      : "min-h-screen lg:min-h-fit"
                  } flex flex-col justify-between gap-5 lg:w-3/4 lg:mx-auto lg:justify-normal `
            }`}
          >
            {progressBar !== SIGNUP_STAGES.SIGNUP_CONCLUSION && (
              <HeaderCadastros
                BackFunction={handleBack}
                ProgressBarStatus={progressBar}
              />
            )}

            <Container>{stages[progressBar].component}</Container>

            <div className="lg:hidden">
              {progressBar !== SIGNUP_STAGES.SIGNUP_CONCLUSION && (
                <AvanceBtn
                  AvanceFunction={
                    progressBar === SIGNUP_STAGES.PASSWORD
                      ? handleSignUp
                      : handleNextStage
                  }
                  ProgressStatus={progressBar}
                />
              )}
            </div>
          </main>

          <div className="hidden lg:flex w-full border h-28 border-zinc-200 items-center justify-center">
            <div className="w-3/4 flex flex-row justify-end">
              <div className="w-1/4">
                {progressBar !== SIGNUP_STAGES.SIGNUP_CONCLUSION && (
                  <AvanceBtn
                    AvanceFunction={
                      progressBar === SIGNUP_STAGES.PASSWORD
                        ? handleSignUp
                        : handleNextStage
                    }
                    ProgressStatus={progressBar}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
