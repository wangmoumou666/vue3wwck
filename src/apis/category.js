import http from "@/utils/http";

/**
 * @description: 根据id获得一级分类对象信息
 * @param {*} id 分类id
 * @return {*}
 */
export function getTopCategoryAPI(id) {
  return http.get("/category", { params: { id } });
}

/**
 * @description: 根据id获得二级分类对象信息
 * @param {*} id 分类id
 * @return {*}
 */
export function getCategoryFilterAPI(id) {
  return http.get("/category/sub/filter", { params: { id } });
}

/**
 * @description: 获取二级分类商品列表
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return http.post("/category/goods/temporary", data);
};
