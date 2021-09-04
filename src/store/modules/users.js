//User module
import axios from 'axios';

const resource_uri_user = "http://localhost:3000/user/"
const state = {
    users: []
};

const getters = {
    allUsers: state => state.users
};

const actions = {
    async fetchUsers({ commit }) {
        const response = await axios.get(resource_uri_user);
        commit('setUsers', response.data);
    },
    async addUser({ commit }, user)  {
        const response = await axios.post(resource_uri_user, user);
        commit('newUser', response.data);
    },
    async updateUser({ commit }, user) {
        const response = await axios.put(`${resource_uri_user}${user.id}`, user);
        commit('updUser', response.data);
    },
    async removeUser({ commit }, user) {
        await axios.delete(`${resource_uri_user}${user.id}`, user);
        commit('deleteUser', user);
        },
};

const mutations = {
    setUsers: (state, users) => state.users = users,
    newUser: (state, user) =>  state.users.unshift(user),
    updUser: (state, updatedUser)  => {
        const index = state.users.findIndex(t => t.id === updatedUser.id);
        if(index !== -1) {
            state.users.splice(index, 1, updatedUser);
        }
    },
    deleteUser: (state, user) => state.users.filter(t => user.id !== t.id)
};

export default {
    state, getters, actions, mutations
}