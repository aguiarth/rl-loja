import { AboutContainer } from "./styles";
import sorveteImg from "../../assets/images/sorvete-bg.png";

export function About() {
  return (
    <AboutContainer>
      <div className="content">
        <h1>Sobre a RocketIce</h1>
        <p>
          Fundada em 2021, a <strong>RocketIce</strong> nasceu da paixão por sorvetes artesanais feitos com ingredientes naturais, sem corantes ou conservantes artificiais.
          Acreditamos que um bom sorvete é mais do que uma sobremesa — é uma experiência afetiva, uma pausa refrescante no dia.
        </p>
        <p>
          Nossa missão é oferecer produtos de alta qualidade, preparados com frutas frescas, leite de origem controlada e muito carinho.
          Cada sabor é desenvolvido com cuidado, respeitando a sazonalidade dos ingredientes e valorizando produtores locais.
        </p>
        <p>
          A RocketIce não é apenas uma sorveteria: é um espaço de conexão, boas memórias e momentos doces. Estamos sempre inovando em sabores e experiências — seja na loja física, nos pedidos online ou nos eventos especiais.
        </p>
      </div>
      <img src={sorveteImg} alt="Sorvete artesanal da RocketIce" />
    </AboutContainer>
  );
}
