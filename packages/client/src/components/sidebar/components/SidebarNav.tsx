import Link from "next/link";
import { FC, SVGProps } from "react";
import styled from "styled-components";

interface SidebarNavProps {
  title: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick: () => void;
  active: boolean;
}

const SidebarNav: FC<SidebarNavProps> = ({
  title,
  href,
  Icon,
  active,
  onClick,
}) => {
  return (
    <Link href={href} passHref>
      <StyledNav onClick={onClick}>
        <StyledContainer active={active}>
          <Icon height={20} width={20} />
          <StyledTitle>{title}</StyledTitle>
        </StyledContainer>
      </StyledNav>
    </Link>
  );
};

export default SidebarNav;

const StyledNav = styled.div`
  width: 80%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

const StyledContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 3rem;
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize["lg"]};
`;
