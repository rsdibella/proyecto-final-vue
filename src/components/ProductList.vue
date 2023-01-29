<!-- <div class="product-holder">
    <div class="loading" v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @goDetail="goDetail"
    />
  </div> -->
<template>
  <div class="product-holder">
    <div class="loading" v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @goGoDetail="goDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { Product } from "@/models/product";
import useProducts from "../composables/useProducts";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ProductList",
  components: {
    ProductItem,
  },
  setup() {
    const { products, fetchProducts, isLoading } = useProducts();
    const router = useRouter();

    fetchProducts();

    return {
      products,
      isLoading,
      goDetail: (product: Product) => {
        router.push({ name: "detail", params: { id: product.id } });
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
