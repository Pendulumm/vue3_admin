<template>
    <!-- 顶部左侧的静态 -->
    <el-icon style="margin-right: 10px;" @click="collapse">
        <component :is="layoutSettingStore.isCollapse ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧的面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包屑动态展示路由的名字和标题 -->
        <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <!-- 图标 -->
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑展示匹配路由的标题 -->
            <span style="margin: 0px 5px;">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/stores/modules/setting';
import { useRoute } from 'vue-router';

const route = useRoute()
const layoutSettingStore = useLayoutSettingStore()
const collapse = () => {
    layoutSettingStore.isCollapse = !layoutSettingStore.isCollapse
}

</script>
<script lang="ts">
export default {
    name: 'Breadcrumb'
}
</script>
<style scoped></style>