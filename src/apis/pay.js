import http from "@/utils/http";

// 获取支付订单详情接口
export const getOrderAPI = (id) => {
  return http.get(`/member/order/${id}`);
};
