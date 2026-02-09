<template>
  <div class="min-h-screen flex justify-center items-center bg-zinc-900">
    <form @submit.prevent="handleLogin" class="bg-zinc-800 p-8 rounded-lg w-full max-w-md text-white">
      <h2 class="text-2xl font-bold mb-6">Login</h2>

      <label class="block mb-2">Email</label>
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="w-full px-3 py-2 rounded mb-4 bg-zinc-700 text-white focus:outline-none"
        required
      />

      <label class="block mb-2">Password</label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter password"
        class="w-full px-3 py-2 rounded mb-6 bg-zinc-700 text-white focus:outline-none"
        required
      />

      <button
        type="submit"
        class="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-semibold"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleLogin = () => {
      // Dispatch login to Vuex
      store.dispatch("login", { email: email.value });

      // Redirect home
      router.push("/");
    };

    return { email, password, handleLogin };
  }
};
</script>

