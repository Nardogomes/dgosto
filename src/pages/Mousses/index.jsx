import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";

const mousses = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9dU1IVocML7OIUkQGV23qQtJTC9yfwyxN9M7gXFD-g_ETCCbKVr9pun47Zv_6DR9tKk&usqp=CAU",
    title: "Mousse de chocolate",
    description:
      "Delicioso mousse sabor cholate.",
    price: "R$ 6,00",
  },
  {
    img: "https://live.staticflickr.com/8431/7660210116_5520062860_c.jpg",
    title: "Mousse de morango",
    description: "Delicioso mousse sabor morango.",
    price: "R$ 6,00",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O8H_FIIFr2BV3Ol793ZJo6Tj7UWDzQv85Q&usqp=CAU",
    title: "Mousse de maracujá",
    description: "Delicioso mousse sabor maracujá.",
    price: "R$ 6,00",
  },
];

export function Mousses() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Mousses</h1>
          <Link to={"/home"}>
            <span>{"< Voltar"}</span>
          </Link>
        </header>

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
