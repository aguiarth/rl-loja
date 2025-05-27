import { Container } from "./styles";

// assets
import OrderConfirmationIllustration from "../../assets/images/order-confirmation-illustration-2.svg";
import useCart from "../../store/contexts/cart/CartContext";

export function OrderPlaced() {
  const { checkoutData } = useCart();
  console.log("checkoutData = ", checkoutData);

  return (
    <Container>
      <div className="wrapper">
        <h1 className="order-confirmation-title">Uhu! Pedido confirmado</h1>
        <p className="order-confirmation-message">
          Já já, você poderá se refrescar.
        </p>
        <div className="order-data">
          <ul>
            <li className="order-data-item">
              <div className="text-content">
                <p>
                  Entrega em{" "}
                  <strong>
                    {checkoutData.street}, {checkoutData.number}
                  </strong>
                </p>
                <p>
                  {checkoutData.city} - {checkoutData.state}
                </p>
              </div>
            </li>
            <li className="order-data-item">
              <div className="text-content">
                <p>Previsão de entrega</p>
                <strong>20 - 30 min</strong>
              </div>
            </li>
            <li className="order-data-item">
              <div className="text-content">
                <p>Pagamento na entrega</p>
                <strong>{checkoutData.installment}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={OrderConfirmationIllustration}
        alt="ilustração de pessoa segurando um sorvete"
        className="order-confirmation-illustration"
      />
    </Container>
  );
}
