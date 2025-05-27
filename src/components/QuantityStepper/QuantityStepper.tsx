import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
interface QuantityStepperProps {
  productId: string;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export function QuantityStepper({
  quantity,
  onQuantityChange,
}: QuantityStepperProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    } else {
      onQuantityChange(1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <Container>
      <button onClick={handleDecrease}>
        <Minus size={14} weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>
        <Plus size={14} weight="fill" />
      </button>
    </Container>
  );
}
