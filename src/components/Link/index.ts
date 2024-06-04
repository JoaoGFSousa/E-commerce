import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color: ${({ theme }) => theme.colors.gray.lightest};
font-weight: 700;
`