import { Fragment, useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart-contet";
import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as Navlogo } from "../../assets/Navlogo.svg";
import CardIcon from "../../components/card-icon/card-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation-style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Navlogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="./shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="./authentication">Sign In</NavLink>
          )}
          <CardIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
