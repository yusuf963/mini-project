import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}/>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
