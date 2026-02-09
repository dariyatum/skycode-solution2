
<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>


<script setup>
import { RouterView } from 'vue-router'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-6 p-8">
    <Card title="Temperature" value="36°C" icon="🌡️" />
    <Card title="Humidity" value="70%" icon="💧" />
    <Card title="Wind Speed" value="12 km/h" icon="🌬️" />
  </div>


  <Footer />
  <RouterView />
</template>


