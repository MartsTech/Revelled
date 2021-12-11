import { css } from "styled-components";

const Accent = css`
  background-color: ${({ theme }) => theme.colors.secondary["DEFAULT"]};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary["washed-out"]};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.secondary["washed-out"]};
  }
`;

export default Accent;
