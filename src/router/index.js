import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoView from '../views/TodoView'
import Login from '../views/Login.vue'
import AddTodo from '../views/AddTodo.vue'
import CrudTodo from '../views/CrudTodo.vue'
import DeleteTodo from '../views/DeleteTodo.vue'
import UpdateTodo from '../views/UpdateTodo.vue'
import FindTodo from '../views/FindTodo.vue'
import ApplyPass from '../views/ApplyPass.vue'
import store from '../store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/applypass',
    name: 'ApplyPass',
    component: ApplyPass,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crud-todo',
    name: 'CrudTodo',
    component: CrudTodo,
    meta: {
      requiresAuth: true
    },
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(!store.state.isSignedIn);
    if (!store.state.isSignedIn) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})
export default router
