import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles.js";

export function Home() {
  return (
    <Container>
      <Content>
        <Header />

        <h1>Categorias</h1>

        <div className="cards">
          <Link to={"/bolos"}>
            <div className="card">
              <img
                src="https://media.istockphoto.com/photos/brazilian-corn-cake-made-with-a-type-of-corn-flour-picture-id1244316000?k=20&m=1244316000&s=612x612&w=0&h=AFe1x1LDFaT1tQQnAGfsFcdQTHlDkLj9HkEfDSTgHbE="
                alt="Bolos"
              />
              <h2>Bolos</h2>
            </div>
          </Link>

          <Link to={"/doces"}>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1630953899906-d16511a72558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Doces"
              />
              <h2>Doces</h2>
            </div>
          </Link>

          <Link to={"/mousses"}>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1548329408-0bcd6e68058d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="Mousses"
              />
              <h2>Mousses</h2>
            </div>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
