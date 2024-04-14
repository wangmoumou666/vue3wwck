import http from "@/utils/http";

/**
 * @description: 获取用户相关的订单数据
 * @params: {
 *   orderState:0,
 *   page:1,
 *   pageSize:2
 * }
 * @return {*}
 */
export const getUserOrder = (params) => {
  return http.get("/member/order", { params: params });
};
