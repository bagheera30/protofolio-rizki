<script setup lang="ts">
import { Github } from "lucide-vue-next";

const projects = [
  {
    title: "Audit Trail Management System (ATMS)",
    desc: "Sistem berbasis web dengan REST API menggunakan Node.js & Express untuk mencatat log aktivitas pengguna dan integrasi dengan service lain seperti camunda dan minio.",
    link: "https://atms-project.vercel.app/",
    stack: ["Node.js", "Express", "REST API"],
    github: "https://github.com/username/atms",
  },
  {
    title: "Wspend",
    desc: "Aplikasi web toko online dengan fitur katalog, keranjang belanja, dan sistem pembayaran.",
    link: "https://web-ecommers.vercel.app/",
    stack: ["Astro.js", "Tailwind", "Vercel"],
    github: "https://github.com/username/wspend",
  },
  {
    title: "Backend Pegawai Management",
    desc: "Membangun backend untuk management projek antara pegawai dengan manager.",
    link: "#",
    stack: ["Express", "Neo4j", "Swagger"],
    github: "https://github.com/username/backend-pegawai",
  },
];

const stackLogos: Record<string, string> = {
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "REST API":
    "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
  "Astro.js":
    "https://miro.medium.com/v2/resize:fit:1400/1*nLbfO_PdTSpeCdZQuUr8RQ.png",
  Tailwind:
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Vercel:
    "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  Neo4j:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  Swagger:
    "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",
};
</script>

<template>
  <div class="pt-10">
    <div class="container mx-auto px-4 py-10">
      <h2 class="text-3xl font-bold mb-8 text-center text-white">
        ✨ Projek yang Pernah Dikerjakan
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card Project -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
        >
          <!-- Judul -->
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ project.title }}
          </h3>

          <!-- Deskripsi -->
          <p class="text-gray-300 mb-4 text-sm">
            {{ project.desc }}
          </p>

          <!-- Stack -->
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

          <!-- Footer Card -->
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

            <a
              :href="project.link"
              target="_blank"
              class="text-sm text-blue-400 font-medium hover:underline"
            >
              Lihat Detail →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
