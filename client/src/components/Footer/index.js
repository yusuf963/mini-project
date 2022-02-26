import "./styles.footer.css";

import logo from "../../assets/logo.svg";
import * as icons from "../../assets/social_media"
export const Footer = () => {
  return (
    <footer>
      <div className="section-1">
        <h5>RAD London</h5>
        <p>145 City Rd, Hoxton</p>
        <p>London, EC1V 1AZ</p>
      </div>
      <div className="section-2">
        <h5>RAD Lisbon</h5>
        <p>Heden Santa Apolónia,</p>
        <p>Lisbon, 1100-651 </p>
      </div>
      <div className="section-3">
        <a href="https://www.instagram.com/accounts/login/?next=/radicallydigital/" target={'_blank'} rel="noreferrer"><img className="icon" src={icons.instagram_icon} alt="insta-icon" /></a>
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fradically.digital%2F" target={'_blank'}><img className="icon" src={icons.facebook_icon} alt="facebook-icon" /></a>
        <a href="https://www.linkedin.com/company/radically-digital/" target={'_blank'} rel="noreferrer"><img className="icon" src={icons.linkedin_icon} alt="linkedin-icon" /></a>
        <a href="https://www.behance.net/radically-digital?" target={'_blank'} rel="noreferrer"><img className="icon" src={icons.behance_icon} alt="behance-icon" /></a>
        <a href="https://dribbble.com/shots/16488017-Radically-Digital-Landing-page" target={'_blank'} rel="noreferrer"><img className="icon" src={icons.dribble_icon} alt="dribble-icon" /></a>
      </div>

      <div className="section-4">
        <img className="footer__logo" src={logo} alt="Rad logo" />
        <p className="copy_right">&copy; 2022 Radically Digital - All Rights Reserved </p>
      </div>
    </footer>
  );
};