<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="setFullScreen"></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" alt="" style="width: 24px;height: 24px;margin: 0px 10px; border-radius: 50%;">
    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/stores/modules/setting';
import { useUserStore } from '@/stores/modules/user';
import { useRoute, useRouter } from 'vue-router';

const layoutSettingStore = useLayoutSettingStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const setFullScreen = () => {
    let full = document.fullscreenElement
    // 切换全屏模式
    if (!full) {
        // 全屏
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}
const logout = async () => {
    await userStore.logout();
    router.replace({
        path: '/login',
        query: { redirect: route.path }
    });
}
</script>
<script lang="ts">
export default {
    name: 'Setting'
}
</script>
<style scoped></style>