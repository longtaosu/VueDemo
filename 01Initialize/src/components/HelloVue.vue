<template>
  <div class="CopClass">
      <h1>{{msg}}</h1>
      <h2>Element UI Button</h2>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloVue extends Vue {
  @Prop() private msg!: string;
}
</script>