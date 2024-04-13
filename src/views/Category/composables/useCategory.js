import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => getCategory(route.params.id));

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
