<script setup lang="ts">
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import Navbar from "./navbar.vue";
import { Github, Linkedin, Phone } from "lucide-vue-next";
import AOS from "aos";
import "aos/dist/aos.css";

// @ts-ignore
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
    stack: ["Astro.js", "Tailwind", "Vercel"],
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
  // init typed
  new Typed(typedElement.value, {
    strings: ["Backend Developer", "Frontend Developer", "Mobile Developer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });

  // init AOS
  AOS.init({
    duration: 800,
    once: true,
  });
});

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
  <div
    class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white"
  >
    <Navbar />

    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse pt-20 lg:flex-row items-center mt-12 mx-10 justify-between gap-10"
    >
      <div class="max-w-xl text-center lg:text-left" data-aos="fade-right">
        <h1
          class="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Muhammad Rizki Alfian
        </h1>

        <!-- Animasi Typing -->
        <h2 class="text-lg text-gray-300 mt-2">
          <span ref="typedElement"></span>
        </h2>

        <p class="mt-4 text-base leading-relaxed text-gray-400">
          Seorang web developer dengan pengalaman dalam pengembangan aplikasi
          berbasis web menggunakan Node.js, Express.js, Vue.js, dan REST API.
          Memiliki fokus pada arsitektur layered, maintainability, dan clean
          code.
        </p>

        <div class="mt-6 flex gap-4 justify-center lg:justify-start">
          <a
            href="https://drive.google.com/file/d/1dojd7cKoFxBwSa9NAE6YeNYCzTP7RM2R/view?usp=sharing"
            target="_blank"
            class="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:scale-110 transition duration-300"
          >
            VIEW CV
          </a>
        </div>
      </div>

      <!-- Avatar -->
      <div class="avatar" data-aos="fade-left">
        <div
          class="w-48 h-60 rounded-2xl shadow-lg overflow-hidden ring-4 ring-blue-400 hover:scale-110 hover:rotate-3 transition duration-500"
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
      <h2 class="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
        ✨ Projek yang Pernah Dikerjakan
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition duration-500"
          data-aos="zoom-in"
        >
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-300 mb-4">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <div
              v-for="tech in project.stack"
              :key="tech"
              class="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-lg"
            >
              <img
                v-if="stackLogos[tech]"
                :src="stackLogos[tech]"
                alt="logo"
                class="w-5 h-5"
              />
              <span class="text-sm text-gray-200 font-medium">{{ tech }}</span>
            </div>
          </div>
          <a
            :href="project.link"
            target="_blank"
            class="text-blue-400 font-medium hover:underline"
          >
            Lihat Detail →
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="mt-20 mx-10">
      <h1 class="text-3xl font-bold mb-10 text-center" data-aos="fade-up">
        📬 Kontak Saya
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Github -->
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_#6366f1] transition duration-500"
          data-aos="flip-left"
        >
          <Github class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">Github</h3>
          <p class="text-sm text-gray-400">github.com/bagheera30</p>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/6281386318321"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-green-500 to-emerald-600 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_#22c55e] transition duration-500"
          data-aos="flip-up"
        >
          <Phone class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">WhatsApp</h3>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222/"
          target="_blank"
          class="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_#3b82f6] transition duration-500"
          data-aos="flip-right"
        >
          <Linkedin class="w-10 h-10 text-white mb-3" />
          <h3 class="text-lg font-semibold text-white">LinkedIn</h3>
          <p class="text-sm text-gray-300 text-center">
            linkedin.com/in/muhammad-rizki-alfian-a4a761222/
          </p>
        </a>
      </div>
    </section>
  </div>
</template>
