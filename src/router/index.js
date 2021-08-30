import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import TodoView from '../views/TodoView'
import Login from '../views/Login.vue'
import AddTodo from '../views/AddTodo.vue'
import CrudTodo from '../views/CrudTodo.vue'
import DeleteTodo from '../views/DeleteTodo.vue'
import UpdateTodo from '../views/UpdateTodo.vue'
import FindTodo from '../views/FindTodo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoView,
  },
  {
    path: '/crud-todo',
    name: 'CrudTodo',
    component: CrudTodo,
    children: [{
      path: 'add-todo',
      component: AddTodo
    },
    {
      path: 'delete-todo',
      component: DeleteTodo
    },
    {
      path: 'update-todo',
      component: UpdateTodo
    },
    {
      path: 'find-todo',
      component: FindTodo
    },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
