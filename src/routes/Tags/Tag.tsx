import styled from "@emotion/styled"
import React from "react"
import { inter } from "src/assets"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Tag

const StyledWrapper = styled.li`
  display: inline;
  padding: 0.25rem 0.75rem;
  border-radius: 40px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray10};
  background-color: ${({ theme }) => theme.colors.gray5};
  cursor: pointer;
  font-family: ${inter.style.fontFamily};
`
