import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
