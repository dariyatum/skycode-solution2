<script setup>
  defineProps({
    location:String,
    temperature: String,
    windSpeed:String,

  })

</script>
<template>
   <h3>{{ location }}</h3>
   <h5>{{ temperature }}</h5>
   <span>{{ windSpeed }}</span>
</template>