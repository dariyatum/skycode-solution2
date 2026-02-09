<template>
  <div class="min-h-screen grid place-items-center">
    <form
      @submit.prevent="handleSubmit"
      class="w-full max-w-md p-8 rounded-xl shadow-lg bg-gray-800"
    >
      <!-- Title -->
      <h2 class="text-2xl font-bold text-center mb-6">
        {{ isLogin ? "Login" : "Register" }}
      </h2>

      <!-- Username (Register only) -->
      <div v-if="!isLogin" class="mb-4">
        <label class="block text-sm font-medium">Username</label>
        <input
          v-model="form.username"
          type="text"
          class="w-full mt-1 px-4 py-2 border rounded-lg"
          placeholder="Enter username"
        />
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full mt-1 px-4 py-2 border rounded-lg"
          placeholder="Enter email"
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        <label class="block text-sm font-medium">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full mt-1 px-4 py-2 border rounded-lg"
          placeholder="Enter password"
        />
      </div>

      <!-- Confirm Password (Register only) -->
      <div v-if="!isLogin" class="mb-6">
        <label class="block text-sm font-medium">Confirm Password</label>
        <input
          v-model="form.confirmPassword"
          type="password"
          class="w-full mt-1 px-4 py-2 border rounded-lg"
          placeholder="Confirm password"
        />
      </div>

      <!-- Submit Button (SPACE ADDED HERE) --> <br>
      <button
        type="submit"
        class="w-full mt-4 bg-yellow-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        {{ isLogin ? "Login" : "Register" }}
      </button>

      <!-- Switch Mode -->
      <p class="text-center text-sm mt-4">
        <span v-if="isLogin">
          Don't have an account?
          <button
            type="button"
            @click="toggleMode"
            class="text-indigo-600 font-semibold"
          >
            Register
          </button>
        </span>

        <span v-else>
          Already have an account?
          <button
            type="button"
            @click="toggleMode"
            class="text-indigo-600 font-semibold"
          >
            Login
          </button>
        </span>
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"

const isLogin = ref(true)

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
}

const handleSubmit = () => {
  if (isLogin.value) {
    alert(`Login: ${form.email} / ${form.password}`);
  } else {
    alert(`Register: ${JSON.stringify(form, null, 2)}`);
  }
}
</script>
