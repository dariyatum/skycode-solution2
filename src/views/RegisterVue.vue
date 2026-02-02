<template>  

  <div class=" bg-cover bg-center h-177 w-384 *: flex items-center justify-center justi gap-20  ">
    <div class="min-h-screen flex gap-16 items-center justify-center">
  <div
    class="w-[320px] h-[520px] rounded-xl bg-gradient-to-b 
           flex  flex-col items-center justify-center text-center px-6 bg-zinc-800  "
  >
    <!-- Logo -->
    <div class="mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 2c3 3 6 4 8 8-3 2-5 5-8 8-3-3-6-6-8-8 2-4 5-5 8-8z"
        />
      </svg>
    </div>

    <!-- Title -->
    <h1 class="text-white text-5xl font-serif tracking-widest mb-10">
      JOIN US
    </h1>
    <br> <br>

    <!-- Description -->
    <p class="text-gray-300 text-2xl leading-relaxed mb-12">
      Subscribe Easy Tutorials YouTube <br />
      Channel To More Videos
    </p>
      <br> <br>
    <!-- Button -->
    <button
      class="bg-white text-emerald-400 font-semibold px-8 py-3
             rounded-full hover:bg-emerald-400 hover:text-white
             transition duration-300"
    >
      About Us
    </button>
  </div>
</div>

    <!-- form -->
     <div class="min-h-screen flex items-center justify-center ">
  <div class="w-120 p-8 rounded-xl bg-zinc-800">
    
    <!-- Title -->
    <h2 class="text-2xl font-bold text-white text-center   mb-8">
      Create Account
    </h2>
      <br>  
    <!-- Form -->
    <form class="space-y-4">
      
      <!-- Username -->
      <div>
        <label class="block text-sm mb-12 font-medium text-white text-lg mb-1">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-white text-lg  mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br>

      <!-- Password -->
      <div>
        <label class="block text-sm font-medium text-white text-lg mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br>

      <!-- Confirm Password -->
      <div>
        <label class="block text-sm font-medium text-lg text-white mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <br>

      <!-- Button -->
      <button
        type="submit"
        class="w-full text-xl bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Register
      </button>

    </form>

    <!-- Footer -->
    <p class="text-center text-sm text-white     mt-4">
      Already have an account?
      <a href="#" class="text-blue-600 hover:underline">
        Login
      </a>
    </p>

  </div>
</div>



</div>

  <div >
    <h1></h1>

    
  </div>

</template>

<script setup>

</script>
