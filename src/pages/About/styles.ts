import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  .content {
    flex: 1;

    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.primary};
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.text};
      line-height: 1.75;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 320px;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      max-width: 400px;
    }
  }
`;
