<template>
  <div class="shadow-lg bg-white rounded-lg overflow-hidden">
    <img :src="'assets/' + product.gambar" class="w-full h-48 object-cover" alt="Product Image" />
    <div class="p-4">
      <h5 class="text-lg font-medium mb-2">{{ product.nama }}</h5>
      <p class="text-gray-700 mb-4">Harga: Rp. {{ product.harga }}</p>
      <router-link class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300" :to="'/foods/' + product.id">
        <b-icon-cart class="mr-2"></b-icon-cart> Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style scoped>
/* No additional styles are needed since Tailwind CSS handles the styling */
</style>
