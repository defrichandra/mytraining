<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/task-manager">Task Manager</router-link></li>
        <li><router-link to="/user">User</router-link></li>
        <li><router-link to="/student">Student</router-link></li>
            
    </ul>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {}; 
</script>

<style scoped>
h3 {    
    margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
