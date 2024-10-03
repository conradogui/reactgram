import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//pages
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
