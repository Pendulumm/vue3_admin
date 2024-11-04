// 品牌管理模块接口
import request from "@/utils/request";
import type { TrademarkResponseData } from "./type";

enum API {
    TRADEMARK_URL = '/admin/product/baseTrademark'
}

// 获取已有品牌的接口
export const getTrademark = (page: number, limit: number) => request<any, TrademarkResponseData>({
    method: 'get',
    url: `${API.TRADEMARK_URL}/${page}/${limit}`,
})
