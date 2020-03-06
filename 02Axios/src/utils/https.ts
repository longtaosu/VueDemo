import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Message } from "element-ui";

export interface ResponseData {
  code: number;
  result?: any;
  message: string;
}

// 创建 axios 实例
let service: AxiosInstance | any;
if (process.env.NODE_ENV === "development") {
  service = axios.create({
    baseURL: "https://api.apiopen.top/",
    timeout: 50000 // 请求超时时间
  });
} else {
  // 生产环境下
  service = axios.create({
    baseURL: "https://api.apiopen.top/singlePoetry",
    timeout: 50000
  });
}

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      const data: any = res.data
      return data;
    } else {
      Message({
        message: "网络错误!",
        type: "error"
      });
      return Promise.reject(new Error(res.data.message || "Error"));
    }
  },
  (error: any) => Promise.reject(error)
);

export default service;
