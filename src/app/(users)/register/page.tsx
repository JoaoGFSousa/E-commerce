"use client";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Dividier";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { StyledLink } from "@/components/Link";
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();


  return (
    <Form onSubmit={() => router.push("/")}>
      <h2>olá, bem vindos de volta!</h2>
      <Input variant="float" id='nome' type="text" placeholder="Digite Sua Nome" />
      <Input variant="float" id='email' type="text" placeholder="Digite Seu Email" />
      <Input variant="float" id='password' type="password" placeholder="Digite Sua Senha" />
      <Button type="submit">Entrar</Button>
      <Divider />
      <small>
        ja possui uma conta?
        <StyledLink href="/login">Acesse já</StyledLink>
      </small>
    </Form>
  );
}
