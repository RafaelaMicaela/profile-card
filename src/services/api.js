import axios from "axios";

const api = axios.create({
  baseURL: "https://ui-avatars.com/api/",
});

export default api;