"use client";
import { useRouter } from "next/navigation";

//  OQUE E UMA SEVER SIDE RENDERING (SSR)
//  SSR é uma tecnica de renderização de paginas web que é feita no servidor
//  o servidor renderiza a pagina e envia para o cliente
//  o cliente recebe a pagina ja renderizada
// SEMPRE TRATAR UM PAGINA LADO DO CLIENTE TEMOS QUE TRATAR NO LADO DO SERVIDOR E USA O USE CLIENTE

export default function Login() {
  // vamos explicar o  hook  useRouter

  const router = useRouter();

  // o useRouter é um hook que retorna um objeto com varias propriedades
  // a propriedade que vamos usar é o push
  // o push é uma função que redireciona o usuario para outra rota
  // vamos usar o push para redirecionar o usuario para a rota home

  return (
    // quero colocar  funcao onSubmit no meu formulario e usar  ou router para redirecionar o usuario para a rota home
    <form onSubmit={() => router.push("/home")}>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="senha" />
      <button type="submit">Entrar</button>
      {/* criar um botao para quem n tem cadastro */}
      <button type="button" onClick={() => router.push("/register")}>
        Cadastre-se
      </button>
    </form>
  );
}
