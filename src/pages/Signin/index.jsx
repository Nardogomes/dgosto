import { Link } from "react-router-dom";

import { Header } from "../../components/Header";

import logoImg from "../../assets/logo.png";

import { Container, Content } from "./styles";

export function Signin() {
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
          <Link to={"home"}>
            <button>Entrar</button>
          </Link>
          <p>ou</p>
          <button>Criar conta</button>
        </form>
      </Content>
    </Container>
  );
}
