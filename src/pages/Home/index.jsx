import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.png";

export function Home() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logomarca da empresa D'gosto" />
        <form>
          <label>E-mail</label>
          <input type="text" />
          <label>Senha</label>
          <input type="password" />
          <button>Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
