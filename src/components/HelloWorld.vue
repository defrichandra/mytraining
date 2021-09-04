<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- menampilkan data -->
    <p>Nama : {{name}}</p>
    <p>Link: {{website}}</p>
    <!-- conditional rendering -->
    <h1 v-if="tinggi >= 170">Tinggi di atas 170cm</h1>
    <h1 v-else-if="tinggi >= 140">Tinggi di antara 140 - 170 cm</h1>
    <h1 v-else>Tinggi di bawah 140cm</h1>
    <!-- list rendering -->
    <ul>
      <li v-for="(car, index) in cars" :key="index"> <!-- key dan titik dua harus nempel -->
        {{car.name}}
      </li>
    </ul>
    <!-- event handling -->
    Masukkan Nama
    <input type="text" v-model="nama">
    <button type="buton" @click="showMessage">Klik</button> -->
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      //menampilkan data
      name: "test",
      website: "https://test.co.id",
      // conditional rendering
      tinggi: 155,
      // list rendering
      cars: [{name:"Toyota"}, {name:"Mitsubishi"}, {name:"Daihatsu"}],
      // event handling
      nama: "",
    };
  },
  methods: {
    showMessage: function () {
      alert(`Selamat datang, ${this.nama}`); //tanda petiknya beda
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
