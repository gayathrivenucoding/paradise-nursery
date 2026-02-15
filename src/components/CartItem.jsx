import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart">
        <h1>Your Cart</h1>

        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(incrementQuantity(item.id))}>
              +
            </button>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>
              -
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Delete
            </button>
          </div>
        ))}

        <h2>Total Amount: ${totalAmount}</h2>

        <button onClick={() => alert("Coming Soon!")}>
          Checkout
        </button>

        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default CartItem;