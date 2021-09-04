import axios from 'axios';

const resource_uri = "http://localhost:3000/tasks/"
const resource_uri_student = "http://localhost:3000/student/"

export default {
    //task manager
        async fetchTasks({ commit }) {
            const response = await axios.get(resource_uri);
            commit('setTasks', response.data);
        },
        async addTask({ commit }, task)  {
            const response = await axios.post(resource_uri, task);
            commit('newTask', response.data);
        },
        async updateTask({ commit }, task) {
            const response = await axios.put(`${resource_uri}${task.id}`, task);
            commit('updTask', response.data);
        },
        async removeTask({ commit }, task) {
            await axios.delete(`${resource_uri}${task.id}`, task);
            commit('deleteTask', task);
            },   
    //student
    async fetchStudents({ commit }) {
        const response = await axios.get(resource_uri_student);
        commit('setStudents', response.data);
    },
    async addStudent({ commit }, student)  {
        const response = await axios.post(resource_uri_student, student);
        commit('newStudent', response.data);
    },
    async updateStudent({ commit }, student) {
        const response = await axios.put(`${resource_uri_student}${student.id}`, student);
        commit('updStudent', response.data);
    },
    async removeStudent({ commit }, student) {
        await axios.delete(`${resource_uri_student}${student.id}`, student);
        commit('deleteStudent', student);
        },
};