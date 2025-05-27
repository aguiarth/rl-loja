import {
  OuterWrapper,
  Container,
  LogoArea,
  LogoLink,
  Nav,
  NavLink,
  ActionsWrapper,
  CartLabel,
} from "./styles";

// assets
import Logo from "../../assets/images/logo.png";

// components
import { MiniCart } from "../MiniCart/MiniCart";

export function Header() {
  return (
    <OuterWrapper>
      <Container>
        <LogoLink href="/">
          <LogoArea>
            <img src={Logo} alt="RocketIce logo" />
            <span>RocketIce</span>
          </LogoArea>
        </LogoLink>

        <Nav>
          <NavLink href="/sobre">Sobre nós</NavLink>
        </Nav>

        <ActionsWrapper>
          <CartLabel>
            <span>Meu carrinho</span>
            <MiniCart />
          </CartLabel>
        </ActionsWrapper>
      </Container>
    </OuterWrapper>
  );
}