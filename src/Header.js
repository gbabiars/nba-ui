import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">NBA</Link>
      </h1>
      <nav className="header__nav">
        <Link to="/teams" className="header__link">
          Teams
        </Link>
        <Link to="/players" className="header__link">
          Players
        </Link>
        <Link to="/stats" className="header__link">
          Stats
        </Link>
      </nav>
    </header>
  );
}
