<script setup lang="ts">
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import {
  Github,
  Linkedin,
  FileDown,
  ExternalLink,
  Mail,
} from "lucide-vue-next";
import ProjectModal from "../components/projekDetail.vue";

import AOS from "aos";
import { projects, skills, stackLogos } from "../data/datas";
import Skill from "../components/skill.vue";

const labels = ["Frontend", "Backend", "Database", "UI/UX", "DevOps"];
const skillData = [85, 90, 75, 45, 80 ];
// @ts-ignore
const url_profile = import.meta.env.VITE_URL_PROFILE;
// @ts-ignore
const url_cv = import.meta.env.VITE_URL_DOWNLOAD_CV;
const typedElement = ref(null);

const techStacks = [
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original colored" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];
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

onMounted(() => {
  new Typed(typedElement.value, {
    strings: ["Backend Developer", "Frontend Developer", "Mobile Developer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });

  AOS.init({
    duration: 900,
    once: true,
  });
});
</script>

<template>
  <div
    class="bg-gradient-to-b from-black via-neutral-900 to-black min-h-screen text-white overflow-hidden"
  >
    <section
      class="flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 pt-16 lg:pt-28 gap-12"
    >
      <div class="max-w-xl text-center lg:text-left" data-aos="fade-right">
        <h1
          class="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
        >
          Muhammad Rizki Alfian
        </h1>

        <h2 class="text-xl font-medium text-gray-300 mt-3 tracking-wide">
          <span ref="typedElement"></span>
        </h2>

        <p class="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
          I am a
          <span class="text-white font-semibold">Fullstack Developer</span>
          and a recent graduate in
          <span class="text-blue-400 font-medium">Software Engineering</span>
          from
          <span class="text-red-500 font-semibold">Telkom University</span>,
          focusing on clean architecture, high performance, and scalable system
          design. Experienced using <span class="text-blue-400">Node.js</span>,
          <span class="text-green-400">Vue.js</span>, and
          <span class="text-red-700">REST API</span> to build modern, efficient,
          and easy-to-maintain applications.
        </p>

        <div class="mt-8 flex gap-4 justify-center lg:justify-start">
          <a
            :href="url_cv"
            target="_blank"
            class="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-red-600/50 transition duration-300"
          >
            <FileDown class="w-5 h-5" />
            Lihat CV
          </a>
        </div>
      </div>

      <!-- Avatar -->
      <div class="relative group" data-aos="fade-left">
        <div
          class="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden ring-4 ring-red-500 shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-3"
        >
          <img
            :src="url_profile"
            alt="profile"
            class="object-cover w-full h-full"
          />
        </div>
        <div
          class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-30 blur-lg group-hover:opacity-70 transition duration-500"
        ></div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="mt-28 px-8 md:px-20">
      <h1
        class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-12"
        data-aos="fade-up"
      >
        🧰 Tech Stack
      </h1>

      <div class="relative overflow-hidden">
        <div
          class="flex gap-10 animate-scroll whitespace-nowrap"
          data-aos="zoom-in"
        >
          <!-- kita duplikat isi array dua kali untuk transisi halus -->
          <div
            v-for="tech in [...techStacks, ...techStacks]"
            :key="tech.name + Math.random()"
            class="flex flex-col items-center justify-center min-h-9 min-w-[120px] hover:scale-110 transition duration-300"
          >
            <i :class="tech.icon + ' text-6xl mb-2'"></i>
            <span class="text-sm text-gray-300 font-medium">{{
              tech.name
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <Skill :labels="labels" :data="skillData" title="Skill Overview" />
    <section id="projects" class="mt-28 px-8 md:px-20">
      <h1
        class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-12"
        data-aos="fade-up"
      >
        🚀 Project Highlights
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          class="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-red-600/40 transition duration-500"
          data-aos="flip-up"
        >
          <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-gray-400 text-sm mb-4">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.stack"
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200"
            >
              {{ tag }}
            </span>
          </div>
          <button
            @click="openModal(project)"
            class="inline-flex items-center gap-2 text-red-400 hover:text-red-500 transition"
          >
            Lihat Proyek
            <ExternalLink class="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="mt-28 px-8 md:px-20 pb-20">
      <h1
        class="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        📬 CONTACK US
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-lg hover:scale-110 hover:shadow-[0_0_25px_#6366f1] transition duration-500"
          data-aos="flip-left"
        >
          <Github class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">Github</h3>
          <p class="text-sm text-gray-400 mt-1">bagheera30</p>
        </a>

        <a
          href="mailto:rizkialfian30103@gmail.com"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-red-600 to-blue-500 shadow-lg hover:scale-110 hover:shadow-blue-400/60 transition duration-500"
          data-aos="flip-up"
        >
          <Mail class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">EMAIL</h3>
          <p class="text-sm text-gray-200 mt-1">rizkialfian30103@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222/"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg hover:scale-110 hover:shadow-[0_0_25px_#3b82f6] transition duration-500"
          data-aos="flip-right"
        >
          <Linkedin class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">LinkedIn</h3>
          <p class="text-sm text-gray-300 text-center mt-1">
            muhammad-rizki-alfian-a4a761222
          </p>
        </a>
      </div>
    </section>
  </div>
  <ProjectModal
    :isOpen="isModalOpen"
    :project="selectedProject"
    :stackLogos="stackLogos"
    @close="closeModal"
  />
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused; /* opsional: berhenti saat hover */
}
</style>
