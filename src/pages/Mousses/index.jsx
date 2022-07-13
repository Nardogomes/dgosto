import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

const mousses = [
  {
    img: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    title: "Bolo de chocolate",
    description:
      "Delicioso bolo fofo de cholate com cobertura de calda de chocolate.",
    price: "R$ 50,00",
  },
  {
    img: "https://images.unsplash.com/photo-1497730620907-6a4cf807bb94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    title: "Bolo de laranja",
    description: "Delicioso bolo fofo sabor laranja.",
    price: "R$ 30,00",
  },
  {
    img: "https://images.unsplash.com/photo-1497730620907-6a4cf807bb94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    title: "Bolo de laranja",
    description: "Delicioso bolo fofo sabor laranja.",
    price: "R$ 30,00",
  },
];

export function Mousses() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Mousses</h1>

        <div className="cards">
          {mousses.map((mousse, index) => {
            return (
              <div key={index} className="card">
                <img src={mousse.img} alt={mousse.title} />
                <h1>{mousse.title}</h1>
                <p>{mousse.description}</p>
                <footer>
                  <button>Comprar</button>
                  <span>{mousse.price}</span>
                </footer>
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
}
