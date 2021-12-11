import Button from "components/button";
import { FC } from "react";

interface LoginButtonProps {
  onClick?: () => void;
}

const LoginButton: FC<LoginButtonProps> = ({ children, onClick }) => {
  return <Button>{children}</Button>;
};

export default LoginButton;
