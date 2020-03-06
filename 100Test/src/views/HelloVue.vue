<template>
  <div class="CopClass">
      <h2>Element UI Button</h2>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="handleSearch()">主要按钮</el-button>
      <el-button type="success" @click="handleSearch()">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DataResult } from '@/types'

@Component
export default class HelloVue extends Vue {
  //@Prop() private msg!: string;


  mounted(): void {
    this.handleSearch1();
  }

  private async handleSearch(): Promise<void> {
    const test: DataResult = await this.$https.get("singlePoetry");

    console.log(test.message)
    console.log(test.result)
        console.log(test)
    // const data: DataResult = this.$https.get("",{});
    // console.log(data);
    // console.log(...data.message);
    // console.log(data.result);
  }

    private handleSearch1(): void {
    const test: DataResult = this.$https.get("singlePoetry");
    console.log(test)

    // const data: DataResult = this.$https.get("",{});
    // console.log(data);
    // console.log(...data.message);
    // console.log(data.result);
  }
}


</script>