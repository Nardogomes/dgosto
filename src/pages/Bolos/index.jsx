import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

const bolos = [
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

export function Bolos() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Bolos</h1>
          <Link to={"/home"}>
            <span>{"< Voltar"}</span>
          </Link>
        </header>

        <div className="cards">
          {bolos.map((bolo, index) => {
            return (
              <div key={index} className="card">
                <img src={bolo.img} alt={bolo.title} />
                <h1>{bolo.title}</h1>
                <p>{bolo.description}</p>
                <footer>
                  <button>Comprar</button>
                  <span>{bolo.price}</span>
                </footer>
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
}
