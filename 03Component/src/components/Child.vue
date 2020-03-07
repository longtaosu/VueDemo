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