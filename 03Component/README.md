# 创建组件

在src\components下，创建Child.vue，该组件作为子组件，具体代码如下

```html
<template>
    <div>
        <div width="10%">
            <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">格式化 Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <el-slider v-model="value5" disabled></el-slider>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Child extends Vue {
    @Prop({default: 10}) value1!: number;
    @Prop({default: 50}) value2!: number;
    @Prop({default: 36}) value3!: number;
    @Prop({default: 48}) value4!: number;
    @Prop({default: 42}) value5!: number;

}
</script>
```

Child组件中引入了5个Slider，并且默认值分别为：10、50、36、48、42。

为了看到组件的显示效果，修改router/index.ts文件

```js
import Child from '@/components/Child.vue'

  {
    path:'/test',
    name:'test',
    component: Child
  }
```

查看显示效果如图

![01子组件.png](https://gitee.com/imstrive/ImageBed/raw/master/20200307/01子组件.png)

可以看到，5个Slider根据设置的默认值显示，并且默认的属性分别为value1、value2、value3、value4、value5。



# 引用组件

之前我们创建了views/HelloVue.vue，代码如下

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
```

显示效果如下

![02原效果图.png](https://gitee.com/imstrive/ImageBed/raw/master/20200307/02原效果图.png)

现在我们希望将刚才创建的Child组件引入显示，并向子组件传值，修改显示效果。

添加如下代码

```js
import Child from "@/components/Child.vue"

@Component({
  components: {
    Child
  }
})
```

如此我们便完成了组件的引入，引用组件并修改显示效果

```html
<template>
  <div class="CopClass">
      <Child :value1=10
            :value2=20
            :value3=30
            :value4=40
            :value5=50 />
  </div>
</template>
```

我们将原来的默认值：10、50、36、48、42，分别对应的修改为了：10、20、30、40、50。

运行并查看效果

![03新效果.png](https://gitee.com/imstrive/ImageBed/raw/master/20200307/03新效果.png)