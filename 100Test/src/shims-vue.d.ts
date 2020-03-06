//https://cn.vuejs.org/v2/guide/typescript.html#%E5%A2%9E%E5%BC%BA%E7%B1%BB%E5%9E%8B%E4%BB%A5%E9%85%8D%E5%90%88%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8
//https://zhuanlan.zhihu.com/p/60952007
import Vue from 'vue' ;

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}


declare module "vue/types/vue" {
  interface Vue{
    $urls: any;
    $https: any; 
  }
}