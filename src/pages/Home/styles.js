import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-500);
  color: var(--yellow-100);

  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    width: 43rem;
    height: 32rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 18rem;
    height: 18rem;
  }
`;
