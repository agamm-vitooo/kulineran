<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="hidden md:block">
      <div class="flex mt-4">
        <div class="w-full md:w-1/2">
          <div class="flex h-full">
            <div class="m-auto text-center md:text-left">
              <h2 class="text-2xl font-bold">
                Delicious Food Menu,
                <br />in Your Gadget
              </h2>
              <p class="mt-4">Ayo segera pilih dan pesan makanan favorit Anda</p>
              <router-link
                class="btn btn-lg btn-success inline-flex items-center bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4"
                to="/foods"
              >
                <b-icon-arrow-right></b-icon-arrow-right> Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <img src="../assets/images/hero.jpg" class="w-full" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="block md:hidden">
      <div class="flex flex-col mt-4">
        <div class="mb-3 w-full">
          <img src="../assets/images/hero.jpg" class="w-full" loading="lazy" />
        </div>
        <div class="w-full">
          <div class="flex h-full">
            <div class="text-left">
              <h2 class="text-2xl font-bold">
                Delicious Food Menu,
                <br />in Your Gadget
              </h2>
              <p class="mt-4">Ayo segera pilih dan pesan makanan favorit Anda</p>
              <button
                class="btn btn-lg btn-success inline-flex items-center bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4"
              >
                <b-icon-arrow-right></b-icon-arrow-right> Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>
