<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Eye, Github, X } from "lucide-vue-next";

const props = defineProps<{
  project: any | null;
  stackLogos: Record<string, string>;
  isOpen: boolean;
}>();

const emit = defineEmits(["close"]);
</script>

<template>
  <dialog v-if="isOpen" open class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-gray-900 text-gray-100">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3
          class="text-xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
        >
          {{ project?.title }}
        </h3>
        <button class="btn btn-sm btn-circle btn-ghost" @click="$emit('close')">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Deskripsi -->
      <p class="text-gray-400 mb-4">{{ project?.desc }}</p>

      <!-- Stack -->
      <div class="flex flex-wrap gap-2 mb-6">
        <div
          v-for="tech in project?.stack"
          :key="tech"
          class="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg"
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

      <!-- Link -->
      <div class="flex justify-end gap-3">
        <a
          v-if="project?.link"
          :href="project.link"
          target="_blank"
          class="btn btn-sm btn-outline border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white"
        >
          <Eye class="w-4 h-4 mr-2" /> View Projek
        </a>
        <a
          v-if="project?.github"
          :href="project.github"
          target="_blank"
          class="btn btn-sm btn-outline border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
        >
          <Github class="w-4 h-4 mr-2" /> Github
        </a>
        <button class="btn btn-sm" @click="$emit('close')">Tutup</button>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop" @click="$emit('close')">
      <button>close</button>
    </form>
  </dialog>
</template>
