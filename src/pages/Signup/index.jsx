import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

import logoImg from "../../assets/logo.png";

import { Container, Content } from "./styles";

export function Signup() {
  return (
    <Container>
      <Header />
      <Content>
        <img src={logoImg} alt="Logomarca da empresa D'gosto" />
        <form>
          <label>E-mail</label>
          <input type="text" />
          <label>Senha</label>
          <input type="password" />
          <label>Confirmar senha</label>
          <input type="password" />
          <Link to={"/home"}>
            <button>Cadastrar</button>
          </Link>
        </form>
      </Content>
    </Container>
  );
}
