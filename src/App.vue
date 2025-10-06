<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div
    class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white"
  >
    <div class="pb-20">
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>
