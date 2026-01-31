<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import { useTheme } from "./composables/useTheme";

useTheme();
</script>

<template>
  <div
    class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white"
  >
    <div class="pb-20">
      <Navbar />
    </div>
    <div class="border-b border-gray-800">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
