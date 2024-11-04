import { defineStore } from "pinia";

export const useLayoutSettingStore = defineStore('Setting', {
    state: () => {
        return {
            isCollapse: false,  // 用于控制菜单折叠还是收起
            refresh: false,     // 用户控制刷新效果
        }
    }
})