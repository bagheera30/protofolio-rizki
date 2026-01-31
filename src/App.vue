<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div
    class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen text-slate-100"
  >
    <div class="pb-20">
      <Navbar />
    </div>
    <div class="border-b border-slate-800/50">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
