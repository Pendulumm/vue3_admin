<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ collapse: layoutSettingStore.isCollapse }">
            <Logo :collapse="layoutSettingStore.isCollapse"></Logo>
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <!-- 菜单组件 -->
                <el-menu background-color="#001529" text-color="white" :default-active="route.path" :collapse="layoutSettingStore.isCollapse">
                    <!-- 根据路由动态生成菜单 -->
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabBar" :class="{ collapse: layoutSettingStore.isCollapse }">
            <!-- layout组件的顶部导航tabbar -->
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区 -->
        <div class="layout_main" :class="{ collapse: layoutSettingStore.isCollapse }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user';
import { useRoute } from 'vue-router';
import Logo from './Logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './Tabbar/index.vue'
import { useLayoutSettingStore } from '@/stores/modules/setting';

const userStore = useUserStore();
const route = useRoute();
const layoutSettingStore = useLayoutSettingStore()

</script>

<script lang="ts">
export default {
    name: 'Layout'
}
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;


    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-backgroundColor;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.collapse {
            width: $base-menu-min-width;
        }
    }

    .layout_tabBar {
        width: calc(100% - $base-menu-width);
        height: $base-tabBar-height;
        position: fixed;
        top: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.collapse {
            left: $base-menu-min-width;
            width: calc(100% - $base-menu-min-width);
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabBar-height);
        // background-color: yellowgreen;
        top: $base-tabBar-height;
        left: $base-menu-width;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.collapse {
            left: $base-menu-min-width;
            width: calc(100% - $base-menu-min-width);
        }
    }
}
</style>