import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__title">
        NBA
      </Link>
      <nav className="header__nav">
        <NavLink
          to="/teams"
          className="header__link"
          activeClassName="header__link--active"
        >
          Teams
        </NavLink>
        <NavLink
          to="/players"
          className="header__link"
          activeClassName="header__link--active"
        >
          Players
        </NavLink>
        <NavLink
          to="/stats"
          className="header__link"
          activeClassName="header__link--active"
        >
          Stats
        </NavLink>
      </nav>
    </header>
  );
}
