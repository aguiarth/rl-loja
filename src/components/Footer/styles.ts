import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  font-size: 0.9rem;
`;

export const Container = styled.footer`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
`;

export const Column = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: ${(props) => props.theme.background};
        text-decoration: none;
        font-weight: 400;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: ${(props) => props.theme["light"]};
        }
      }
    }
  }

  .socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;

    a {
      color: ${(props) => props.theme.background};
      transition: color 0.2s ease;

      &:hover {
        color: ${(props) => props.theme["light"]};
      }
    }
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid ${(props) => props.theme["background"]};
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;
