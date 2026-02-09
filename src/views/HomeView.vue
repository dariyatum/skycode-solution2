
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import WeatherCard from '@/components/WeatherCard.vue'
import Forecast from '@/components/Forecast.vue'
const forecastData = [
  ['Wed', 31, 22, 10],
  ['Thu', 31, 22, 60],
  ['Fri', 32, 22, 0],
  ['Sat', 16, 17, 10],
  ['Sun', 16, 17, 0],
  ['Mon', 16, 17, 80],
  ['Tue', 16, 17, 80],
]
const route = useRoute()
const city = computed(() => route.query.city || 'Phnom Penh')

// MAIN WEATHER DATA
const temperature = ref(31) // °C
const rain = ref(20) // % chance of rain

// MAIN WEATHER ICON & DESCRIPTION
const weatherIcon = computed(() => {
  if (rain.value > 50) return '🌧️'
  if (temperature.value <= 0) return '❄️'
  if (temperature.value <= 16) return '☁️'
  if (temperature.value <= 25) return '🌤'
  return '☀️'
})

const weatherDescription = computed(() => {
  if (rain.value > 50) return 'Rainy'
  if (temperature.value <= 0) return 'Snowy'
  if (temperature.value <= 16) return 'Cloudy'
  if (temperature.value <= 25) return 'Partly sunny'
  return 'Hot sunny'
})

// FORECAST DATA: [Day, Max Temp, Min Temp, Rain %]
const forecast = ref([
  ['Wed', 31, 22, 10],
  ['Thu', 31, 22, 60],
  ['Fri', 32, 22, 0],
  ['Sat', 16, 17, 80],
  ['Sun', 32, 21, 20],
  ['Mon', 32, 22, 0],
  ['Tue', 14, 11, 70],
  ['Wed', 13, 11, 30],
])

// NEXT 7 DAYS SIDEBAR: [Day, Temp, Rain %]
const next7Days = ref([
  ['Fri', 34, 10],
  ['Sat', 35, 60],
  ['Sun', 30, 50],
  ['Mon', 32, 20],
  ['Tue', 31, 0],
])

// NEARBY LOCATIONS: [City, Temp, Rain %]
const nearbyLocations = ref([
  ['Siem Reap', 32, 10],
  ['Battambang', 33, 0],
  ['Sihanoukville', 29, 60],
])

// HELPER FUNCTION TO GET ICON
const getIcon = (temp, rainChance) => {
  if (rainChance > 50) return '🌧️'
  if (temp <= 0) return '❄️'
  if (temp <= 16) return '☁️'
  if (temp <= 25) return '🌤'
  return '☀️'
}
</script>

<template>
<div class="w-full h-48 relative"></div>
  <div class="bg-zinc-900 min-h-screen p-4 flex justify-center relative">
<div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

      <!-- ================= LEFT (MAIN CONTENT) ================= -->
      <div class="lg:col-span-2 flex flex-col gap-6">
        <!-- MAIN WEATHER CARD -->
        <div class="bg-zinc-800 rounded-2xl p-4 md:p-6 text-white shadow-xl">
          <!-- HEADER -->
          <div class="flex flex-col sm:flex-row justify-between gap-6">
            <!-- LEFT INFO -->
            <div class="flex items-center gap-4">
              <div class="text-5xl md:text-6xl">{{ weatherIcon }}</div>
              <div class="text-4xl md:text-5xl font-semibold">
                {{ temperature }}<span class="text-xl align-top">°C</span>
              </div>
              <div class="text-sm text-gray-400 mt-1">{{ weatherDescription }}</div>

              <div class="hidden sm:block text-sm text-gray-400 mt-1">
                Precipitation: {{ rain }}% <br />
                Humidity: 37% <br />
                Wind: 11 km/h
              </div>
            </div>

            <!-- RIGHT INFO -->
            <div class="sm:text-right">
              <div class="text-xl md:text-2xl font-medium">Weather in {{ city }}</div>
              <div class="text-sm text-gray-400">Wednesday · 2:00 PM</div>
              <div class="text-sm text-gray-400">Partly sunny</div>
            </div>
          </div>

          <!-- TABS -->
          <div class="flex gap-6 mt-6 text-sm md:text-base text-gray-400">
            <button class="text-white border-b-2 border-yellow-400 pb-1">Temperature</button>
            <button class="hover:text-white">Precipitation</button>
            <button class="hover:text-white">Wind</button>
          </div>

          <!-- GRAPH -->
<!-- GRAPH -->
<div class="mt-6 relative h-32 md:h-44 bg-zinc-900 rounded-xl overflow-hidden">
  <svg
    viewBox="0 0 100 30"
    preserveAspectRatio="none"
    class="absolute inset-0 w-full h-full"
  >
    <!-- AREA FILL -->
    <path
      d="M0,10 
         C15,8 25,15 40,18 
         55,22 65,24 80,18 
         90,14 100,12 
         L100,30 L0,30 Z"
      fill="rgba(250, 204, 21, 0.35)"
    />

    <!-- LINE -->
    <path
      d="M0,10 
         C15,8 25,15 40,18 
         55,22 65,24 80,18 
         90,14 100,12"
      fill="none"
      stroke="#facc15"
      stroke-width="1.5"
    />
  </svg>

  <!-- TIME LABELS -->
  <div
    class="hidden md:flex absolute bottom-2 left-0 w-full justify-between px-4 text-xs text-gray-400"
  >
    <span v-for="t in ['3 PM', '6 PM', '9 PM', '12 AM', '3 AM', '6 AM', '9 AM', '12 PM']" :key="t">
      {{ t }}
    </span>
  </div>
</div>


          <!-- FORECAST -->
          <Forecast :forecast="forecastData" />
        </div>

        <!-- DETAILS -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="item in [
              ['Feels Like', '33°C'],
              ['Humidity', '37%'],
              ['Wind', '11 km/h'],
              ['Pressure', '1012 hPa'],
            ]"
            :key="item[0]"
            class="bg-zinc-900 border border-zinc-700 rounded-xl p-4 text-center text-white"
          >
            <div class="text-gray-400 text-xs mb-1">{{ item[0] }}</div>
            <div class="text-2xl font-semibold">{{ item[1] }}</div>
          </div>
        </div>

        <!-- EXTRA COMPONENT -->

      </div>

      <!-- ================= RIGHT SIDEBAR ================= -->
      <div class="flex flex-col gap-6 text-white">
        <!-- YESTERDAY -->
        <div class="bg-zinc-800 rounded-2xl p-5">
          <h3 class="font-semibold mb-3">Yesterday</h3>
          <div class="flex justify-between items-center">
            <span class="text-3xl">30°C</span>
            <span class="text-yellow-400 text-sm">+1°C warmer</span>
          </div>
        </div>

        <!-- NEXT 7 DAYS -->
        <div class="bg-zinc-800 rounded-2xl p-5">
          <h3 class="font-semibold mb-4">Next 7 Days</h3>
          <div class="space-y-3 text-sm">
            <div v-for="d in next7Days" :key="d[0]" class="flex justify-between">
              <span>{{ d[0] }}</span>
              <span
                >{{ getIcon(d[1], d[2]) }} {{ d[1] }}° {{ d[2] > 0 ? d[2] + '% rain' : '' }}</span
              >
            </div>
          </div>
        </div>

        <!-- NEARBY LOCATIONS -->
        <div class="bg-zinc-800 rounded-2xl p-5">
          <h3 class="font-semibold mb-4">Nearby Locations</h3>
          <div class="space-y-3 text-sm">
            <div v-for="loc in nearbyLocations" :key="loc[0]" class="flex justify-between">
              <span>{{ loc[0] }}</span>
              <span
                >{{ getIcon(loc[1], loc[2]) }} {{ loc[1] }}°
                {{ loc[2] > 0 ? loc[2] + '% rain' : '' }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<template>
 
</template>
