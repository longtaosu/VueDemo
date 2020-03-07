<template>
  <div class="CopClass">
      <!-- <h2>Element UI Button</h2>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="handleSearch">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="text">文字按钮</el-button> -->
      <Child :value1=10
            :value2=20
            :value3=30
            :value4=40
            :value5=50 />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataResult } from '@/types'
import Child from "@/components/Child.vue"

@Component({
  components: {
    Child
  }
})
export default class HelloVue extends Vue {
  
    private async handleSearch(): Promise<void> {
    const test: DataResult = await this.$https.get("singlePoetry");
    console.log("请求结果：" + test.result)
  }
}
</script>