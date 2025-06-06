import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

// routes
import { Checkout } from "../pages/Checkout/Checkout";
import { Home } from "../pages/Home/Home";
import { OrderPlaced } from "../pages/OrderPlaced/OrderPlaced";
import { About } from "../pages/About/About";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  );
}
