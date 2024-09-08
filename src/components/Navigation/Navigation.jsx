import { NavLink } from "react-router-dom";
 import clsx from "clsx";
 import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  
    return (
      <header className={css.header}>
        <nav>
          <ul className={css.container}>
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={getLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}