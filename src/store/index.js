import Vuex from 'vuex'
import Vue from 'vue'
//import tasks from './modules/tasks'
// import users from './modules/users'
//import students from './modules/students'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex) //untuk store

export default new Vuex.Store({
    // modules: {
    //     tasks,
    //     // users,
    //     students,
    // }
    actions,
    getters,
    mutations,
    state,
});