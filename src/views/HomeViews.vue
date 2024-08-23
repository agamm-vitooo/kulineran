<template>
  <div class="home">
    <Navbar />
    <div class="container mx-auto px-4">
      <Hero />

      <div class="flex justify-between items-center mt-4">
        <div>
          <h2 class="text-2xl font-semibold">
            Best
            <strong class="font-bold">Foods</strong>
          </h2>
        </div>
        <div>
          <router-link to="/foods" class="btn btn-success flex items-center">
            <b-icon-eye class="mr-2"></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
        <div v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue';


export default {
  name: 'HomeViews',
  components:{
    Navbar,
    Hero,
  }
}
</script>

<style>

</style>