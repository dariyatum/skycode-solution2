
<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
  <footer class="bg-[#0f0f0f] text-white px-6 md:px-16 pt-16 font-sans">
    <div class="max-w-7xl mx-auto">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between gap-10 mb-14">
        <h2 class="text-3xl md:text-4xl font-20px max-w-md leading-tight">
          Accurate Weather <br />
          Anytime, Anywhere 
        </h2>

        <div class="w-full md:w-auto">
          <p class="mb-3 font-semibold text-lg">Get In Touch!</p>


          <form
            @submit.prevent="handleSubscribe"
            class="relative flex items-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              class="bg-transparent border border-gray-600 rounded-full py-3 px-6 w-full md:w-80 focus:outline-none focus:border[#FFFF00] transition"
            />
            <button
              class="absolute right-1 bg-[#FFFF00] hover:bg-[#FFFACD] active:scale-95 transition text-black px-6 py-2 rounded-full"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      <!-- Main Footer Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700"
      >
        <!-- Contact -->
        <div>
          <h3 class="text-gray-400 uppercase text-xs tracking-widest mb-4">
            Contact Information
          </h3>
          <p class="flex items-center mb-2">
            <i class="fa-solid fa-envelope text-[#FFFF00] mr-3"></i>
            samisokbuntha@gmail.com
          </p>
          <p class="flex items-center mb-2">
            <i class="fa-solid fa-envelope text-[#FFFF00] mr-3"></i>
            weatherskyoce@gmail.com
          </p>
          <p class="flex items-center mb-2">
            <i class="fa-solid fa-phone text-[#FFFF00] mr-3"></i>
            096 233 0393
          </p>
          <p class="flex items-center">
            <i class="fa-solid fa-phone text-[#FFFF00] mr-3"></i>
            016 800 0767
          </p>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-gray-400 uppercase text-xs tracking-widest mb-4">
            Company
          </h3>
          <ul class="space-y-2">
            <li><a href="#" class=" transition">Weather</a></li>
            <li><a href="#" class=" transition">About Us</a></li>
            <li><a href="#" class=" transition">Contact</a></li>
            <li><a href="#" class=" transition">Pricing</a></li>
          </ul>
        </div>

        <!-- Help -->
        <div>
          <h3 class="text-gray-400 uppercase text-xs tracking-widest mb-4">
            Help
          </h3>
          <ul class="space-y-2">
            <li><a href="#" class=" transition">FAQ</a></li>
            <li><a href="#" class=" transition">Help Center</a></li>
            <li><a href="#" class=" transition">Support</a></li>
            <li><a href="#" class=" transition">Documentation</a></li>
          </ul>
        </div>

        <!-- Extra: Weather Info -->
        <div>
          <h3 class="text-gray-400 uppercase text-xs tracking-widest mb-4">
            Today’s Weather
          </h3>
          <p class="text-sm text-gray-300 mb-2">
            🌤️ Phnom Penh, Cambodia
          </p>
          <p class="text-sm text-gray-300">Temperature: 32°C</p>
          <p class="text-sm text-gray-300">Humidity: 68%</p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400"
      >
        <p>© 2026 Skycode. All Rights Reserved.</p>

        <div class="flex space-x-5 mt-4 md:mt-0 text-xl">
          <a aria-label="Facebook" href="#" class="hover:text-[#FFFF00] transition">
            <i class="fab fa-facebook"></i>
          </a>
          <a aria-label="Instagram" href="#" class="hover:text-[#FFFF00] transition">
            <i class="fab fa-instagram"></i>
          </a>
          <a aria-label="YouTube" href="#" class="hover:text-[#FFFF00] transition">
            <i class="fab fa-youtube"></i>
          </a>
          <a aria-label="Twitter" href="#" class="hover:text-[#FFFF00] transition">
            <i class="fab fa-twitter"></i>
          </a>
          <a aria-label="LinkedIn" href="#" class="hover:text-[#FFFF00] transition">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>

</template>

