import logo from '../../assets/logo.svg';

import './styles.header.css';

import { useNavigate } from 'react-router-dom';

export const Header = ({ children }) => {
  let navigate = useNavigate();

  return (
    <header>
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header_left">
        <span className="header__actions">{children}</span>
        <button onClick={() => navigate('/login')} className="log_out">
          Log out
        </button>
      </div>
    </header>
  );
};
