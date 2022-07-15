import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: var(--blue-500);

  @media (min-width: 1020px) {
    height: 100vh;
    background-color: var(--gray-100);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 2rem 0;
      font-size: 2.5rem;
      color: var(--yellow-500);
    }

    a {
      background-color: var(--yellow-500);
      width: 5rem;
      height: 2rem;
      font-size: 1.2rem;
      border-radius: 4px;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cards {
    cursor: pointer;

    a {
      text-decoration: none;
    }
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

  @media (min-width: 1020px) {
    header {
      width: 64rem;
    }

    .cards {
      max-width: 74rem;
      display: flex;
      flex-direction: row;
      gap: 2.5rem;
    }

    .card {
      background-color: var(--blue-500);
    }

    .card:hover {
      h2 {
        color: var(--yellow-100);
      }
    }
  }
`;
