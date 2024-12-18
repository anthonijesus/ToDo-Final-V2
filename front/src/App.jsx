import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica si el usuario ya tiene un token al cargar la aplicación
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user?.token;
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // Elimina los datos del usuario en el navegador
    setIsAuthenticated(false);
  };

  if (!sessionStorage.getItem("user") && isAuthenticated) {
    handleLogout();
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <PrivateRoute handleLogout={handleLogout} />
      ) : (
        <PublicRoute handleLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
