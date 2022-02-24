import "./App.css";

import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        console.log(user);
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });

  return (
    <div className="App">
      <header className="App-header">Make your input</header>
      <button onClick={() => signInWithGoogle()}>signIn</button>
    </div>
  );
}

export default App;
