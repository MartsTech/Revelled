import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import styled from "styled-components";
import Theme from "styles/Theme";
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
  theme?: typeof Theme;
};

const Button: FC<ButtonProps> = ({
  children,
  size = "big",
  color = "primary",
  disabled = false,
  loading = false,
  icon,
  ref,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled || loading}
      color={color}
      size={size}
      data-testid="button"
      onClick={(e) => {
        e.preventDefault();
        typeof onClick === "function" && onClick(e);
      }}
      {...props}
    >
      <StyledContent>
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

  :disabled {
    &&& {
      background-color: ${({ theme }) => theme.colors.primary[700]};
      cursor: not-allowed;
    }
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

const StyledContent = styled.span`
  display: flex;
  align-items: center;
`;

const StyledIconContainer = styled.span`
  margin-right: 0.5rem;
  align-items: center;
`;

const StyledSpinnerContainer = styled.span`
  position: absolute;
`;
