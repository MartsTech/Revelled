import { css } from "styled-components";

const Secondary = css`
  background-color: ${({ theme }) => theme.colors.primary[700]};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.primary[300]};
    background-color: ${({ theme }) => theme.colors.accent["hover"]};
  }
`;

export default Secondary;
