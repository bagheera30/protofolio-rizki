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
  Legend,
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
          backgroundColor: "rgba(239, 68, 68, 0.3)", // merah transparan
          borderColor: "#ef4444",
          pointBackgroundColor: "#ef4444",
          pointBorderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true, // ✅ dipindah ke sini
          max: 100, // ✅ dipindah ke sini
          angleLines: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          pointLabels: {
            color: "#fff",
            font: { size: 14 },
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
      class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent mb-12"
      data-aos="fade-up"
    >
      ⚒️ {{ title }}
    </h1>

    <div
      class="max-w-xl mx-auto bg-neutral-900 p-8 rounded-2xl shadow-lg border border-neutral-800"
    >
      <canvas ref="chartRef"></canvas>
    </div>
  </section>
</template>
