"use client";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Dividier";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { StyledLink } from "@/components/Link";
import { useAuth } from "@/context/AuthContext";
import { iSingin } from "@/types/userAccessValidatons";
import { LoginValidation } from "@/validations/userAccess.validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Login() {
  const { singIn } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<iSingin>({
    resolver: yupResolver(LoginValidation),
  });

  

  return (
    <Form onSubmit={handleSubmit(singIn)}>
      <h2>Olá, bem vindos de volta!</h2>
      <Input
        variant="float"
        id="email"
        type="text"
        placeholder="Digite seu email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        variant="float"
        id="password"
        type="password"
        placeholder="Digite sua senha"
        {...register("senha")}
        error={errors.senha?.message}
      />
      <Button type="submit">Entrar</Button>
      <Divider />
      <small>
        Ainda não tem uma conta?{" "}
        <StyledLink href="register">Cadastre-se</StyledLink>
      </small>
    </Form>
  );
}
