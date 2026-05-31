<script setup lang="ts">
import { certificates } from "../data/datas";
</script>

<template>
  <section
    class="bg-gradient-to-br from-slate-950 via-black to-slate-950 py-24"
  >
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
        >
          Certificates & Achievements
        </h2>

        <p class="mt-4 text-slate-400 max-w-2xl mx-auto">
          Professional certifications and achievements that showcase my
          continuous learning journey in software development, machine learning,
          and system engineering.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="group bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-rose-500/40 hover:-translate-y-2 transition-all duration-500"
        >
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img
              :src="cert.img"
              :alt="cert.title"
              class="w-full h-56 object-cover transition duration-700 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            ></div>

            <span
              class="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-500/90 text-white text-xs font-medium"
            >
              {{ cert.year }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <Award class="w-4 h-4 text-rose-400" />
              <span class="text-sm text-slate-400">
                {{ cert.org }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
              {{ cert.title }}
            </h3>

            <div
              class="inline-flex items-center rounded-lg bg-slate-800 border border-slate-700 px-3 py-1 text-xs text-slate-300"
            >
              {{ cert.id }}
            </div>

            <a
              :href="cert.link"
              target="_blank"
              class="mt-5 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-200 hover:border-rose-500/40 hover:text-rose-400 transition"
            >
              <span>View Certificate</span>

              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.group:hover {
  box-shadow: 0 0 30px rgba(244, 63, 94, 0.15);
}
</style>
