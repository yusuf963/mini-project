import logo from '../../assets/logo.svg';

import './styles.header.css';


export const Header = () => {
  return (
    <header>
      <img className='header__logo' src={logo} alt="logo" />
    </header>
  );
};