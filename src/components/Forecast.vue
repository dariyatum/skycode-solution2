<script setup>
import { defineProps } from "vue";

// Define a prop named "forecast", which is an array of day objects
const props = defineProps({
  forecast: {
    type: Array,
    required: true,
  }
});

// Function to get icon based on temperature and rain
const getIcon = (temp, rain) => {
  if (rain > 50) return "🌧️";
  if (temp <= 0) return "❄️";
  if (temp <= 16) return "☁️";
  if (temp <= 25) return "🌤";
  return "☀️";
};
</script>

<template>
  <div class="mt-6 overflow-x-auto">
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 min-w-[640px] md:min-w-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div v-for="day in forecast" :key="day[0]"
           class="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-700">
        <div class="text-sm text-gray-300">{{ day[0] }}</div>
        <div class="text-3xl my-2">{{ getIcon(day[1], day[3]) }}</div>
        <div class="text-sm">
          {{ day[1] }}° <span class="text-gray-400">{{ day[2] }}°</span>
          <div class="text-xs text-blue-400" v-if="day[3] > 0">{{ day[3] }}% rain</div>
        </div>
      </div>
    </div>
  </div>
</template>
