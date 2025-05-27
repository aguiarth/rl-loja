import { Wrapper, Container, Section, Column, BottomBar } from "./styles"
import { Heart, InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react"

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Column>
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </Column>

          <Column>
            <h4>Categorias</h4>
            <ul>
              <li><a href="#">Sorvetes clássicos</a></li>
              <li><a href="#">Sabores veganos</a></li>
              <li><a href="#">Combos promocionais</a></li>
              <li><a href="#">Kits para festas</a></li>
            </ul>
          </Column>

          <Column>
            <h4>Atendimento</h4>
            <ul>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Dúvidas frequentes</a></li>
              <li><a href="#">Minha conta</a></li>
              <li><a href="#">Rastrear pedido</a></li>
            </ul>
          </Column>

          <Column>
            <h4>Nos acompanhe</h4>
            <div className="socials">
              <a href="#"><InstagramLogo size={24} weight="fill" /></a>
              <a href="#"><FacebookLogo size={24} weight="fill" /></a>
              <a href="#"><TwitterLogo size={24} weight="fill" /></a>
            </div>
          </Column>
        </Section>

        <BottomBar>
          <span>© 2025 Sorveteria RocketIce. Todos os direitos reservados.</span>
          <span>Feito com <Heart size={16} weight="fill" /> por T</span>
        </BottomBar>
      </Container>
    </Wrapper>
  )
}