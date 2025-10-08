<script setup lang="ts">
import { ref } from "vue";
import { Github } from "lucide-vue-next";
import Projek from "../page/projek.vue";
import Repo from "../page/repo.vue";
const activeTab = ref("projects");
</script>

<template>
  <section class="flex flex-col items-center mt-10 px-4">
    <!-- Judul -->
    <div class="text-center mb-20">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
      >
        ✨ Projek yang Pernah Dikerjakan
      </h2>
      <p class="text-white mt-2">ini contoh</p>
    </div>

    <!-- Tabs -->
    <div
      class="flex bg-[#0e1628] text-sm rounded-lg border border-gray-700 overflow-hidden"
    >
      <!-- Tab 1 -->
      <button
        @click="activeTab = 'projects'"
        :class="[
          'px-6 py-3 font-medium transition-colors flex items-center gap-2',
          activeTab === 'projects'
            ? 'bg-[#1b2437] text-gray-100'
            : 'text-gray-400 hover:text-gray-200',
        ]"
      >
        Featured Projects
      </button>

      <!-- Tab 2 -->
      <button
        @click="activeTab = 'repos'"
        :class="[
          'px-6 py-3 font-medium transition-colors flex items-center gap-2',
          activeTab === 'repos'
            ? 'bg-[#1b2437] text-gray-100'
            : 'text-gray-400 hover:text-gray-200',
        ]"
      >
        <Github class="w-4 h-4" />
        GitHub Repos
      </button>
    </div>

    <!-- Konten dinamis -->
    <transition name="fade" mode="out-in">
      <div
        v-if="activeTab === 'projects'"
        key="projects"
        class="mt-6 text-center text-gray-400"
      >
        <Projek />
      </div>

      <div v-else key="repos" class="mt-6 text-center text-gray-400">
        <Repo />
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
