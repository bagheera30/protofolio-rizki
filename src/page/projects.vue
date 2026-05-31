<script setup lang="ts">
import { ref } from "vue";
import { Github } from "lucide-vue-next";
import Projek from "../components/projek.vue";
import Repo from "../components/repo.vue";

const activeTab = ref("projects");
</script>

<template>
  <section
    class="w-full min-h-screen px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-slate-950 via-black to-slate-950"
  >
    <!-- Header -->
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
      >
        ✨ Projects I've Worked On
      </h2>

      <p class="mt-5 text-slate-400 text-lg">
        Here are some examples of my previous work.
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center mt-12">
      <div
        class="flex bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg"
      >
        <button
          @click="activeTab = 'projects'"
          :class="[
            'px-8 py-3 font-medium transition-all duration-300',
            activeTab === 'projects'
              ? 'bg-rose-500 text-white'
              : 'text-slate-400 hover:text-white',
          ]"
        >
          Featured Projects
        </button>

        <button
          @click="activeTab = 'repos'"
          :class="[
            'px-8 py-3 font-medium transition-all duration-300 flex items-center gap-2',
            activeTab === 'repos'
              ? 'bg-rose-500 text-white'
              : 'text-slate-400 hover:text-white',
          ]"
        >
          <Github class="w-4 h-4" />
          GitHub Repos
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-12 w-full">
      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'projects'" key="projects">
          <Projek />
        </div>

        <div v-else key="repos">
          <Repo />
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
