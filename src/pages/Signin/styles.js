import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-500);
  color: var(--yellow-100);

  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    width: 50rem;
    height: 32rem;
    border-radius: 4px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 16rem;
    height: 16rem;
    margin-top: 4rem;
  }

  form {
    width: 18rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    label {
      color: var(--yellow-500);
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    input {
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      margin-bottom: 2rem;
    }

    p {
      border-top: 1px solid #f5f5f5;
      margin: 1.5rem 0;
      padding: 1rem;
      text-align: center;
    }

    a button {
      width: 18rem;
    }

    button {
      padding: 0.5rem;
      font-size: 1.2rem;
      font-weight: 700;
      border: none;
      border-radius: 4px;
      background-color: var(--yellow-500);
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media(min-width: 1020px) {
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    img, form {
      margin-top: 0;
    }
  }
`;
