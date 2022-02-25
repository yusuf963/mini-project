import "./styles.login.css";
import googleIcon from "../../assets/icons8-google-50.png";
import line from "../../assets/Line.svg";
import radLogo from "../../assets/logo.svg";

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  let navigate = useNavigate();
  const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        console.log(user);

        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });

  return (
    <div className="App">
      <img className="radLogo" src={radLogo} alt="rad logo" />
      <img className="radLogo" src={line} alt="line" />
      <button className="signInButton" onClick={() => signInWithGoogle()}>
        <img src={googleIcon} alt="sign in with google icon" />
        Sign in with google
      </button>
    </div>
  );
};