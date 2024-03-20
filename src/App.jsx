import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
