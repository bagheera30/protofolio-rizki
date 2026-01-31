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
    class="fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg text-slate-100'
        : 'bg-slate-950 text-slate-100'
    "
  >
    <div class="navbar px-6 pt-3">
      <!-- Brand -->
      <div class="flex-1">
        <a
          href="/"
          class="text-2xl font-semibold tracking-wide hover:text-amber-400 transition duration-300"
        >
          Rizki Alfian
        </a>
      </div>

      <!-- Menu Desktop -->
      <div class="hidden md:flex font-medium">
        <ul class="menu menu-horizontal px-1 space-x-6 text-base">
          <li v-for="menu in menus" :key="menu.name">
            <a 
              :href="menu.href" 
              class="text-slate-300 hover:text-amber-400 transition duration-300 relative group"
            >
              {{ menu.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu -->
      <div class="dropdown dropdown-end md:hidden">
        <label tabindex="0" class="btn btn-ghost text-slate-200">☰</label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 p-3 shadow-xl bg-slate-800 rounded-xl w-48 border border-slate-700"
        >
          <li v-for="menu in menus" :key="menu.name">
            <a :href="menu.href" class="text-slate-200 hover:text-amber-400 hover:bg-slate-700">{{ menu.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
