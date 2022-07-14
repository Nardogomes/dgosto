import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

const doces = [
  {
    img: "https://live.staticflickr.com/8303/7989675237_faf24a0643_z.jpg",
    title: "Brigadeiro",
    description:
      "Delicioso brigadeiro de cholate.",
    price: "R$ 5,00",
  },
  {
    img: "https://live.staticflickr.com/1581/25204939325_121639b01c_b.jpg",
    title: "Beijinho",
    description: "Delicioso beijinho.",
    price: "R$ 5,00",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Alfajores_Per%C3%BA.jpg",
    title: "Casadinho",
    description: "Delicioso casadinho.",
    price: "R$ 5,00",
  },
];

export function Doces() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Doces</h1>
          <Link to={"/home"}>
            <span>{"< Voltar"}</span>
          </Link>
        </header>

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
