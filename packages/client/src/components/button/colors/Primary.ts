import { css } from "styled-components";

const Primary = css`
  background-color: ${({ theme }) => theme.colors.accent["DEFAULT"]};

  :hover {
    background-color: ${({ theme }) => theme.colors.accent["hover"]};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.accent["disabled"]};
    background-color: ${({ theme }) => theme.colors.accent["hover"]};
  }
`;

export default Primary;
