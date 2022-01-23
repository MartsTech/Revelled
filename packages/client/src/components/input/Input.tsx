import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled, { css } from "styled-components";
import Theme from "styles/Theme";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: string;
  transparent?: boolean;
  theme?: typeof Theme;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ transparent = false, error, ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        data-testid="input"
        transparent={transparent}
        error={typeof error !== "undefined"}
        {...props}
      />
    );
  }
);

export default Input;

Input.displayName = "Input";

const StyledInput = styled.input<{ transparent: boolean; error: boolean }>`
  width: 100%;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary[100]};
  background-color: ${({ transparent, theme }) =>
    transparent ? theme.colors.transparent : theme.colors.primary[700]};

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary[300]};
  }

  :focus {
    outline: none;
  }

  ${({ error, theme }) =>
    error &&
    css`
      box-shadow: inset 0 0 0 1px ${theme.colors.secondary["DEFAULT"]};
    `}
`;
