import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: var(--blue-500);

  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    height: 100vh;
    background-color: var(--gray-100);
    align-items: center;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;

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

  .card {
    width: 20rem;
    margin-bottom: 2rem;
    text-align: center;
    background-color: var(--gray-100);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 14rem;
      object-fit: cover;
    }

    h1 {
      margin: 1rem 0 0;
      color: var(--yellow-500);
      font-size: 1.8rem;
    }

    p {
      padding: 1rem;
    }

    footer {
      margin-bottom: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      button {
        width: 6rem;
        height: 3rem;
        background-color: var(--yellow-500);
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
      }

      span {
        padding: 1rem;
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1020px) {
    max-width: 74rem;
    flex-direction: column;

    header {
      width: 64rem;
    }

    .cards {
      display: flex;
      flex-direction: row;
      gap: 2.4rem;
    }
  }
`;
