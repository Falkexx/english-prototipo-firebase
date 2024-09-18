import { useState } from "react";

export type ValidationErrors = {
  nameError: string;
  emailError: string;
  passwordError: string;
};

export default function useValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const validateName = (name: string): boolean => {
    if (!name) {
      setErrors((prev) => ({ ...prev, nameError: "Por favor, insira seu nome." }));
      return false;
    }
    setErrors((prev) => ({ ...prev, nameError: "" }));
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, emailError: "Por favor, insira seu e-mail." }));
      return false;
    }
    if (!emailPattern.test(email)) {
      setErrors((prev) => ({ ...prev, emailError: "E-mail inválido." }));
      return false;
    }
    setErrors((prev) => ({ ...prev, emailError: "" }));
    return true;
  };

  const validatePassword = (password: string, confirmPassword: string): boolean => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{6,}$/;

    if (!password) {
      setErrors((prev) => ({
        ...prev,
        passwordError: "Preencha a senha por favor!",
      }));
      return false;
    }

    if (!passwordPattern.test(password)) {
      setErrors((prev) => ({
        ...prev,
        passwordError: "A senha deve conter 6 caracteres, uma letra maiúscula, um caractere especial (@, #, $, etc.), um número",
      }));
      return false;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        passwordError: "A confirmação de senha não confere!",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, passwordError: "" }));
    return true;
  };

  return { errors, validateName, validateEmail, validatePassword };
}
