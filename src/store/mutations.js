export default {
    //task
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) =>  state.tasks.unshift(task),
    updTask: (state, updatedTask)  => {
        const index = state.tasks.findIndex(t => t.id === updatedTask.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }
    },
    deleteTask: (state, task) => state.tasks.filter(t => task.id !== t.id),

    //student
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