<template>
    <svg :style="{ width, height }" aria-hidden="true">
        <use :href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/* interface Props {
    prefix?: string,
    name: string,
    color?: string,
}
const props = withDefaults(defineProps<Props>(), {
    prefix: 'icon',
    color: '#333'
}) */

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#333',
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})


const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const color = computed(() => props.color)
</script>

<style scoped></style>