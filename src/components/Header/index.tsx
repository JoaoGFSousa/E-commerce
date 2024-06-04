"use client";

import { StyledLink } from "../Link";
import { Input } from "../Input";
import * as S from "./header.style";

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <p>Welcome To Eco Market</p>
          <div>
            <StyledLink href="/">Login</StyledLink>
            <StyledLink href="/">Cadastro</StyledLink>
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <h1>Eco Market</h1>
          <Input placeholder="Pesquisar" />
        </S.HeaderCenter>
      </S.Header>
    </>
  );
};

export default Header;
