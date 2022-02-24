import "./Sign-in.css";
import googleIcon from "./assets/icons8-google-50.png";
import line from "./assets/Line.svg";
import radLogo from "./assets/logo.svg";

import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        console.log(user);

        // to replace with "navigate" or anything similar with some router
        window.location.href = "/home";
      })
      .catch((error) => {
        alert(error.message);
      });

  return (
    // <Router>
    <div className="App">
      <img className="radLogo" src={radLogo} alt="rad logo" />
      <img className="radLogo" src={line} alt="line" />
      <button className="signInButton" onClick={() => signInWithGoogle()}>
        <img src={googleIcon} alt="sign in with google icon" />
        Sign in with google
      </button>
    </div>
    // </Router>
  );
}

export default App;
