<template>
  <nav class="bg-zinc-800 text-white px-6 py-4 fixed right-0 left-0 z-999 top-0">
    <div class="flex items-center justify-between gap-6">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 flex-shrink-0">
        <img class="w-[120px]" src="https://i.ibb.co/Cs9gvJLH/pngwing-com-12.png" alt="Logo" />
        <h1 class="font-bold text-lg">Nimbus Travel</h1>
      </RouterLink>

      <!-- Desktop Search -->
      <div class="hidden md:block w-[50%] relative">
        <input
          type="text"
          v-model="search"
          @focus="showDropdown = true"
          @input="filterOptions"
          placeholder="Search destinations, flights, tours..."
          class="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <ul
          v-if="showDropdown && filteredOptions.length"
          class="absolute z-50 mt-1 w-full bg-gray-800 rounded-lg shadow-lg"
        >
          <li
            v-for="option in filteredOptions"
            :key="option"
            @click="selectOption(option)"
            class="px-4 py-2 cursor-pointer hover:bg-gray-700"
          >
            {{ option }}
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-2xl" @click="isOpen = !isOpen">☰</button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 flex-shrink-0">
        <li v-for="item in menuItems" :key="item.name">
          <RouterLink
            :to="item.link"
            class="transition hover:text-yellow-400"
            active-class="text-yellow-400 font-semibold"
          >
            {{ item.name }}
          </RouterLink>
        </li>
            <li>
      <!-- NOT LOGGED IN -->
      <template v-if="!isLoggedIn">
        <RouterLink to="/login" class="hover:text-yellow-400"> Login </RouterLink>

        <RouterLink
          to="/register"
          class="bg-yellow-500 text-black px-4 py-1 rounded-lg hover:bg-yellow-400"
        >
          Register
        </RouterLink>
      </template>

      <!-- LOGGED IN -->
      <template v-else>
        <span class="text-2xl cursor-pointer">👤</span>
        <button @click="logout" class="text-sm text-red-400 hover:text-red-300">Logout</button>
      </template>
    </li>
      </ul>

    </div>
    <!-- Auth Buttons -->


    <!-- Mobile Menu -->
    <ul v-if="isOpen" class="md:hidden mt-4 space-y-4">
      <li v-for="item in menuItems" :key="item.name">
        <RouterLink
          :to="item.link"
          class="block hover:text-sky-400"
          active-class="text-sky-400 font-semibold"
          @click="isOpen = false"
        >
          <!-- Mobile Auth -->
          <li class="border-t border-gray-700 pt-4">
            <template v-if="!isLoggedIn">
              <RouterLink to="/login" class="block">Login</RouterLink>
              <RouterLink to="/register" class="block mt-2">Register</RouterLink>
            </template>

            <template v-else>
              <button @click="logout" class="text-red-400">Logout</button>
            </template>
          </li>

          {{ item.name }}
        </RouterLink>
      </li>

      <!-- Mobile Search -->
      <li class="relative">
        <input
          type="text"
          v-model="search"
          @focus="showDropdown = true"
          @input="filterOptions"
          placeholder="Search..."
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <ul
          v-if="showDropdown && filteredOptions.length"
          class="absolute z-50 mt-1 w-full bg-gray-800 rounded-lg shadow-lg z-999"
        >
          <li
            v-for="option in filteredOptions"
            :key="option"
            @click="selectOption(option)"
            class="px-4 py-2 cursor-pointer hover:bg-gray-700"
          >
            {{ option }}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from "vue-router";

export default {

 setup() {
 const store = useStore()
 const isLoggedIn = computed(() => store.getters.isLoggedIn)
 const user = computed(() => store.getters.user)
 return { isLoggedIn, user }
 },
  name: "Navbar",
  components: { RouterLink },

  data() {
    return {
      isOpen: false,
      search: "",
      showDropdown: false,

      options: [
        "Phnom Penh",
        "Siem Reap",
        "Prey Veng",
        "Takeo",
        "Kampong Chnang",
        "Kampong Speu",
        "Kep",
        "Kampong Cham",
        "Kampot",
        "Preah Vihear",
        "Pailin",
        "Oddar Meanchey",
        "Battambang",
        "Banteay Meanchey",
        "Kandal",
        "Ratanakiri",
        "Pursat",
        "Mondulkiri",
        "Tbong Khmum",
        "Stung Treng",
        "Svay Rieng",
        "Kratie",
        "Koh Kong",
        "Preah Sihanouk"
      ],
computed: {
  ...mapGetters(["isLoggedIn", "user"])
},

      filteredOptions: [],

      menuItems: [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" }
]

    };
  },

  methods: {
    ...mapActions(["logout"]),

    filterOptions() {
      this.showDropdown = true;
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    selectOption(option) {
      this.search = option;
      this.showDropdown = false;
      this.isOpen = false;

      // 👉 SEND CITY TO HOME VIEW
      this.$router.push({
        path: "/",
        query: { city: option }
      });
    },

    closeDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.showDropdown = false;
      }
    }
  },

  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  }
};
</script>
