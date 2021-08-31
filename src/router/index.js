import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PassView from '../views/PassView'
import Login from '../views/Login.vue'
import AddPass from '../views/AddPass.vue'
import CrudPass from '../views/CrudPass.vue'
import DeletePass from '../views/DeletePass.vue'
import UpdatePass from '../views/UpdatePass.vue'
import FindPass from '../views/FindPass.vue'
import ApplyPass from '../views/ApplyPass.vue'
import store from '../store/'
import Approve from '../views/Approve.vue'
import Dashboard from '../views/Dashboard.vue'
import Table from '../components/Table.vue'

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
    path: '/pass',
    name: 'Pass',
    component: PassView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crud-pass',
    name: 'CrudPass',
    component: CrudPass,
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'add-pass',
      component: AddPass
    },
    {
      path: 'delete-pass',
      component: DeletePass
    },
    {
      path: 'update-pass',
      component: UpdatePass
    },
    {
      path: 'find-pass',  
      component: FindPass
    },


    ]
  },
  {
    path: '/approve',
    name: 'Approve',
    component: Approve,
    meta: {
      requiresAuth: true
    }
    
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },children: [{
      path: 'table',
      component: Table
    },]
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
