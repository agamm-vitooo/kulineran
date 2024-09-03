
<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg class="block h-6 w-6" :class="{'hidden': isOpen, 'block': !isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" :class="{'block': isOpen, 'hidden': !isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <router-link to="/" class="flex-shrink-0 text-2xl font-bold">Kulineran</router-link>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-4">
            <router-link class="nav-link text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" to="/">Home</router-link>
            <router-link class="nav-link text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" to="/foods">Foods</router-link>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2">
          <router-link to="/keranjang"><img src="../assets/logo/cart.png" alt="cart" width="60%">
            <!-- <span class="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded ml-2">
              {{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}
            </span> -->
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu, toggle class hidden to show -->
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link class="nav-link block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium" to="/">Home</router-link>
        <router-link class="nav-link block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium" to="/foods">Foods</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
</style>
