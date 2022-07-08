import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  background-color: var(--gray-100);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem 0;
  }

  .card {
    width: 26rem;
    text-align: center;
    background-color: var(--blue-500);
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 18rem;
      object-fit: cover;
    }

    h2 {
      padding: 2rem;
      color: var(--yellow-500);
      font-size: 1.6rem;
    }
  }

  .card + .card {
    margin-top: 2rem;
  }
`;
