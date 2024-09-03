<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container mx-auto px-4">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" class="mx-auto mb-4 w-72" />
          <h2 class="text-3xl font-bold text-green-600">Sukses!!</h2>
          <h4 class="text-lg text-gray-700 mt-2">Pesanan Anda segera diproses <br> Selamat Menunggu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "PesananSukses",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* Anda bisa menambahkan kustomisasi CSS tambahan di sini */
</style>
