<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
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
              <li class="breadcrumb-item text-gray-500" aria-current="page">Keranjang</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2 class="text-2xl font-bold mb-4">
            Keranjang
            <strong>Saya</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table-auto w-full text-left text-sm">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Foto</th>
                  <th class="px-4 py-2">Makanan</th>
                  <th class="px-4 py-2">Keterangan</th>
                  <th class="px-4 py-2">Jumlah</th>
                  <th class="px-4 py-2">Harga</th>
                  <th class="px-4 py-2">Total Harga</th>
                  <th class="px-4 py-2">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id" class="border-b">
                  <td class="px-4 py-2">{{ index + 1 }}</td>
                  <td class="px-4 py-2">
                    <img :src="'../assets/images/' + keranjang.products.gambar" class="w-32 h-32 object-cover rounded-lg shadow" />
                  </td>
                  <td class="px-4 py-2">
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td class="px-4 py-2">{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                  <td class="px-4 py-2">{{ keranjang.jumlah_pemesanan }}</td>
                  <td class="px-4 py-2 text-right">Rp. {{ keranjang.products.harga }}</td>
                  <td class="px-4 py-2 text-right">
                    <strong>Rp. {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}</strong>
                  </td>
                  <td class="px-4 py-2 text-center text-red-500 cursor-pointer">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" class="px-4 py-2 text-right font-bold">
                    Total Harga:
                  </td>
                  <td colspan="2" class="px-4 py-2 text-right font-bold">
                    Rp. {{ totalHarga }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end mt-8">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mb-4">
              <label for="nama" class="block text-gray-700 font-medium mb-2">Nama:</label>
              <input type="text" class="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" v-model="pesan.nama" />
            </div>
            <div class="form-group mb-4">
              <label for="noMeja" class="block text-gray-700 font-medium mb-2">Nomor Meja:</label>
              <input type="text" class="form-control w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" v-model="pesan.noMeja" />
            </div>

            <button type="submit" class="btn bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 float-right" @click="checkout">
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
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Sukses Hapus Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update Data keranjang
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            // Hapus Semua Keranjang 
            this.keranjangs.map(function (item) {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((error) => console.log(error));
            });

            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Sukses Dipesan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama dan Nomor Meja Harus diisi", {
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
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style scoped>
/* Anda bisa menambahkan kustomisasi CSS tambahan di sini */
</style>
