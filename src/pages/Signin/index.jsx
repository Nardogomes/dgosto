import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.png";

export function Signin() {
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
          <p>ou</p>
          <button>Criar conta</button>
        </form>
      </Content>
    </Container>
  );
}
