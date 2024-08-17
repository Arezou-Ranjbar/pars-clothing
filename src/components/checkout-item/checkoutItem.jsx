import "./checkoutItem.scss";
import { FcCancel } from "react-icons/fc";
import { useContext } from "react";
import { CartContext } from "../../context/cart-contet";
import { FcDown } from "react-icons/fc";
import { FcUp } from "react-icons/fc";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          <FcUp />
        </div>
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          <FcDown />
        </div>
        <span className="value"> {quantity}</span>
      </span>
      <span className="price"> {price} </span>
      <span
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        <FcCancel />
      </span>
    </div>
  );
};

export default CheckoutItem;
