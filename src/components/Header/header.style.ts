import styled from "styled-components";


export const Header = styled.header`
box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
`	
export const HeaderTop = styled.section`
  padding: .5rem 10%;
  background-color: ${({ theme }) => theme.colors.brand.accent};
  display: flex;
  justify-content: space-between;

  p{
    color: ${({ theme }) => theme.colors.gray.lightest};
    font-weight: 700;
  }
  div{
    display: flex;
    gap: 1rem;
  }
  `
  export const HeaderCenter = styled.section`
  padding: 1rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
  font-size: 1.5rem;
  font-weigth: 600;
  }
 
  `

  export const nav = styled.nav`
  display: flex;
  align-items: center;
  button{
    display: flex;
    gap: .3rem;
    padding: .5rem ;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
  button svg{
    font-size: 1.5rem;
  }

  `

