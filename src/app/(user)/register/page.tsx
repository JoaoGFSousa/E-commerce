"use client";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Dividier";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { StyledLink } from "@/components/Link";
import { iSingUp } from "@/types/userAccessValidatons";
import { RegisterValidation } from "@/validations/userAccess.validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterValidation),
  });

  const singUp = (values: iSingUp) => console.log(values);
  return (
    <Form onSubmit={handleSubmit(singUp)}>
      <h2>Seja bem vindo!</h2>
      <Input
        variant="float"
        id="nome"
        type="text"
        placeholder="Digite seu nome"
        {...register("nome")}
        error={errors.nome?.message}
      />
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
      <Input
        variant="float"
        id="password"
        type="password"
        placeholder="Confirme a sua senha "
        {...register("confirmacaosenha")}
        error={errors.confirmacaosenha?.message}
      />
      <Button type="submit">Entrar</Button>
      <Divider />
      <small>
        Já Possui uma conta? <StyledLink href="/login"> Acesse já! </StyledLink>
      </small>
    </Form>
  );
}
