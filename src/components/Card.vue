<script setup>
defineProps({
  title: String,
  value: String,
  icon: String
})
</script>

<template>
  <div class="bg-white rounded-xl shadow p-6 text-center">
    <div class="text-3xl mb-2">{{ icon }}</div>
    <h3 class="text-gray-600 text-sm">{{ title }}</h3>
    <p class="text-2xl font-bold text-gray-800">{{ value }}</p>
  </div>
</template>
