<script setup lang="ts">
import { Award, ExternalLink } from "lucide-vue-next";

const certificates = [
  {
    title: "Second Winner - Hackathon FindIT 2024",
    org: "FindIT 2024",
    year: "2024",
    id: "FINDIT-2024",
    link: "https://findit-hackathon.com/cert/12345",
  },
  {
    title: "Top 10 Finalist - Gemastik XVI",
    org: "Kemendikbud",
    year: "2023",
    id: "GEMASTIK-2023",
    link: "https://gemastik.id/cert/abcdef",
  },
  {
    title: "Completion - Backend Developer",
    org: "Dicoding Indonesia",
    year: "2024",
    id: "DICODING-2024",
    link: "https://dicoding.com/cert/xxxx",
  },
];
</script>

<template>
  <section class="bg-[#050714] text-white py-16">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-red-500 mb-10 text-center">
        Certificates & Achievements
      </h2>

      <div class="relative border-l border-blue-500 pl-6 space-y-10">
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="relative group"
        >
          <!-- Timeline Dot -->
          <span
            class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-300"
          ></span>

          <!-- Content -->
          <div
            class="bg-[#0b0e1b] rounded-lg p-5 hover:bg-[#11162b] transition-colors duration-300"
          >
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-semibold text-white">
                {{ cert.title }}
              </h3>
              <a
                :href="cert.link"
                target="_blank"
                class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              >
                View <ExternalLink class="w-4 h-4" />
              </a>
            </div>

            <div class="flex items-center gap-2 mt-2 text-gray-400 text-sm">
              <Award class="w-4 h-4 text-blue-400" />
              <span>{{ cert.org }}</span>
            </div>

            <p class="text-sm text-gray-400 mt-1">{{ cert.year }}</p>

            <p
              class="inline-block mt-3 text-xs bg-[#1b223c] text-gray-300 px-3 py-1 rounded-md tracking-wider"
            >
              ID: {{ cert.id }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
