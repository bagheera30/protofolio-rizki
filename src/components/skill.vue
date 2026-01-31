<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Props biar bisa dikustomisasi dari luar
const props = defineProps({
  labels: {
    type: Array as () => string[],
    default: () => ["Frontend", "Backend", "Database", "UI/UX", "DevOps"],
  },
  data: {
    type: Array as () => number[],
    default: () => [90, 85, 75, 70, 65],
  },
  title: {
    type: String,
    default: "Skill Matrix",
  },
});

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!chartRef.value) return;

  new Chart(chartRef.value, {
    type: "radar",
    data: {
      labels: props.labels,
      datasets: [
        {
          label: "Skill Level",
          data: props.data,
          fill: true,
          backgroundColor: "rgba(251, 146, 60, 0.2)", // amber transparan
          borderColor: "#f59e0b",
          pointBackgroundColor: "#fbbf24",
          pointBorderColor: "#0f172a",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          angleLines: {
            color: "rgba(148, 163, 184, 0.15)",
          },
          grid: {
            color: "rgba(148, 163, 184, 0.15)",
          },
          pointLabels: {
            color: "#cbd5e1",
            font: { size: 14, weight: 500 },
          },
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});
</script>

<template>
  <section class="mt-28 px-8 md:px-20">
    <h1
      class="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4"
      data-aos="fade-up"
    >
      {{ title }}
    </h1>
    <p class="text-center text-slate-400 mb-12">My expertise across different areas</p>

    <div
      class="max-w-xl mx-auto bg-slate-800/40 p-8 rounded-xl shadow-lg border border-slate-700"
    >
      <canvas ref="chartRef"></canvas>
    </div>
  </section>
</template>
