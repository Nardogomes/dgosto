import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: var(--blue-500);

  @media(max-width: 1020px) {
    display: none;
  }
`;

export const Content = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.8rem 1rem 0 1rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
  }

  span {
    width: 20rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--yellow-100);

    strong {
      color: var(--yellow-500);
    }
  }
`;
