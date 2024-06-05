"use client";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();


  return (
    <Form onSubmit={() => router.push("/")}>
      <label htmlFor='email'>Email</label>
      <Input id='email' type="text" placeholder="Email" />
      <label htmlFor='password'>Senha</label>
      <Input id='password' type="password" placeholder="Digite Sua Senha" />
      <Button type="submit">Entrar</Button>
    </Form>
  );
}
