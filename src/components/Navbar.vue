<template>
  <nav class="bg-gray-900 text-white px-6 py-4">
    <div class="flex items-center justify-between gap-6">

      <!-- Logo -->
      <RouterLink to="/" class="text-xl font-bold flex-shrink-0">
        <img
          class="w-[120px]"
          src="https://i.ibb.co/Cs9gvJLH/pngwing-com-12.png"
          alt="Logo"
        />
        <h1>Nimbas Travel</h1>
      </RouterLink>
      <div class="hidden md:flex w-[80%]">
        <input
          type="text"
          v-model="search"
          placeholder="Search..."
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white
                 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      <!-- Mobile button -->
      <button
        class="md:hidden text-2xl"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 flex-shrink-0">
        <li v-for="item in menuItems" :key="item.name">
          <RouterLink
            :to="item.link"
            class="transition hover:text-sky-400"
            active-class="text-sky-400 font-semibold"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <ul v-if="isOpen" class="md:hidden mt-4 space-y-4">
      <li v-for="item in menuItems" :key="item.name">
        <RouterLink
          :to="item.link"
          class="block transition hover:text-sky-400"
          active-class="text-sky-400 font-semibold"
          @click="isOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </li>

      <!-- 🔍 Mobile Search -->
      <li>
        <input
          type="text"
          v-model="search"
          placeholder="Search..."
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white
                 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  components: {
    RouterLink
  },
  data() {
    return {
      isOpen: false,
      search: "",
      menuItems: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Register", link: "/register" }
      ]
    };
  }
};
</script>
