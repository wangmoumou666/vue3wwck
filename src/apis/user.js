import http from "@/utils/http";

/**
 * @description: 根据user对象进行登录
 * @param {Number} id 分类id
 * @return {*}
 */
export function loginAPI(user) {
  return http.post("/login", user);
}
/**
 * @description: 获取用户可能喜欢的商品列表
 * @param {{ limit = 4 }}
 * @return {*}
 */
export const getLikeListAPI = ({ limit = 4 }) => {
  return http.get("/goods/relevant", { params: { limit } });
};
