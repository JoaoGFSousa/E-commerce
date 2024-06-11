"use client";

import { StyledLink } from "../Link";
import * as S from "./header.style";
import IconButton from "../IconButton";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../Button";
import { BiLogOutCircle, BiSolidCartAlt, BiUserCircle } from "react-icons/bi";
import Input from "../Input";
import {
  Menu,
  MenuButton,
  IconButton as ButtonIcon,
  MenuList,
  MenuItem,
  Button as ChakraButton,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Header: React.FC = () => {
  const { isLogged, user, logout } = useAuth();

  return (
    <>
      <S.Header>
        <S.HeaderTop>
          <p>Welcome To Eco Market</p>
          <div>
            {!isLogged ? (
              <>
                <StyledLink href="/login">Login</StyledLink>
                <StyledLink href="/cadastro">Cadastro</StyledLink>
              </>
            ) : (
              <>
                <p>Olá, {user.nome}</p>
              </>
            )}
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <h1>Eco Market</h1>
          <Box display="flex" gap="0.8rem">
            <Input placeholder="Pesquisar" />
            <IconButton icon={AiOutlineSearch} />
          </Box>
          <S.nav>
            <Menu>
              <MenuButton as={ButtonIcon} icon={<BiUserCircle />}></MenuButton>
              <MenuList>
                {isLogged ? (
                  <>
                    <MenuItem as={Link} href={"/perfil"}>
                      Perfil
                    </MenuItem>
                    <MenuItem
                      as={ChakraButton}
                      leftIcon={<BiLogOutCircle />}
                      onClick={logout}
                    >
                      Sair
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem as={Link} href="/register">
                      Criar Conta
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
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