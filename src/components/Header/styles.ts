import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
`;

export const Container = styled.header`
  max-width: 72.5rem;
  margin: 0 auto;
  height: 7.4rem;
  padding: 2rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 2.2rem;
    height: auto;
  }

  span {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme["light"]};
    font-family: "Quicksand", sans-serif;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 480px) {
    margin-left: 0;
    gap: 1rem;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: ${(props) => props.theme.background};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme["light"]};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.background};
  }
`;
