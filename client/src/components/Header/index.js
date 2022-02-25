import logo from "../../assets/logo.svg";

import "./styles.header.css";


export const Header = ({ children }) => {
  return (
    <header>
      <img className="header__logo" src={logo} alt="logo" />
      <span className="header__actions">
        {children}
      </span>
    </header>
  );
};