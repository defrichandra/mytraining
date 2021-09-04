import Home from '@/views/Home'
import Task from '@/views/TaskMain'
import User from '@/views/User'
import Student from '@/views/Student'

export default [
    {
      path: "/",
      name: "Home",
      component: Home 
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/task-manager",
      name: "Task",
      component: Task
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/student",
      name: "Student",
      component: Student
    },
];