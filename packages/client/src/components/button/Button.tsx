import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import styled, { css } from "styled-components";
import Accent from "./colors/Accent";
import Primary from "./colors/Primary";
import Secondary from "./colors/Secondary";
import Transparent from "./colors/Transparent";
import Big from "./sizes/Big";
import Small from "./sizes/Small";
import Tiny from "./sizes/Tiny";

type ButtonColor = "primary" | "secondary" | "accent" | "transparent";

type ButtonSize = "big" | "small" | "tiny";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: ButtonSize;
  color?: ButtonColor;
  loading?: boolean;
  icon?: ReactNode;
};

const Button: FC<ButtonProps> = ({
  children,
  size = "big",
  color = "primary",
  disabled,
  loading = false,
  icon,
  ref,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      color={color}
      size={size}
      data-testid="button"
      {...props}
    >
      <StyledContent loading={loading}>
        {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
        {children}
      </StyledContent>
      {loading && (
        <StyledSpinnerContainer>
          {/* <Spinner size={size === "small" ? "2" : "4"} /> */}
        </StyledSpinnerContainer>
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  color: ButtonColor;
  size: ButtonSize;
}>`
  display: flex;
  border: none;
  color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.fontSize["sm"]};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    box-shadow: inset 0 0 0 2px currentColor;
  }

  ${({ color }) =>
    color === "primary"
      ? Primary
      : color === "secondary"
      ? Secondary
      : color === "accent"
      ? Accent
      : color === "transparent" && Transparent}

  ${({ size }) =>
    size === "big" ? Big : size === "small" ? Small : size === "tiny" && Tiny}
`;

const StyledContent = styled.span<{ loading: boolean }>`
  ${({ loading }) =>
    loading
      ? css`
          opacity: 0;
        `
      : css`
          display: flex;
          align-items: center;
        `}
`;

const StyledIconContainer = styled.span`
  margin-right: 0.5rem;
  align-items: center;
`;

const StyledSpinnerContainer = styled.span`
  position: absolute;
`;
