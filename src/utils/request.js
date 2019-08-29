import Vue from "vue";
import axios from "axios";
import store from "@/store";
import { VueAxios } from "./axios";
import { TOKEN } from "@/store/mutation-types";

// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 6000 // 请求超时时间
});

const err = error => {
  if (error.response) {
    const data = error.response.data;
    const token = Vue.ls.get(TOKEN);
    if (error.response.status === 403) {
      console.log(`Forbidden-${data.message}`);
    }
    if (error.response.status === 401) {
      console.log("Authorization verification failed");
      if (token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(TOKEN);
  if (token) {
    config.headers["Access-Token"] = token;
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  return response.data;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
