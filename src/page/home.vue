<script setup lang="ts">
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import { Github, Linkedin, Phone } from "lucide-vue-next";
import AOS from "aos";

// @ts-ignore
const url_profile = import.meta.env.VITE_URL_PROFILE;

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
</script>

<template>
  <div
    class="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-auto text-white"
  >
    <section
      class="flex flex-col-reverse lg:flex-row items-center pt-7 mx-10 justify-between gap-10"
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
