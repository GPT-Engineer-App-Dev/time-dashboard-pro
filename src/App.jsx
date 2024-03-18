import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
