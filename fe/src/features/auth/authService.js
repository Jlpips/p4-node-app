import axios from "axios";

// const API_URL = "http://localhost:8000/api/v1/users";
const API_URL = `${process.env.REACT_APP_API_URL}/users`;

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  // console.log(API_URL);
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = { register, login, logout };

export default authService;
