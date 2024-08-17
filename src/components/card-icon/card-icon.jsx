import { CartIconContainer, ItemCount } from "./card-icon-style";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-contet";

// const CardIcon = () => {
//   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
//   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
//   return (
//     <div className="cart-icon-container" onClick={toggleIsCartOpen}>
//       <ShoppingIcon className="shopping-icon" />
//       <span className="item-count">{cartCount}</span>
//     </div>
//   );
// };

// export default CardIcon;

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
