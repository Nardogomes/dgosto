import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

const doces = [
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

export function Doces() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Doces</h1>

        <div className="cards">
          {doces.map((doce, index) => {
            return (
              <div key={index} className="card">
                <img src={doce.img} alt={doce.title} />
                <h1>{doce.title}</h1>
                <p>{doce.description}</p>
                <footer>
                  <button>Comprar</button>
                  <span>{doce.price}</span>
                </footer>
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
}
