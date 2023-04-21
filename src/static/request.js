import axios from "axios";
import router from '@/router/index.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("jwt")) {
      config.headers["Authorization"] = "Bearer " + localStorage.getItem("jwt");
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json;charset=utf-8";
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  } 
);

service.interceptors.response.use(
  async (response) => {
    const res = response.data;
    console.log(res);
    return res;
  },
  async (error) => {
    if(error.response.status === 401) {
        localStorage.removeItem("username");
        localStorage.removeItem("jwt");
        router.push('/dangnhap');
    }
    return error.response.data;
  }
);

export default service;