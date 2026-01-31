<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import menus from "../data/menu";
</script>
<template>
  <footer class="footer sm:footer-horizontal p-10 bg-slate-950 border-t border-slate-800">
    <nav class="flex flex-col">
      <h1 class="text-2xl font-bold mb-3 text-slate-100">Muhammad Rizki Alfian</h1>
      <p class="text-sm text-slate-400">
        Software engineer passionate about building applications and innovation
      </p>

      <div class="flex gap-4 mt-3">
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="text-slate-400 hover:text-amber-400 transition duration-300"
        >
          <Github :size="24" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222"
          target="_blank"
          class="text-slate-400 hover:text-amber-400 transition duration-300"
        >
          <Linkedin :size="24" />
        </a>
      </div>
    </nav>
    <nav>
      <h6 class="footer-title text-slate-100">Quick Access</h6>
      <ul class="list-none flex flex-col gap-2">
        <li v-for="menu in menus" :key="menu.name">
          <a :href="menu.href" class="link link-hover text-sm text-slate-400 hover:text-amber-400 transition">
            {{ menu.name }}
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <h6 class="footer-title text-slate-100">Get In Touch</h6>
      <p class="text-slate-400 text-sm pb-2">
        Send email for projects or collaboration
      </p>
      <a
        href="mailto:rizkialfian30103@gmail.com"
        class="flex gap-2 text-amber-400 hover:text-amber-300 justify-center items-center transition font-medium"
      >
        <Mail :size="24" /> Send Email
      </a>
    </nav>
  </footer>
</template>
