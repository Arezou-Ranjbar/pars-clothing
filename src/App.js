import Home from "./routs/home/home";
import Shop from "./routs/shop/shop";
import Checkout from "./routs/checkout/checkout";
import { Route, Routes } from "react-router";
import Navigation from "./routs/navigation/navigation";
import Authentication from "./routs/authentication/authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
