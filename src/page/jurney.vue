<template>
  <section class="relative py-24">
    <!-- Background Glow -->
    <div
      class="absolute top-20 left-0 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"
    />
    <div
      class="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
    />

    <div class="relative mx-auto max-w-5xl px-6">
      <!-- Header -->
      <div class="mb-20 text-center">
        <span
          class="rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm text-red-400"
        >
          My Journey
        </span>

        <h1 class="mt-6 text-5xl font-bold text-white md:text-6xl">
          Professional
          <span
            class="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent"
          >
            Journey
          </span>
        </h1>

        <p class="mx-auto mt-5 max-w-2xl text-slate-400">
          From a software engineering student to building scalable backend
          systems and enterprise solutions.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Line -->
        <div
          class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-red-400 to-transparent"
        />

        <div
          v-for="journey in journeys"
          :key="journey.id"
          class="relative pb-12 pl-16"
        >
          <!-- Dot -->
          <div
            class="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-slate-900"
          >
            <div
              class="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_20px_#22d3ee]"
            />
          </div>

          <!-- Card -->
          <div
            class="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30"
          >
            <!-- Top -->
            <div class="mb-4 flex flex-wrap items-center gap-3">
              <span class="text-sm font-semibold text-red-400">
                {{ journey.period }}
              </span>

              <span
                :class="[
                  'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium',
                  categoryStyles[journey.category].color,
                ]"
              >
                {{ categoryStyles[journey.category].icon }}
                {{ journey.category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-white">
              {{ journey.title }}
            </h3>

            <p class="mt-1 font-medium text-red-400">
              {{ journey.company }}
            </p>

            <p class="mt-4 leading-relaxed text-slate-300">
              {{ journey.description }}
            </p>

            <!-- Technologies -->
            <div class="mt-6 flex flex-wrap gap-4">
              <div
                v-for="tech in journey.technologies"
                :key="tech"
                class="group/tech flex flex-col items-center gap-2"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 group-hover/tech:border-red-500/40 group-hover/tech:shadow-lg group-hover/tech:shadow-red-500/20"
                >
                  <img
                    v-if="stackLogos[tech]"
                    :src="stackLogos[tech]"
                    :alt="tech"
                    class="h-6 w-6 object-contain"
                  />

                  <div v-else class="h-2 w-2 rounded-full bg-red-400" />
                </div>

                <span class="text-xs text-slate-400">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 text-center">
        <p class="text-slate-500">Always learning, always building.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { journeys, categoryStyles, stackLogos } from "../data/datas";
</script>
