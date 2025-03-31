import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#4CAF50" : "#555",
        padding: "10px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h1>{theme === "light" ? "Light Theme Activated." : "Dark Theme Activated."}</h1>
    </header>
  );
};

const Content = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        transition: "0.3s ease-in-out",
        height: "63.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "20px" }}>
        {theme === "light"
          ? "Enjoy the bright vibes!"
          : "Darkness is where real code thrives!"}
      </p>
    </div>
  );
};

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme === "light" ? "#4CAF50" : "#555",
        padding: "10px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <p>Theme Toggle App - Q9</p>
    </footer>
  );
};

const Q9 = () => {
  return (
    <ThemeProvider>
      <Header />
      <ThemeToggle />
      <Content />
      <Footer />
    </ThemeProvider>
  );
};

export default Q9;
