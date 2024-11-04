<template>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <!-- 渲染layout一级路由组件的子路由 -->
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/stores/modules/setting';
import { nextTick, ref, watch } from 'vue';

let flag = ref(true)

const layoutSettingStore = useLayoutSettingStore()
watch(() => layoutSettingStore.refresh, () => {
    // 点击刷新按钮，路由组件需要销毁
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})

</script>
<script lang="ts">

export default {
    name: 'Main$'
}
</script>
<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0)
}

.fade-enter-active {
    transition: all .3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1)
}
</style>