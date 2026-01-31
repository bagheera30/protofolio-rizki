<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import menus from "../data/menu";
import { Mail, Palette } from "lucide-vue-next";
import { useTheme } from "../composables/useTheme";

const isScrolled = ref(false);
const { themeColor, applyTheme, themeOptions } = useTheme();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const themeColors = {
  red: '#dc2626',
  blue: '#3b82f6',
  purple: '#9333ea',
  green: '#22c55e',
  pink: '#ec4899',
  orange: '#f97316',
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
    :style="{
      backgroundColor: isScrolled ? 'rgba(30, 58, 138, 0.7)' : 'var(--color-primary)',
    }"
    :class="isScrolled ? 'backdrop-blur-sm shadow-md text-white' : 'text-white'"
  >
    <div class="navbar px-6 pt-3">
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
      </div>

      <!-- Theme Selector -->
      <div class="dropdown dropdown-end hidden md:block">
        <button
          tabindex="0"
          class="btn btn-ghost text-white hover:bg-white/10"
          title="Change Theme Color"
        >
          <Palette size="20" />
        </button>
        <div
          tabindex="0"
          class="dropdown-content menu p-4 shadow bg-gray-900 rounded-box w-56 border border-gray-700"
        >
          <p class="px-3 py-2 text-sm font-semibold text-gray-300 mb-2">Theme Color</p>
          <div class="grid grid-cols-3 gap-3 px-3">
            <button
              v-for="(color, name) in themeColors"
              :key="name"
              @click="applyTheme(name)"
              :style="{ backgroundColor: color }"
              :class="[
                'w-10 h-10 rounded-lg transition-all border-2',
                themeColor === name ? 'border-white scale-110' : 'border-transparent hover:scale-105',
              ]"
              :title="`${name.charAt(0).toUpperCase() + name.slice(1)} Theme`"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Theme Selector -->
      <div class="dropdown dropdown-end md:hidden">
        <button
          tabindex="0"
          class="btn btn-ghost text-white"
        >
          <Palette size="20" />
        </button>
        <div
          tabindex="0"
          class="dropdown-content menu p-4 shadow bg-gray-900 rounded-box w-48 border border-gray-700"
        >
          <p class="px-2 py-1 text-xs font-semibold text-gray-300 mb-2">Theme</p>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="(color, name) in themeColors"
              :key="name"
              @click="applyTheme(name)"
              :style="{ backgroundColor: color }"
              :class="[
                'w-8 h-8 rounded-lg transition-all border-2',
                themeColor === name ? 'border-white' : 'border-transparent',
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="dropdown dropdown-end md:hidden">
        <label tabindex="0" class="btn btn-ghost text-white">☰</label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-40"
        >
          <li v-for="menu in menus" :key="menu.name">
            <a :href="menu.href">{{ menu.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
