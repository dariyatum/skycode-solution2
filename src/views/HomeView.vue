<template>
<div class="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
  <div class="w-full max-w-5xl bg-zinc-800 rounded-2xl p-4 md:p-6 text-white shadow-xl">

    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between gap-6">
      
      <!-- Left -->
      <div class="flex items-center gap-4">
        <div class="text-5xl md:text-6xl">🌤</div>

        <div>
          <div class="text-4xl md:text-5xl font-semibold">
            31<span class="text-xl md:text-2xl align-top">°C</span>
          </div>

          <!-- Extra info hidden on mobile -->
          <div class="hidden sm:block text-sm text-gray-400 mt-1">
            Precipitation: 2% <br />
            Humidity: 37% <br />
            Wind: 11 km/h
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="md:text-right">
        <div class="text-xl md:text-2xl font-medium">Weather</div>
        <div class="text-sm text-gray-400">Wednesday 2:00 PM</div>
        <div class="text-sm text-gray-400">Partly sunny</div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-4 md:gap-6 mt-6 text-sm md:text-base text-gray-400">
      <button class="text-white border-b-2 border-yellow-400 pb-1">
        Temperature
      </button>
      <button>Precipitation</button>
      <button>Wind</button>
    </div>

    <!-- Graph -->
    <div class="mt-6 relative h-32 md:h-40 bg-zinc-900 rounded-xl overflow-hidden">
      <svg
        viewBox="0 0 100 30"
        preserveAspectRatio="none"
        class="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,10 C15,8 25,15 40,18 55,22 65,24 80,18 90,14 100,12 L100,30 L0,30 Z"
          fill="rgba(250, 204, 21, 0.35)"
        />
        <path
          d="M0,10 C15,8 25,15 40,18 55,22 65,24 80,18 90,14 100,12"
          fill="none"
          stroke="#facc15"
          stroke-width="1.5"
        />
      </svg>

      <!-- Time labels hidden on mobile -->
      <div class="hidden md:flex absolute bottom-2 left-0 w-full justify-between px-4 text-xs text-gray-400">
        <span>3 PM</span>
        <span>6 PM</span>
        <span>9 PM</span>
        <span>12 AM</span>
        <span>3 AM</span>
        <span>6 AM</span>
        <span>9 AM</span>
        <span>12 PM</span>
      </div>
    </div>

    <!-- Forecast -->
    <div class="mt-6 overflow-x-auto">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 min-w-[640px] md:min-w-0">
        
        <div class="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-700">
          <div class="text-sm text-gray-300">Wed</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">31° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Thu</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">31° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Fri</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">32° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Sat</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">33° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Sun</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">32° <span class="text-gray-400">21°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Mon</div>
          <div class="text-3xl my-2">☁️</div>
          <div class="text-sm">32° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Tue</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">32° <span class="text-gray-400">22°</span></div>
        </div>

        <div class="bg-zinc-900 rounded-xl p-4 text-center">
          <div class="text-sm text-gray-300">Wed</div>
          <div class="text-3xl my-2">🌤</div>
          <div class="text-sm">33° <span class="text-gray-400">23°</span></div>
        </div>

      </div>
    </div>

  </div>
</div>

</template>
  