"use client";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Dividier";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { StyledLink } from "@/components/Link";
import { iSingin } from "@/types/userAcessValidation";
import { LoginValidation } from "@/validations/userAcess.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useForm } from "react-hook-form";


export default function Login() {
  const { register, handleSubmit } = useForm<iSingin>({
    resolver: yupResolver(LoginValidation),
  });

  const singIn = (values: iSingin) => console.log(values);


  return (
    <Form onSubmit={() => router.push("/")}>
      <h2>olá, bem vindos de volta!</h2>
      <Input variant="float" id='email' type="text" placeholder="Digite Seu Email" {...register("email")} />
      <Input variant="float" id='password' type="password" placeholder="Digite Sua Senha" {...register("password")} 
      />
      <Button type="submit">Entrar</Button>
      <Divider />
      <small>
        Ainda não tem uma conta?
        <StyledLink href="/register">Cadastre-se</StyledLink>
      </small>
    </Form>
  );
}
