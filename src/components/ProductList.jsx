import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Snake Plant", price: 20, category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 25, category: "Indoor" },
  { id: 3, name: "Aloe Vera", price: 15, category: "Succulent" },
  { id: 4, name: "Cactus", price: 18, category: "Succulent" },
  { id: 5, name: "Rose Plant", price: 30, category: "Flowering" },
  { id: 6, name: "Orchid", price: 35, category: "Flowering" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.some(item => item.id === id);

  return (
    <>
      <Navbar />
      <div className="products">
        {plants.map(plant => (
          <div key={plant.id} className="card">
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p>${plant.price}</p>
            <button
              disabled={isInCart(plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              {isInCart(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;