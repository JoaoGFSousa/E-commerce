import  { css, styled } from "styled-components";


export interface iButtonProps {
    variant?: string;
}

export const Button = styled.button<iButtonProps>`
    background-color: ${({ theme }) => theme.colors.brand.accent};
    color: ${({ theme }) => theme.colors.white.primary};
    padding: .5rem 2rem;
    font-size:${({ theme }) => theme.typography.xl};
    ${({ variant})=> {
        switch(variant){
            case'icon-button':
                return css`
                    padding: .4rem 1rem;
                    font-size:${({ theme }) => theme.typography.xl};
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    `

              case'unStyled':
                  return css`
                        background-color: transparent;
                        padding: 0;
                        color: ${({ theme }) => theme.colors.gray.medium};
                        `      
                  
        }
    }}

`