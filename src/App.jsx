import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <Link to="/plants">
                <button className="btn">Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
