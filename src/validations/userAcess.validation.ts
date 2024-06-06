import { CgPassword } from "react-icons/cg";
import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup.string().email().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const RegisterValidation = yup.object().shape({
  name: yup.string().required("Nome é Obrigatório"),
  email: yup
    .string()
    .email()
    .matches(/^[\w.-]+@[\w-]+\.\w+$/, "Formato de email invalido")
    .required("Email é obrigatorio"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      " A Senha deve ter pelo menos 8 caracteres,incluindo uma letra  maiúscula, uma letra minúscula e um número"
    )
    .required("Senha é obrigatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirmação de senha é obrigatória"),
});
