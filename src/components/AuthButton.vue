<template>
 <button @click="handleAuth">
 {{ isLoggedIn ? 'Logout' : 'Login' }}
 </button>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
 setup() {
 const store = useStore()
 const isLoggedIn = computed(() => store.getters.isLoggedIn)
 const handleAuth = () => {
 if (isLoggedIn.value) {
 store.dispatch('logout')
 } else {
 store.dispatch('login', { name: 'Student User', role: 'student' })
 }
 }
 return { isLoggedIn, handleAuth }
  }
}
</script>