import http from "@/utils/http";

// 获取详情接口
export const getCheckInfoAPI = () => {
  return http.get("/member/order/pre");
};
// 创建订单
export const createOrderAPI = (data) => {
  return http.post("/member/order", data);
};
