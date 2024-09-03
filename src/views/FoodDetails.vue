<template>
  <div class="food-detail">
    <Navbar />
    <div class="container mx-auto px-4">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex space-x-2 text-sm text-gray-600">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-gray-700 hover:text-gray-900">Foods</router-link>
              </li>
              <li class="breadcrumb-item text-gray-500" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'../assets/images/' + product.gambar" class="img-fluid shadow-lg rounded-lg" />
        </div>
        <div class="col-md-6">
          <h2 class="text-2xl font-bold mb-2">
            {{ product.nama }}
          </h2>
          <hr class="my-4" />
          <h4 class="text-xl font-semibold mb-4">
            Harga: 
            <span class="text-red-500">Rp. {{ product.harga }}</span>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mb-4">
              <label for="jumlah_pemesanan" class="block text-gray-700 font-medium mb-2">Jumlah Pesan</label>
              <input type="number" class="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group mb-4">
              <label for="keterangan" class="block text-gray-700 font-medium mb-2">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Keterangan spt : Pedes, Nasi Setengah .."
              ></textarea>
            </div>

            <button type="submit" class="btn bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang"})
            this.$toast.success("Sukses Masuk Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
/* Anda bisa menambahkan kustomisasi CSS tambahan di sini */
</style>
