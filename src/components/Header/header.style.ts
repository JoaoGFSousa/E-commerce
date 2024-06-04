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
    gap: 5.5rem;
  }
  `
  export const HeaderCenter = styled.section`
  padding: .5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

