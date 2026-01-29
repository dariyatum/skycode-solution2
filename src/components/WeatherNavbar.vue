<template>
  <header>

    <!-- TOP BAR -->
    <div class="border-b">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

        <!-- BBC logo -->
        <div class="flex items-center gap-6">
          <div class="flex gap-1">
            <span
              v-for="l in ['B','B','C']"
              :key="l"
              class="bg-black text-white px-2 py-1 font-bold text-sm"
            >
              {{ l }}
            </span>
          </div>

          <span class="text-sm font-semibold cursor-pointer">
            👤 Sign in
          </span>
        </div>

        <!-- Menu -->
        <ul class="hidden md:flex gap-6 font-semibold text-sm">
          <li v-for="item in menu" :key="item" class="cursor-pointer">
            {{ item }}
          </li>
        </ul>

        <!-- Search -->
        <div class="hidden md:flex items-center border px-3 py-1 gap-2">
          🔍
          <input placeholder="Search BBC" class="outline-none text-sm" />
        </div>
      </div>
    </div>

    <!-- WEATHER BAR -->
    <div class="bg-[#0077b6]">
      <div class="max-w-7xl mx-auto flex items-center gap-6 px-4 py-4">
        <h1 class="text-white text-3xl font-bold">WEATHER</h1>

        <div class="flex bg-white flex-1 max-w-3xl">
          <input
            v-model="city"
            placeholder="Enter a city"
            class="flex-1 px-4 py-3 outline-none"
          />
          <button class="px-4 text-xl" @click="search">
            🔍
          </button>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup>
import { ref } from "vue";

const city = ref("");

const menu = [
  "Home",
  "News",
  "Sport",
  "Business",
  "Innovation",
  "Culture",
  "Travel",
  "More"
];

const search = () => {
  console.log("City:", city.value);
};
</script>
