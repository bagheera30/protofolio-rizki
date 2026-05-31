<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
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
    <div
      class="modal-box bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3
          class="text-xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
        >
          {{ project?.title }}
        </h3>
        <button
          class="p-2 rounded-lg hover:bg-slate-800 transition"
          @click="$emit('close')"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Deskripsi -->
      <p class="text-slate-300 mb-4">{{ project?.desc }}</p>

      <!-- Stack -->
      <div class="flex flex-wrap gap-2 mb-6">
        <div
          v-for="tech in project?.stack"
          :key="tech"
          class="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg"
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
          class="btn btn-sm bg-rose-500 border-none text-white hover:bg-rose-600"
        >
          <Eye class="w-4 h-4 mr-2" /> View Projek
        </a>
        <a
          v-if="project?.github"
          :href="project.github"
          target="_blank"
          class="btn btn-sm btn-outline border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
        >
          <Github class="w-4 h-4 mr-2" /> Github
        </a>
        <button
          class="btn btn-sm bg-slate-800 border-none text-slate-200 hover:bg-slate-700"
          @click="$emit('close')"
        >
          Tutup
        </button>
      </div>
    </div>

    <form method="dialog" class="modal-backdrop" @click="$emit('close')">
      <button>close</button>
    </form>
  </dialog>
</template>
<style scoped>
.modal-backdrop {
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.65);
}
</style>
