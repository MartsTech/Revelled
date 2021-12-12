import Link from "next/link";
import { FC, SVGProps } from "react";
import styled from "styled-components";

interface SidebarNavProps {
  title: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const SidebarNav: FC<SidebarNavProps> = ({ title, href, Icon }) => {
  return (
    <Link href={href} passHref>
      <StyledNav>
        <StyledContainer>
          <Icon height={24} width={22} />
          <StyledTitle>{title}</StyledTitle>
        </StyledContainer>
      </StyledNav>
    </Link>
  );
};

export default SidebarNav;

const StyledNav = styled.div`
  width: 80%;
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 3rem;
`;

const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize["xl"]};
`;
