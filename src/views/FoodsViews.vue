<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4">
      <div class="flex justify-between mt-4">
        <div>
          <h2 class="text-2xl font-bold">
            Daftar
            <strong class="text-red-500">Makanan</strong>
          </h2>
        </div>
      </div>

      <div class="flex justify-between mt-3">
        <div class="w-full">
          <div class="flex mb-3">
            <input
              v-model="search"
              type="text"
              class="form-input w-full px-4 py-2 border rounded-l-md"
              placeholder="Cari Makanan Kesukaan Anda .."
              aria-label="Cari"
              @keyup="searchFood"
            />
            <div class="bg-gray-200 rounded-r-md p-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h4m1 0h-6m2 4h2a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2h1m5-16.38c2.21 1.28 4 4.2 4 7.38s-1.79 6.1-4 7.38m-4-7.38c-2.21-1.28-4-4.2-4-7.38s1.79-6.1 4-7.38m4 7.38V9m-8 6v2m8 0v2m-8-6v-4a8 8 0 1 1 16 0v4"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div v-for="product in products" :key="product.id" class="mt-4">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
/* Tidak perlu mengubah apapun jika menggunakan Tailwind di seluruh proyek. */
</style>
