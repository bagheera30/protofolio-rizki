<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import menus from "../data/menu";
import { Mail } from "lucide-vue-next";
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-cyan-950/70 backdrop-blur-sm shadow-md text-white'
        : 'bg-red-600 text-white'
    "
  >
    <div class="navbar px-6">
      <!-- Brand -->
      <div class="flex-1">
        <a
          href="/"
          class="text-2xl font-bold tracking-wide hover:text-gray-200 transition"
        >
          Rizki Alfian
        </a>
      </div>

      <!-- Menu Desktop -->
      <div class="hidden md:flex font-bold">
        <ul class="menu menu-horizontal px-1 space-x-4 text-lg">
          <li v-for="menu in menus" :key="menu.name">
            <a :href="menu.href" class="hover:text-gray-200 transition">
              {{ menu.name }}
            </a>
          </li>
        </ul>
        <button class="ml-1.5 b btn-circle">
          <Mail :size="27" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="dropdown dropdown-end md:hidden">
        <label tabindex="0" class="btn btn-ghost text-white">☰</label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-red-600 rounded-box w-40"
        >
          <li v-for="menu in menus" :key="menu.name">
            <a :href="menu.href">{{ menu.name }}</a>
          </li>
          <button class="pl-2.5 pt-2.5" href="">
            <Mail :size="24" />
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>
