import { Link } from "react-router-dom";

import "./index.scss";

const Menu = () => {
  // const menuData

  return (
    <nav className="menu">
      <Link className="menu__item" to="/shop">
        Витрина
      </Link>
      <Link className="menu__item" to="/cart">
        Корзина
      </Link>
    </nav>
  );
};

export default Menu;
