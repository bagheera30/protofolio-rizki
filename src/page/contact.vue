<script setup lang="ts">
import { ref } from "vue";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
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
    error.value = "Please fill in all fields.";
    return;
  }

  if (!validateEmail(email.value)) {
    error.value = "Invalid email address.";
    return;
  }

  sending.value = true;

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        message: message.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      success.value = "Message sent successfully!";
      email.value = "";
      message.value = "";
    } else {
      error.value = data.error || "Failed to send message.";
    }
  } catch {
    error.value = "Network error. Please try again later.";
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden py-20">
    <!-- Glow -->
    <div
      class="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-rose-500/10 blur-[120px]"
    />

    <div
      class="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px]"
    />

    <div class="relative max-w-5xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-xs font-medium text-rose-400"
        >
          📬 Contact
        </span>

        <h2 class="mt-5 text-3xl md:text-4xl font-bold text-white">
          Let's
          <span
            class="bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
          >
            Connect
          </span>
        </h2>

        <p class="mt-4 max-w-xl mx-auto text-slate-400">
          Interested in collaborating, discussing ideas, or building something
          amazing together?
        </p>
      </div>

      <!-- Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6">
        <!-- Contact Info -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6"
        >
          <h3 class="text-xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div class="space-y-4">
            <!-- Email -->
            <div
              class="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10"
              >
                <Mail class="w-5 h-5 text-rose-400" />
              </div>

              <div>
                <p class="text-sm text-slate-400">Email</p>

                <a
                  href="mailto:rizkialfian30103@gmail.com"
                  class="text-sm text-white hover:text-rose-400 transition"
                >
                  rizkialfian30103@gmail.com
                </a>
              </div>
            </div>

            <!-- Location -->
            <div
              class="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10"
              >
                <MapPin class="w-5 h-5 text-blue-400" />
              </div>

              <div>
                <p class="text-sm text-slate-400">Location</p>

                <p class="text-sm text-white">South Cikarang, Indonesia</p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="mt-8">
            <h4 class="text-sm text-slate-400 mb-3">Social Media</h4>

            <div class="grid grid-cols-3 gap-3">
              <a
                href="https://www.linkedin.com/in/muhammad-rizki-alfian-a4a761222"
                target="_blank"
                class="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-rose-500/40"
              >
                <Linkedin class="w-5 h-5 text-blue-400" />
                <span class="text-xs text-slate-300"> LinkedIn </span>
              </a>

              <a
                href="https://github.com/bagheera30"
                target="_blank"
                class="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-rose-500/40"
              >
                <Github class="w-5 h-5 text-white" />
                <span class="text-xs text-slate-300"> GitHub </span>
              </a>

              <a
                href="#"
                target="_blank"
                class="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-rose-500/40"
              >
                <Instagram class="w-5 h-5 text-pink-400" />
                <span class="text-xs text-slate-300"> Instagram </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6"
        >
          <h3 class="text-xl font-semibold text-white mb-6">Send Message</h3>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-sm text-slate-400 mb-2"> Email </label>

              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-rose-500"
              />
            </div>

            <div>
              <label class="block text-sm text-slate-400 mb-2"> Message </label>

              <textarea
                v-model="message"
                rows="6"
                placeholder="Write your message..."
                class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-rose-500 resize-none"
              />
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                :disabled="sending"
                class="flex-1 rounded-xl bg-rose-500 px-5 py-3 font-medium text-white transition hover:bg-rose-600 disabled:opacity-50"
              >
                <span class="flex items-center justify-center gap-2">
                  <Send class="w-4 h-4" />

                  {{ sending ? "Sending..." : "Send Message" }}
                </span>
              </button>

              <a
                href="mailto:rizkialfian30103@gmail.com"
                class="rounded-xl border border-slate-700 px-5 py-3 text-center text-slate-300 transition hover:border-rose-500/40"
              >
                Direct Email
              </a>
            </div>

            <p v-if="error" class="text-sm text-red-400">
              {{ error }}
            </p>

            <p v-if="success" class="text-sm text-green-400">
              {{ success }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
