import axios from "axios";
const Url = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
  baseURL: `${Url}`, // url del backend
});

// Interceptor de solicitud para agregar token
axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = user?.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Interceptor de respuesta para manejar errores 401
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("user");
      if (window.location.pathname !== "/") { // Evita redirigir si ya estoy en "/"
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
