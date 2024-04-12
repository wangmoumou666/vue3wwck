import http from "@/utils/http";

export function getCategoryAPI() {
  return http.get("home/category/head");
}
