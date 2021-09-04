<template>
    <div class="hello">
        <!-- <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
        </ul> -->
        
        <h1>About</h1>
        <p>Tentang Kami</p>
        <!-- <p>{{ $store.state.count }}</p>
        <button @click="addCount"> Tambah </button> -->
    </div>
</template>

<script>
export default {
    name: "About",
    // methods: {
    //   addCount() {
    //     this.$store.commit('increment')
    //   }
    // }
};
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
