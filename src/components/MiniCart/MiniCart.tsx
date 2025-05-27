import { CartButton, ItemQuantity } from "./styles";
import useCart from "../../store/contexts/cart/CartContext";

// assets
import { ShoppingCart } from "phosphor-react";

export function MiniCart() {
  const { productsList } = useCart();
  return (
    <CartButton data-testid="cart-button-test" href="/checkout">
      {productsList.length === 0 ? (
        ""
      ) : (
        <ItemQuantity>{productsList.length}</ItemQuantity>
      )}
      <ShoppingCart size={22} weight="fill" color={"#B8D4E3"} />
    </CartButton>
  );
}
