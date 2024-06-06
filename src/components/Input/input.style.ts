import styled, { css } from "styled-components";
import { iInputProps } from ".";

export const Input = styled.input<iInputProps>`
  padding: 1rem;
  outline: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border: none;
  border-radius: 10px;
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case "float":
        return css`
          outline: none;
          padding: 1rem 1rem 0rem 1rem;
          background-color: transparent;
          height: 100%;
          &:focus {
            outline: none;
          }
        `;
    }
  }}
`;

export const InputBox = styled.div<{ value?: string }>`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  position: relative;
  height: 50px;

  label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    transition: all 0.3s;
    font-size: ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.gray[400]};
    pointer-events: none;
  }
  &,
  span,
  label {
    transition: all 0.3s;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
  span {
    height: 2px;
    background-color: ${({ theme }) => theme.colors.brand.primary};
    display: block;
    width: 0;
  }

  &:hover span {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:focus-within label {
    transform: translateY(0);
    top: 5px;
    font-size: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.brand.accent};
  }
  label {
    ${({ value }) =>
      value &&
      css`
        transform: translateY(-50%);
        top: 14px;
        font-size: ${({ theme }) => theme.typography.sm};
      `}
  }
`;
