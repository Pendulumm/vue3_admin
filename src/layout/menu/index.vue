<template>
    <template v-for="(item) in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <template v-if="!item.children">
            <el-menu-item v-if="!item.meta!.hidden" :index="item.path" @click="goTo">
                <el-icon>
                    <component :is="item.meta!.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta!.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 只有一个子路由 -->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item v-if="!item.meta!.hidden" :index="item.children[0].path" @click="goTo">
                <el-icon>
                    <component :is="item.children[0].meta!.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta!.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 大于一个子路由 -->
        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta!.icon"></component>
                </el-icon>
                <span>{{ item.meta!.title }}</span>
            </template>
            <Menu$ :menuList=item.children></Menu$>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { useRouter, type RouteRecordRaw } from 'vue-router';
defineProps<{
    menuList: RouteRecordRaw[]
}>()
const router = useRouter()
const goTo = (vc: any) => {
    // router.push(vc.indexPath.join('/'))
    router.push(vc.index)
}

</script>
<script lang="ts">
export default {
    name: 'Menu$'
}
</script>

<style scoped></style>