<script setup lang="ts">
import { ref } from "vue";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-vue-next";

const name = ref("");
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

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
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
  name.value = "";
  email.value = "";
  message.value = "";
}
</script>

<template>
  <div class="max-w-6xl text-black mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <!-- Grid contact + form -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Info Kontak -->
      <div class="card bg-white/80 shadow-md p-6">
        <h2 class="text-2xl font-bold mb-2">Hubungi Saya</h2>
        <p class="text-sm text-gray-500 mb-4">
          Punya proyek, pertanyaan, atau sekadar menyapa? Isi form di samping
          atau gunakan detail kontak di bawah.
        </p>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <MapPin class="w-5 h-5 mt-1 text-primary" />
            <div>
              <div class="text-sm font-medium">Lokasi</div>
              <div class="text-xs text-gray-500">Jakarta, Indonesia</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Mail class="w-5 h-5 mt-1 text-primary" />
            <div>
              <div class="text-sm font-medium">Email</div>
              <div class="text-xs text-gray-500">rizki.alfian@example.com</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Phone class="w-5 h-5 mt-1 text-primary" />
            <div>
              <div class="text-sm font-medium">Telepon</div>
              <div class="text-xs text-gray-500">+62 812 3456 7890</div>
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
              <Twitter class="w-4 h-4" /> Twitter
            </a>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="card bg-white shadow-md p-6">
        <h3 class="text-xl font-semibold mb-4">Kirim Pesan</h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="label">
              <span class="label-text">Nama</span>
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="Nama lengkap"
              class="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="email@contoh.com"
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

            <button
              type="button"
              class="btn btn-outline"
              @click="
                (name = ''),
                  (email = ''),
                  (message = ''),
                  (error = ''),
                  (success = '')
              "
            >
              Reset
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

    <!-- Map -->
    <div class="mt-8">
      <div class="rounded-lg overflow-hidden shadow-inner">
        <iframe
          class="w-full h-56 sm:h-72 lg:h-96"
          src="https://www.openstreetmap.org/export/embed.html?bbox=107.139%2C-6.336%2C107.150%2C-6.328&amp;layer=mapnik&marker=-6.3324%2C107.1447"
          title="map"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
