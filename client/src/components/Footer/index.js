import "./styles.footer.css";

import logo from "../../assets/logo.svg";
import behance_icon from "../../assets/Group-1.svg"
import insta_icon from "../../assets/Group-2.svg"
import linkedin_icon from "../../assets/Group-3.svg"
import facebook_icon from "../../assets/Group-4.svg"
import dribble_icon from "../../assets/Group-5.svg"

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
        <img className="icon" src={behance_icon} alt="behance-icon" />
        <img className="icon" src={insta_icon} alt="insta-icon" />
        <img className="icon" src={linkedin_icon} alt="linkedin-icon" />
        <img className="icon" src={facebook_icon} alt="facebook-icon" />
        <img className="icon" src={dribble_icon} alt="dribble-icon" />
      </div>
      <div className="section-4">
        <img className="footer__logo" src={logo} alt="Rad logo" />
        <p className="copy_right">&copy; 2022 Radically Digital - All Rights Reserved </p>
      </div>
    </footer>
  );
};