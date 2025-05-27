// thumbs
import MilkshakeMorango from "../assets/images/milkshake-morango.png";
import MilkshakeChocolate from "../assets/images/milkshake-chocolate.png";
import SundaeCaramelo from "../assets/images/sundae-caramelo.png";
import BananaSplit from "../assets/images/banana-split.png";
import PaletaMexicana from "../assets/images/paleta-mexicana.png";
import PoteNapolitano from "../assets/images/pote-napolitano.png";
import SorveteCasquinha from "../assets/images/sorvete-casquinha.png";
import SorveteVegano from "../assets/images/sorvete-vegano.png";

export enum IceCreamTypes {
  MILKSHAKE = "milkshake",
  SUNDAE = "sundae",
  PALETA = "paleta",
  POTE = "pote",
  CASQUINHA = "casquinha",
  VEGANO = "vegano",
  ESPECIAL = "especial",
}

export interface Product {
  id: string;
  image: string;
  name: string;
  types: IceCreamTypes[];
  description: string;
  price: number;
  inventory: number;
  quantity: number;
}

export const products: Product[] = [
  {
    id: "ice-1",
    image: MilkshakeMorango,
    name: "Milkshake de Morango",
    types: [IceCreamTypes.MILKSHAKE],
    description: "Cremoso milkshake feito com sorvete de morango e leite",
    price: 12.5,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-2",
    image: MilkshakeChocolate,
    name: "Milkshake de Chocolate",
    types: [IceCreamTypes.MILKSHAKE],
    description: "Delicioso milkshake com calda e sorvete de chocolate",
    price: 13.0,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-3",
    image: SundaeCaramelo,
    name: "Sundae de Caramelo",
    types: [IceCreamTypes.SUNDAE],
    description: "Sorvete de baunilha com calda de caramelo e castanhas",
    price: 10.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-4",
    image: BananaSplit,
    name: "Banana Split",
    types: [IceCreamTypes.ESPECIAL],
    description: "Trio de sabores com banana, cobertura e chantilly",
    price: 15.0,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-5",
    image: PaletaMexicana,
    name: "Paleta Mexicana",
    types: [IceCreamTypes.PALETA],
    description: "Sorvete artesanal recheado, no palito",
    price: 8.5,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-6",
    image: PoteNapolitano,
    name: "Pote Napolitano",
    types: [IceCreamTypes.POTE],
    description: "Pote de 500ml com sabores chocolate, morango e creme",
    price: 18.9,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-7",
    image: SorveteCasquinha,
    name: "Sorvete na Casquinha",
    types: [IceCreamTypes.CASQUINHA],
    description: "Sorvete cremoso na casquinha crocante",
    price: 6.0,
    inventory: 10,
    quantity: 1,
  },
  {
    id: "ice-8",
    image: SorveteVegano,
    name: "Sorvete Vegano",
    types: [IceCreamTypes.VEGANO, IceCreamTypes.ESPECIAL],
    description: "Feito com leite vegetal, sem ingredientes de origem animal",
    price: 11.5,
    inventory: 10,
    quantity: 1,
  },
];
