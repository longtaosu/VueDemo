# 创建项目

搭建 Vue + TS 项目，参考 [Vue之初始化环境](http://www.longtaosu.com/article/22)

运行项目

```shell
npm run serve
```

运行效果如下

![01初始化项目.png](https://gitee.com/imstrive/ImageBed/raw/master/20200305/01初始化项目.png)

# 引入Axios

编辑packag.json，引入axios

```json
  "dependencies": {
    "axios": "^0.18.0",
    "core-js": "^3.6.4",
    "element-ui": "^2.13.0",
    "vue": "^2.6.11",
    "vue-class-component": "^7.2.2",
    "vue-property-decorator": "^8.3.0",
    "vue-router": "^3.1.5",
    "vuex": "^3.1.2"
  }
```

安装组件

```shell
cnpm install
```



# Axios配置文件

src目录下创建utils文件夹，该文件夹下创建https.ts文件

该文件主要做一些axios的配置，如header，拦截器，响应消息结果判断等。

```js
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
    baseURL: "https://api.apiopen.top/",
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
```

本例使用了网上一个公开的接口，https://api.apiopen.top/singlePoetry，该接口返回数据结构如下

![02测试接口.png](https://gitee.com/imstrive/ImageBed/raw/master/20200305/02测试接口.png)

接口数据结构中包含三个字段：code、message、result。

# 创建响应消息

在src下创建文件 types.d.ts，该文件存储相应的数据结构。axios发送请求后，如果返回状态码是200，则将数据返回（不判断数据结构），但是我们在相应的请求需要做处理。

在types.d.ts中添加如下内容

```js
export interface DataResult{
    code: number;
    message: string;
    result: string;
}
```

# 使用Axios

在main.ts重加入以下代码

```html
import service from '@/utils/https'; //引入Axios
Vue.prototype.$https = service;      //其他页面使用axios，直接this.$http
```

在之前添加的HelloVue.vue中，添加以下代码

```html
<template>
  <div class="CopClass">
      <h2>Element UI Button</h2>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="handleSearch">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataResult } from '@/types'

@Component
export default class HelloVue extends Vue {
  
    private async handleSearch(): Promise<void> {
    const test: DataResult = await this.$https.get("singlePoetry");
    console.log("请求结果：" + test.result)
  }
}
</script>
```

如此当点击按钮【主要按钮】时，将会在控制台打印信息

![03请求接口.png](https://gitee.com/imstrive/ImageBed/raw/master/20200305/03请求接口.png)

控制台打印

![03请求结果.png](https://gitee.com/imstrive/ImageBed/raw/master/20200305/03请求结果.png)

# 补充

虽然刚才的代码可以访问接口并返回正确的数据，但是运行时一直有错误提示

![04错误提示.png](https://gitee.com/imstrive/ImageBed/raw/master/20200305/04错误提示.png)

解决办法是在src/shims-vue.d.ts文件下修改。

原代码如下：

```js
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

修改为

```js
import Vue from 'vue' ;

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue{
    $https: any; 
  }
}
```

如此this.$https便可以全局访问

# 参考

https://zhuanlan.zhihu.com/p/60952007