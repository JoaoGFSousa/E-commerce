"use client";

import { StyledLink } from "../Link";
import * as S from "./header.style";
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from "../IconButton";
import { BiUserCircle, BiSolidCartAlt } from "react-icons/bi";
import { Button } from "../Button";
import Input from "../Input";

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <p>Welcome To Eco Market</p>
          <div>
            <StyledLink href="/login">Login</StyledLink>
            <StyledLink href="/cadastro">Cadastro</StyledLink>
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <h1>Eco Market</h1>
          <div>
            <Input placeholder="Pesquisar" />
            <IconButton icon={AiOutlineSearch} />
          </div>
          <S.nav>
            <Button variant="unStyled">
              <BiUserCircle />
              Perfil
            </Button>
            <Button variant="unStyled">
              <BiSolidCartAlt />
              Carrinho
            </Button>
          </S.nav>
        </S.HeaderCenter>
      </S.Header>
    </>
  );
};

export default Header;
