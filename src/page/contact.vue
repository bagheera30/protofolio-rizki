<script setup lang="ts">
import { ref } from "vue";
import {
  Mail,
  Phone,
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        message: message.value,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      success.value = "Message sent successfully! Thank you.";
      email.value = "";
      message.value = "";
    } else {
      error.value = data.error || "Failed to send message.";
    }
  } catch (err) {
    error.value = "Network error. Please try again later.";
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <section
    id="contact"
    class="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white py-16 px-6 sm:px-8 flex flex-col justify-center items-center"
  >
    <!-- Header -->
    <div class="text-center mb-10 space-y-2">
      <h2
        class="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
      >
        Let's Connect
      </h2>
      <p class="text-gray-400 max-w-xl mx-auto">
        Interested in collaborating or have a great idea? Contact me through the
        form below or via available social media.
      </p>
    </div>

    <!-- Grid Layout -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl animate-fadeIn"
    >
      <!-- Contact Info -->
      <div
        class="card bg-neutral-900/70 backdrop-blur-lg border border-red-500/30 p-8 rounded-2xl shadow-md hover:shadow-red-600/30 transition-all duration-300"
      >
        <h3 class="text-2xl font-semibold mb-6 text-red-500 text-center">
          Contact Me
        </h3>

        <div class="space-y-5 text-gray-300">
          <div class="flex items-start gap-3">
            <Mail class="w-5 h-5 mt-1 text-red-500" />
            <div>
              <div class="font-medium">Email</div>
              <a
                href="mailto:rizkialfian30103@gmail.com"
                class="text-sm hover:text-red-400 transition"
                >rizkialfian30103@gmail.com</a
              >
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Phone class="w-5 h-5 mt-1 text-red-500" />
            <div>
              <div class="font-medium">Location</div>
              <p class="text-sm hover:text-red-400 transition">
                South Cikarang
              </p>
            </div>
          </div>

          <div class="divider before:bg-red-700/30 after:bg-red-700/30"></div>

          <div class="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              class="btn btn-ghost btn-sm gap-2 hover:bg-red-600/20 transition"
            >
              <Linkedin class="w-4 h-4 text-red-500" /> LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              class="btn btn-ghost btn-sm gap-2 hover:bg-red-600/20 transition"
            >
              <Github class="w-4 h-4 text-red-500" /> GitHub
            </a>
            <a
              href="#"
              target="_blank"
              class="btn btn-ghost btn-sm gap-2 hover:bg-red-600/20 transition"
            >
              <Instagram class="w-4 h-4 text-red-500" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div
        class="card bg-neutral-900/70 backdrop-blur-lg border border-red-500/30 p-8 rounded-2xl shadow-md hover:shadow-red-600/30 transition-all duration-300"
      >
        <h3 class="text-2xl font-semibold mb-6 text-center text-red-500">
          Send Message
        </h3>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label class="label-text text-gray-300">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="email@example.com"
              class="input input-bordered w-full bg-black/50 border-red-700/40 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              required
            />
          </div>

          <div>
            <label class="label-text text-gray-300">Message</label>
            <textarea
              v-model="message"
              placeholder="Write your message..."
              class="textarea textarea-bordered w-full h-32 bg-black/50 border-red-700/40 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn w-full bg-red-600 hover:bg-red-700 border-none text-white flex items-center justify-center gap-2 transition-all duration-200"
            :disabled="sending"
          >
            <Send class="w-4 h-4" />
            <span v-if="!sending">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <div>
            <p v-if="error" class="text-sm text-red-400 text-center">
              {{ error }}
            </p>
            <p v-if="success" class="text-sm text-green-400 text-center">
              {{ success }}
            </p>
          </div>
        </form>

        <p class="text-xs text-gray-500 mt-6 text-center">
          By sending a message, you agree to be contacted back via email or
          phone.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-in-out forwards;
}
</style>
