import { useContext } from "react";
import Button from "../button/button";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown-style";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../context/cart-contet";
import { useNavigate } from "react-router";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

// const CartDropdown = () => {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();
//   const goToCheckoutHandler = () => {
//     navigate("/checkout");
//   };
//   return (
//     <div className="cart-dropdown-container">
//       <div className="cart-items">
//         {cartItems.length ? (
//           cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
//         ) : (
//           <span>empty</span>
//         )}
//       </div>
//       <Button onClick={goToCheckoutHandler}>Checkout</Button>
//     </div>
//   );
// };

// export default CartDropdown;
