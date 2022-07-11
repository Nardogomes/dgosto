import { Link } from "react-router-dom";

import { Container, Content } from "./style"

import logoImg from "../../assets/logo.png"

export function Header() {
  return (
    <Container>
      <Content>
        <Link to={"/home"}>
          <img src={logoImg} alt="Logomarca da empresa D'gosto" />
        </Link>
        <span>Uma variedade de <strong>gostosuras</strong> para você aproveitar</span>
      </Content>
    </Container>
  );
}
