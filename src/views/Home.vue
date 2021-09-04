<template>
    <div class="hello">
        <!-- <Header /> -->
        <!-- dipindahin ke header -->
        <!-- <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
        </ul> --> 
        <h1>Home</h1>
        <p>Halaman Utama</p>
        <ButtonCounter/>
        <ButtonCounter/>
        <ButtonCounter/>
        <!-- <ButtonCounter 
            v-for="post in posts"
            v-bind="post.id"
            v-bind:msg="post.title"
        /> -->
        <!-- <div>
            {{ info }}
        </div> -->
        <!-- <div>
            <h1>Bitcoin Price Index</h1>
            <div v-for="(currency, index) in info" class="currency" :key="index"> 
                {{ currency.description }}:
                <span class="lighten">
                    <span v-html="currency.symbol"></span>
                    {{ currency.rate_float | currencydecimal }}
                </span>
            </div>
        </div> -->
        <div>
            <h1>Bitcoin Price Index</h1>
            <section v-if="errored">
                <p>
                    We're sorry, we're not able to retrieve this information at the 
                    moment, please try back later
                </p>
            </section>
            <section v-else>
                <div v-if="loading">Loading...</div>
                <div v-else 
                v-for="(currency, index) in info" 
                class="currency" 
                :key="index"> 
                {{ currency.description }}:
                <span class="lighten">
                    <span v-html="currency.symbol"></span>
                    {{ currency.rate_float | currencydecimal }}
                </span>
            </div>
            <!-- <div v-else v-for="(siswa, index) in info" class="currency" :key="index"> 
                {{ siswa.nama }}:
                <span>
                    {{ siswa.alamat }} {{ siswa.usia }}
                </span>
            </div> -->
            </section>        
        </div>
    </div>
</template>

<script>
import ButtonCounter from '@/components/ButtonCounter.vue'

import axios from "axios"

// import Header from '@/components/Header.vue'

export default {
    name: "Home",
    components: {
        ButtonCounter,
        //Header
    },
    // data() {
    //     return {
    //         posts: [
    //             {id: 1, title: "Tombol 1"},
    //             {id: 2, title: "Tombol 2"},
    //             {id: 3, title: "Tombol 3"}
    //         ]
    //     }
    // },
    data() {
        return {
            info: null,
            loading: true,
            errored: false,
        };
    },
    mounted() {
        axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        //.then((response) => (this.info = response)) //untuk menampilkan data tapi masih berantakan
        // .then((response) => (this.info = response.data.bpi)) //menampilkan data rapih dan memfilter apa yang ingin ditampilkan
        // .catch((error) => console.log(error)); //menampilkan error 
        .then((response) => {
            this.info = response.data.bpi;
            }) 
        .catch((error) => {
            console.log(error);
            this.errored = true;
        })
        .finally(() => (this.loading = false));    
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }, //untuk membuat desimal di 2 angka dibelakang
    // mounted() {
    //     axios
    //     .get("http://localhost:3000/siswa")
    //     .then((response) => {
    //         this.info = response.data
    //         console.log('responnya', response)
    //         }) 
    //     .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //     })
    //     .finally(() => (this.loading = false));    
    // },

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
