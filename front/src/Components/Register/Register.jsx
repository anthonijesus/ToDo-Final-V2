import React, { useState } from "react";
import axiosInstance from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import logo from "../Aside/logo.jpg";
import styles from "../../Components/Login/Login.module.scss";

const Register = () => {
  const Url = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Resetea errores antes de enviar
    try {
      const { data } = await axiosInstance.post(`${Url}/api/auth/user`, {
        username,
        name,
        email,
        password,
      });

      alert(
        `Registro del usuario "${data.name}" exitoso. Inicia sesión para continuar.`
      );

      navigate("/login");
    } catch (error) {
      setError(`${error.response.data.error}`);
      setUsername("");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleRegister} className={styles.loginForm}>
        <img src={logo} alt="logo" style={{ marginBottom: "20px" }} />
        <h2>Registro de Nuevos Usuarios</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Registrar
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div>
        <p>
          Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
