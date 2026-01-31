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
import { projects, stackLogos } from "../data/datas";
import Skill from "../components/skill.vue";

const labels = ["Frontend", "Backend", "Database", "DevOps"];
const skillData = [85, 90, 75, 45, 80];
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
  { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
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
    class="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen text-slate-100 overflow-hidden"
  >
    <section
      class="flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 pt-16 lg:pt-28 gap-12"
    >
      <div class="max-w-xl text-center lg:text-left" data-aos="fade-right">
        <h1
          class="text-5xl lg:text-6xl font-bold text-slate-100 leading-tight"
        >
          Muhammad Rizki<br><span class="text-amber-400">Alfian</span>
        </h1>

        <h2 class="text-xl font-medium text-slate-300 mt-4 tracking-wide">
          <span ref="typedElement"></span>
        </h2>

        <p class="mt-6 text-slate-400 leading-relaxed text-base md:text-lg">
          I am a
          <span class="text-slate-200 font-semibold">Fullstack Developer</span>
          and a recent graduate in
          <span class="text-amber-400 font-medium">Software Engineering</span>
          from
          <span class="text-amber-400 font-semibold">Telkom University</span>,
          focusing on clean architecture, high performance, and scalable system
          design. Experienced using <span class="text-slate-200">Node.js</span>,
          <span class="text-slate-200">Vue.js</span>, and
          <span class="text-slate-200">REST API</span> to build modern, efficient,
          and easy-to-maintain applications.
        </p>

        <div class="mt-8 flex gap-4 justify-center lg:justify-start">
          <a
            :href="url_cv"
            target="_blank"
            class="flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-lg hover:shadow-amber-500/50 transition duration-300 transform hover:scale-105"
          >
            <FileDown class="w-5 h-5" />
            Lihat CV
          </a>
        </div>
      </div>

      <!-- Avatar -->
      <div class="relative group" data-aos="fade-left">
        <div
          class="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden ring-4 ring-amber-400/50 shadow-2xl transition duration-500 group-hover:shadow-amber-400/30 group-hover:scale-105"
        >
          <img
            :src="url_profile"
            alt="profile"
            class="object-cover w-full h-full"
          />
        </div>
        <div
          class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400/20 to-transparent opacity-0 blur-lg group-hover:opacity-100 transition duration-500"
        ></div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="mt-28 px-8 md:px-20">
      <h1
        class="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4"
        data-aos="fade-up"
      >
        Tech Stack
      </h1>
      <p class="text-center text-slate-400 mb-12">Tools and technologies I work with</p>

      <div class="relative overflow-hidden">
        <div
          class="flex gap-10 animate-scroll whitespace-nowrap"
          data-aos="zoom-in"
        >
          <!-- kita duplikat isi array dua kali untuk transisi halus -->
          <div
            v-for="tech in [...techStacks, ...techStacks]"
            :key="tech.name + Math.random()"
            class="flex flex-col items-center justify-center min-h-9 min-w-[120px] p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition duration-300 hover:scale-110"
          >
            <i :class="tech.icon + ' text-6xl mb-2'"></i>
            <span class="text-sm text-slate-300 font-medium">{{
              tech.name
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <Skill :labels="labels" :data="skillData" title="Skill Overview" />
    <section id="projects" class="mt-28 px-8 md:px-20">
      <h1
        class="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4"
        data-aos="fade-up"
      >
        Project Highlights
      </h1>
      <p class="text-center text-slate-400 mb-12">Recent work and achievements</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          class="bg-slate-800/40 border border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-amber-400/20 hover:border-amber-400/30 transition duration-500 group"
          data-aos="flip-up"
        >
          <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition">{{ project.title }}</h3>
          <p class="text-slate-400 text-sm mb-4">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.stack"
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600"
            >
              {{ tag }}
            </span>
          </div>
          <button
            @click="openModal(project)"
            class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition font-medium"
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
        class="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-100"
        data-aos="fade-up"
      >
        Get In Touch
      </h1>
      <p class="text-center text-slate-400 mb-12">Connect with me on social platforms</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="flex flex-col items-center justify-center p-8 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-amber-400/50 shadow-lg hover:shadow-amber-400/20 transition duration-500 group"
          data-aos="flip-left"
        >
          <Github class="w-12 h-12 text-slate-300 mb-3 group-hover:text-amber-400 transition" />
          <h3 class="text-lg font-semibold text-slate-100 group-hover:text-amber-400 transition">Github</h3>
          <p class="text-sm text-slate-400 mt-1">bagheera30</p>
        </a>

        <a
          href="mailto:rizkialfian30103@gmail.com"
          target="_blank"
          class="flex flex-col items-center justify-center p-8 rounded-xl bg-amber-400/10 border border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/20 shadow-lg hover:shadow-amber-400/30 transition duration-500 group"
          data-aos="flip-up"
        >
          <Mail class="w-12 h-12 text-amber-400 mb-3 group-hover:scale-110 transition" />
          <h3 class="text-lg font-semibold text-slate-100 group-hover:text-amber-300 transition">Email</h3>
          <p class="text-sm text-slate-300 mt-1">rizkialfian30103@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222/"
          target="_blank"
          class="flex flex-col items-center justify-center p-8 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-amber-400/50 shadow-lg hover:shadow-amber-400/20 transition duration-500 group"
          data-aos="flip-right"
        >
          <Linkedin class="w-12 h-12 text-slate-300 mb-3 group-hover:text-amber-400 transition" />
          <h3 class="text-lg font-semibold text-slate-100 group-hover:text-amber-400 transition">LinkedIn</h3>
          <p class="text-sm text-slate-400 text-center mt-1">
            muhammad-rizki-alfian
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
