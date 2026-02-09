import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'


import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),

    vueDevTools(),
     tailwindcss(),

    tailwindcss(),


  ],
    

})
