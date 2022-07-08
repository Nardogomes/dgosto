import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-500);

  @media(min-width: 1020px) {
    background-color: var(--gray-100);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem 0;
    font-size: 2.5rem;
    color: var(--yellow-500);
  }

  .card {
    width: 20rem;
    height: 20rem;
    margin-bottom: 2rem;
    text-align: center;
    background-color: var(--gray-100);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 14rem;
      object-fit: cover;
    }

    h2 {
      padding: 2rem;
      color: var(--yellow-500);
      font-size: 1.8rem;
    }
  }

  @media(min-width: 1020px) {
    .cards {
      max-width: 74rem;
      display: flex;
      flex-direction: row;
      gap: 2.5rem;
    }

    .card {
      background-color: var(--blue-500);
    }
  }
`;
