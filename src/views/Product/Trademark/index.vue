<template>
    <el-card>
        <!-- 卡片顶部的添加品牌按钮 -->
        <el-button type="primary" icon="Plus">添加品牌</el-button>
        <!-- 表格组件：用于展示已有的品牌数据 -->
        <el-table border style="margin: 10px 0px;" :data="trademarkRecords">
            <el-table-column type=index label="序号" width="80px" align="center">
            </el-table-column>
            <el-table-column prop="tmName" label="品牌名称">
            </el-table-column>
            <el-table-column label="品牌LOGO">
                <template v-slot="{ row }">
                    <img :src="row.logoUrl" alt="" style="width: 100px;height: 100px;">
                </template>
            </el-table-column>
            <el-table-column label="品牌操作">
                <template v-slot="{}">
                    <el-button type="warning" size="small">
                        <el-icon>
                            <Edit />
                        </el-icon>
                    </el-button>
                    <el-button type="danger" size="small" icon="delete"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页器组件 -->
        <el-pagination v-model:current-page="curPage" v-model:page-size="pageSize" :page-sizes="[3, 5, 7, 9]" :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total" />
    </el-card>
</template>

<script setup lang="ts">
import { getTrademark } from '@/api/product/trademark';
import type { Records, TrademarkResponseData } from '@/api/product/trademark/type';
import { onMounted, ref } from 'vue';

// 当前页码
let curPage = ref<number>(1)
// 每一页展示的数据条数
let pageSize = ref(3)
// 数据总数
let total = ref(0)
// 已有品牌的数据
let trademarkRecords = ref<Records>([]);

const handleTrademark = async () => { 
    const res: TrademarkResponseData = await getTrademark(curPage.value, pageSize.value);
    if (res.code === 200) {
        total.value = res.data.total
        trademarkRecords.value = res.data.records
    }
}
onMounted(() => {
    handleTrademark()
})
</script>

<style scoped></style>