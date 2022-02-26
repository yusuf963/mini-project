import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import {Footer} from "./components/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
