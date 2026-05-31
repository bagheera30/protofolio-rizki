<template>
  <div class="px-6 py-8 bg-transparent">
    <div class="max-w-7xl mx-auto">
      <!-- Search bar -->
      <div
        class="mb-10 flex items-center gap-3 bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl px-4 py-4"
      >
        <Search :size="22" class="text-gray-400" />
        <input
          v-model="search"
          type="text"
          placeholder="Search repositories..."
          class="bg-transparent w-full outline-none text-gray-200 placeholder-gray-500"
        />
      </div>

      <!-- Grid -->
      <transition-group
        name="fade"
        tag="div"
        v-if="paginatedRepos.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="repo in paginatedRepos"
          :key="repo.id"
          class="bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-rose-500/40 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="card-body">
            <div class="flex justify-between items-center mb-2">
              <div
                class="badge badge-outline border-rose-500 text-rose-400 px-3 py-1"
              >
                {{ repo.language || "Unknown" }}
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-400">
                <span>⭐ {{ repo.stargazers_count }}</span>
                <span>🍴 {{ repo.forks_count }}</span>
              </div>
            </div>

            <h2
              class="card-title text-lg font-bold text-white hover:text-rose-400 transition"
            >
              {{ repo.name }}
            </h2>
            <p class="text-gray-400 text-sm line-clamp-2 leading-relaxed">
              {{ repo.description || "No description available" }}
            </p>

            <div
              class="flex justify-between items-center mt-4 text-gray-500 text-sm"
            >
              <div class="flex items-center gap-2">
                <i class="fa-regular fa-clock"></i>
                <span>Updated {{ formatDate(repo.updated_at) }}</span>
              </div>
              <a
                :href="repo.html_url"
                target="_blank"
                class="flex items-center gap-1 text-rose-400 hover:text-rose-300 transition"
              >
                View <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Pagination -->
      <div
        v-if="!loading && filteredRepos.length > perPage"
        class="flex justify-center items-center gap-4 mt-12"
      >
        <button
          class="btn btn-sm bg-gray-800 border border-gray-700 hover:bg-rose-600 text-gray-200"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          Prev
        </button>

        <div class="text-gray-400 text-sm">
          Page
          <span class="text-indigo-400 font-semibold">{{ currentPage }}</span>
          of {{ totalPages }}
        </div>

        <button
          class="btn btn-sm bg-gray-800 border border-gray-700 hover:bg-rose-600 text-gray-200"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          Next
        </button>
      </div>

      <!-- Loading / Empty State -->
      <div v-else-if="loading" class="text-center text-gray-400 mt-20">
        <span class="loading loading-spinner loading-lg text-indigo-500"></span>
      </div>

      <div
        v-else-if="!filteredRepos.length"
        class="text-center text-gray-500 mt-20 text-lg"
      >
        <p>No repositories found 😢</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { ref, computed, onMounted } from "vue";

const username = "bagheera30"; // ganti sesuai username GitHub kamu
const repos = ref<any[]>([]);
const search = ref("");
const loading = ref(true);

// Pagination
const currentPage = ref(1);
const perPage = 9;

onMounted(async () => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    );
    if (!res.ok) throw new Error("Failed to fetch repos");
    repos.value = (await res.json()).sort(
      (a: any, b: any) => b.stargazers_count - a.stargazers_count,
    );
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
});

// Filter repos by search
const filteredRepos = computed(() =>
  repos.value.filter((r) =>
    r.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

// Pagination logic
const totalPages = computed(() =>
  Math.ceil(filteredRepos.value.length / perPage),
);
const paginatedRepos = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredRepos.value.slice(start, start + perPage);
});

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: tranzincY(10px);
}
</style>
