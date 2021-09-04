import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
//import Home from '@/views/Home'
//import Vuex from 'vuex'
import store from './store'
//import Task from '@/views/TaskMain'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
//import User from '@/views/User'
//import Student from '@/views/Student'
import router from './router/index'

//Vue.use(VueRouter) //untuk route ke halaman

//Vue.use(Vuex) //untuk state

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueToast);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home

//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("@/views/About.vue")

//   },
//   {
//     path: "/task-manager",
//     name: "Task",
//     component: Task
//   },
//   {
//     path: "/user",
//     name: "User",
//     component: User
//   },
//   {
//     path: "/student",
//     name: "Student",
//     component: Student
//   },

// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// })

// const store = new Vuex.Store({
//   state: {
//     count: 1,
//     color: 'red',
//   },
//   getters: {
//     doneTodos(state) {
//       return state.todos.filter(function (item) {
//         return item.done == true
//       })
//     },
//     pendingTodos(state) {
//       return state.todos.filter(function (item) {
//         return item.done == false
//       })
//     },
//   }, //getter untuk memfilter state sebelum ditampilkan
//   mutations: {
//     increment(state) {
//       //mutate state
//       state.count++
//     }
//   } //mutation untuk merubah state mirip event di dalam store
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

