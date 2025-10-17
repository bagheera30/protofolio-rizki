<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import menus from "../data/menu";
</script>
<template>
  <footer class="footer sm:footer-horizontal p-10">
    <nav class="flex flex-col">
      <h1 class="text-2xl font-bold mb-3 text-white">Muhammad Rizki Alfian</h1>
      <p class="text-sm text-gray-400">
        software engineer passionate about build aplication and inovation
      </p>

      <div class="flex gap-4 mt-3">
        <a
          href="https://github.com/bagheera30"
          target="_blank"
          class="text-gray-400 hover:text-white transition"
        >
          <Github :size="24" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222"
          target="_blank"
          class="text-gray-400 hover:text-white transition"
        >
          <Linkedin :size="24" />
        </a>
      </div>
    </nav>
    <nav>
      <h6 class="footer-title">quik access</h6>
      <ul class="list-none flex flex-col gap-2">
        <li v-for="menu in menus" :key="menu.name">
          <a :href="menu.href" class="link link-hover text-sm">
            {{ menu.name }}
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <h6 class="footer-title">send emaill</h6>
      <p class="text-gray-400 text-sm pb-1">
        send email for projek or coloboration
      </p>
      <a
        href="mailto:rizkialfian30103@gmail.com"
        class="flex gap-2 text-blue-500 hover:text-blue-300 justify-center items-center"
      >
        <Mail :size="24" /> Send Email
      </a>
    </nav>
  </footer>
</template>
