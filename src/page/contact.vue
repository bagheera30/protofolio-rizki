<script setup lang="ts">
import { ref } from "vue";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-vue-next";

const email = ref("");
const message = ref("");
const sending = ref(false);
const success = ref("");
const error = ref("");

function validateEmail(e: string) {
  return /\S+@\S+\.\S+/.test(e);
}

async function handleSubmit() {
  error.value = "";
  success.value = "";

  if (!email.value.trim() || !message.value.trim()) {
    error.value = "Mohon isi semua field.";
    return;
  }
  if (!validateEmail(email.value)) {
    error.value = "Email tidak valid.";
    return;
  }

  sending.value = true;
  // Simulasi pengiriman — ganti dengan API call sebenarnya
  await new Promise((r) => setTimeout(r, 900));
  sending.value = false;
  success.value = "Pesan berhasil dikirim. Terima kasih!";
  email.value = "";
  message.value = "";
}
</script>

<template>
  <div class="text-center text-white/75 grid grid-cols-1 gap-1.5">
    <h2 class="text-3xl font-bold">HAI</h2>
    <p class="text-gray-500">
      Make colabartion proyek or somethink me contack this
    </p>
  </div>
  <div class="max-w-6xl text-black px-4 sm:px-6 lg:px-8 py-4">
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-8">
      <div class="card w-3xl bg-white/80 shadow-md p-6">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-2">Hubungi Saya</h2>
          <p class="text-sm text-gray-500 mb-4">
            Punya proyek, kolaborasi? Isi form di samping atau gunakan detail
            kontak di bawah.
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <Mail class="w-5 h-5 mt-1 text-primary" />
            <div>
              <div class="text-sm font-medium">Email</div>
              <div class="text-xs text-gray-500">rizki.alfian@gmail.com</div>
            </div>
          </div>

          <div class="divider" />

          <div class="flex flex-wrap gap-3">
            <a href="#" class="btn btn-ghost btn-sm gap-2">
              <Linkedin class="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" class="btn btn-ghost btn-sm gap-2">
              <Github class="w-4 h-4" /> Github
            </a>
            <a href="#" class="btn btn-ghost btn-sm gap-2">
              <Instagram class="w-4 h-4" /> instagram
            </a>
          </div>
        </div>
      </div>

      <div class="card max-w-2/5 bg-white/80 shadow-md p-6">
        <h3 class="text-xl text-center font-semibold mb-4">Send Email</h3>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="email@example.com"
              class="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Pesan</span>
            </label>
            <textarea
              v-model="message"
              placeholder="Tulis pesanmu..."
              class="textarea textarea-bordered w-full h-28"
              required
            ></textarea>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              class="btn btn-primary flex items-center gap-2"
              :class="{ 'opacity-70 pointer-events-none': sending }"
            >
              <Send class="w-4 h-4" />
              <span v-if="!sending">Kirim</span>
              <span v-else>Mengirim...</span>
            </button>
          </div>

          <div>
            <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
            <p v-if="success" class="text-sm text-green-600">{{ success }}</p>
          </div>
        </form>

        <div class="mt-6 text-xs text-gray-400">
          <p>
            Dengan mengirim pesan, Anda setuju untuk dihubungi kembali melalui
            email atau telepon.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
