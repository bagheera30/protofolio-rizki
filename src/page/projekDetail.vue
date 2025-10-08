<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../data/datas";

const route = useRoute();
const project = ref(null);

onMounted(() => {
  project.value = projects.find((p) => p.id == route.params.id);
});
</script>

<template>
  <div class="p-6">
    <RouterLink to="/" class="text-gray-500 hover:text-black"
      >← Back</RouterLink
    >

    <div v-if="project" class="mt-6">
      <h1 class="text-3xl font-bold">{{ project.title }}</h1>
      <p class="text-gray-600 mt-2">{{ project.description }}</p>
    </div>

    <p v-else class="text-red-500 mt-6">Project not found</p>
  </div>
</template>
