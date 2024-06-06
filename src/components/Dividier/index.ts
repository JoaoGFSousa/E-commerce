import styled, { css } from "styled-components";

export interface iDividerProps {
  orientation?: "horizontal" | " vertical ";
}

export const Divider = styled.hr<iDividerProps>`
  background-color: ${({ theme }) => theme.colors.gray.dark};

  ${({ orientation }) => {
    switch (orientation) {
      case " vertical ":
        return css`
          width: 2px;
          height: 100%;
        `;
      default:
        return css`
                width: 100%
                height:2px;
                `;
    }
  }}
`;
