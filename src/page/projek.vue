<script setup lang="ts">
import { ref } from "vue";
import { Github } from "lucide-vue-next";
import { projects, stackLogos } from "../data/datas";
import ProjectModal from "../components/projekDetail.vue";

const selectedProject = ref<any | null>(null);
const isModalOpen = ref(false);

const openModal = (project: any) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedProject.value = null;
  isModalOpen.value = false;
};
</script>

<template>
  <div class="bg-gradient-to-b from-black via-neutral-900 max-w-7xl to-black">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 hover:shadow-red-600/40 transition-all duration-500 flex flex-col"
      >
        <h3
          class="text-xl pt-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-center text-transparent font-bold mb-2"
        >
          {{ project.title }}
        </h3>

        <p class="text-gray-400 mb-4 text-sm line-clamp-3">
          {{ project.desc }}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
          <div
            v-for="tech in project.stack"
            :key="tech"
            class="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-lg"
          >
            <img
              v-if="stackLogos[tech]"
              :src="stackLogos[tech]"
              alt="logo"
              class="w-5 h-5"
            />
            <span class="text-xs text-gray-200 font-medium">{{ tech }}</span>
          </div>
        </div>

        <div
          class="flex justify-between items-center mt-auto pt-4 border-t border-gray-700"
        >
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="flex items-center gap-2 text-gray-200 hover:text-white transition"
          >
            <Github class="w-5 h-5" />
            <span class="text-sm">Github</span>
          </a>

          <button
            class="text-sm text-blue-400 font-medium hover:underline"
            @click="openModal(project)"
          >
            Lihat Detail →
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal
      :isOpen="isModalOpen"
      :project="selectedProject"
      :stackLogos="stackLogos"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
