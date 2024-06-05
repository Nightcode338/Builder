import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/pages/Home"
import Template from "./components/pages/Template";
import Tabulio from "./components/pages/Tabulio";
import About from "./components/pages/About";
<<<<<<< HEAD
import Login from "./components/Auth/Login";
=======
import Login from "../src/components/auth/Login";
>>>>>>> 71ee28c6e9b5c8480024b52619a06625889bd9ca


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login/>}/>
        <Route path="template" element={<Template />} />
        <Route path="join" element={<Tabulio />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
