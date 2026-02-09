<template>
 <div>
 <h2>Users from API</h2>
 <ul>
 <li v-for="user in users" :key="user.id">
 {{ user.name }} - {{ user.email }}
 </li>
 </ul>
 </div>
</template>
<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'
export default {
 setup() {
 const users = ref([])
 const fetchUsers = async () => {
 const response = await axios.get('https://jsonplaceholder.typicode.com/users')
 users.value = response.data
 }
 onMounted(() => {
 fetchUsers()
 })
 return { users }
 }
}
</script>