import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
