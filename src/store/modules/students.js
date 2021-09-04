//Student module
import axios from 'axios';

const resource_uri_student = "http://localhost:3000/student/"

const state = {
    students: []
};

const getters = {
    allStudents: state => state.students
};

const actions = {
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

const mutations = {
    setStudents: (state, student) => state.students = student,
    newStudent: (state, student) =>  state.students.unshift(student),
    updStudent: (state, updatedStudent)  => {
        const index = state.students.findIndex(t => t.id === updatedStudent.id);
        if(index !== -1) {
            state.students.splice(index, 1, updatedStudent);
        }
    },
    deleteStudent: (state, student) => state.students.filter(t => student.id !== t.id)
};

export default {
    state, getters, actions, mutations
}