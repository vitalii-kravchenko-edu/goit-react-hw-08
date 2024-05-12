import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const activePage = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <header>
      <nav className={css.navList}>
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        {IsLoggedIn && (
          <NavLink to="/contacts" className={activePage}>
            Contacts
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
