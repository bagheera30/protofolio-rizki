<script setup lang="ts">
import { journeys, categoryStyles, stackLogos } from "../data/datas";
</script>

<template>
  <section class="relative overflow-hidden py-12 md:py-16">
    <!-- Background Glow -->
    <div
      class="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[120px]"
    />

    <div
      class="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]"
    />

    <div class="relative mx-auto max-w-4xl px-4 md:px-6">
      <!-- Header -->
      <div class="mb-10 text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-xs font-medium text-rose-400"
        >
          🚀 My Journey
        </span>

        <h1 class="mt-6 text-4xl md:text-5xl font-bold text-white">
          Professional
          <span
            class="bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
          >
            Journey
          </span>
        </h1>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          From software engineering student to backend developer, building
          scalable systems and enterprise solutions.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical Line -->
        <div
          class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-rose-400 to-transparent"
        />

        <div
          v-for="journey in journeys"
          :key="journey.id"
          class="relative mb-6 pl-12"
        >
          <!-- Dot -->
          <div
            class="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-rose-500/30 bg-slate-900"
          >
            <div
              class="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.7)]"
            />
          </div>

          <!-- Card -->
          <div
            class="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.08)]"
          >
            <!-- Top -->
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-sm font-semibold text-slate-400">
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

            <!-- Company -->
            <p class="mt-1 text-rose-400 font-medium">
              {{ journey.company }}
            </p>

            <!-- Description -->
            <p class="mt-4 text-slate-300 leading-7">
              {{ journey.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mt-6 flex flex-wrap gap-3">
              <div
                v-for="tech in journey.technologies"
                :key="tech"
                class="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300 transition hover:border-rose-500/40"
              >
                <img
                  v-if="stackLogos[tech]"
                  :src="stackLogos[tech]"
                  :alt="tech"
                  class="h-4 w-4 object-contain"
                />

                <span>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-14 text-center">
        <p class="text-slate-500 text-sm">
          🚀 Always learning, always building.
        </p>
      </div>
    </div>
  </section>
</template>
