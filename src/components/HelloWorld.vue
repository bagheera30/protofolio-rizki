<script setup lang="ts">
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import Navbar from "./navbar.vue";
import { Github, Linkedin, Phone } from "lucide-vue-next";
// @ts-ignore   <-- ini supaya TypeScript plugin nggak bawel
const url_profile = import.meta.env.VITE_URL_PROFILE;
const projects = [
  {
    title: "Audit Trail Management System (ATMS)",
    desc: "Sistem berbasis web dengan REST API menggunakan Node.js & Express untuk mencatat log aktivitas pengguna dan integrasi dengan service lain seperti camunda dan minio.",
    link: "https://atms-project.vercel.app/",
    stack: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Wspend",
    desc: "Aplikasi web toko online dengan fitur katalog, keranjang belanja, dan sistem pembayaran.",
    link: "https://web-ecommers.vercel.app/",
    stack: ["Astro.Js", "Tailwind", "Vercel"],
  },
  {
    title: "Backend Pegawai Management",
    desc: "Membangun backend untuk management projek antara pegawai dengan manager.",
    link: "#",
    stack: ["Express", "Neo4j", "Swagger"],
  },
];

const typedElement = ref(null);

onMounted(() => {
  const typed = new Typed(typedElement.value, {
    strings: ["Backend Developer", "Frontend Developer", "Mobile Developer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });
});
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse pt-16 lg:flex-row items-center mt-12 mx-10 justify-between gap-10"
    >
      <div class="max-w-xl text-center lg:text-left">
        <h1
          class="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Muhammad Rizki Alfian
        </h1>

        <!-- Animasi Typing -->
        <h2 class="text-lg text-stone-400 mt-2">
          <span ref="typedElement"></span>
        </h2>

        <p class="mt-4 text-base leading-relaxed text-gray-300">
          Seorang web developer dengan pengalaman dalam pengembangan aplikasi
          berbasis web menggunakan Node.js, Express.js, Vue.js, dan REST API.
          Memiliki fokus pada arsitektur layered, maintainability, dan clean
          code.
        </p>

        <div class="mt-6 flex gap-4 justify-center lg:justify-start">
          <a
            href="https://drive.google.com/file/d/1dojd7cKoFxBwSa9NAE6YeNYCzTP7RM2R/view?usp=sharing"
            target="_blank"
            class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
          >
            VIEW CV
          </a>
          <a
            href="#projects"
            class="px-5 py-2 rounded-xl border border-blue-500 text-blue-400 font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Lihat Projek
          </a>
        </div>
      </div>

      <!-- Avatar -->
      <div class="avatar">
        <div
          class="w-48 h-60 rounded-2xl shadow-lg overflow-hidden ring-4 ring-blue-400 hover:scale-105 transition"
        >
          <img
            alt="profile"
            :src="url_profile"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>

    <!-- Project Section -->
    <section id="projects" class="mt-20 mx-10">
      <h2 class="text-3xl font-bold mb-8">✨ Projek yang Pernah Dikerjakan</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition"
        >
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg"
            >
              {{ tech }}
            </span>
          </div>
          <a
            :href="project.link"
            target="_blank"
            class="text-blue-600 font-medium hover:underline"
          >
            Lihat Detail →
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="mt-20 mx-10">
      <h1 class="text-3xl font-bold mb-10 text-center">📬 Kontak Saya</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Github -->
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-lg hover:scale-105 hover:shadow-2xl transition"
        >
          <Github class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">Github</h3>
          <p class="text-sm text-gray-400">https://github.com/bagheera30</p>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/6281386318321"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-green-500 to-emerald-600 shadow-lg hover:scale-105 hover:shadow-2xl transition"
        >
          <Phone class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">WhatsApp</h3>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222/"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg hover:scale-105 hover:shadow-2xl transition"
        >
          <Linkedin class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">LinkedIn</h3>
          <p class="text-sm text-gray-400">
            https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222/
          </p>
        </a>
      </div>
    </section>
  </div>
</template>
