import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/pages/Home"
import Template from "./components/pages/Template";
import Tabulio from "./components/pages/Tabulio";
import About from "./components/pages/About";
import Login from "../src/components/Auth/Login";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="template" element={<Template />} />
        <Route path="join" element={<Tabulio />} />
        <Route path="about" element={<About />} />
        <Route path="Login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
