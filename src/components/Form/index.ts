import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  margin: auto;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background-color: white;
  border-radius: 8px;
  h2 {
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
