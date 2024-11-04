<template>
    <div class="logo">
        <img :src="setting.logo" alt="" v-if="!setting.hideLogo">
        <p v-show="!collapse">{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting';

defineProps<{
    collapse: boolean
}>()
</script>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
    }
}
</style>