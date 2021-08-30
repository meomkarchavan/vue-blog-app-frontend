import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog'
import Login from '../views/Login.vue'
import AddPost from '../views/AddPost.vue'
import CrudPost from '../views/CrudPost.vue'
import DeletePost from '../views/DeletePost.vue'
import UpdatePost from '../views/UpdatePost.vue'
import FindPost from '../views/FindPost.vue'
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
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/crud-post',
    name: 'CrudPost',
    component: CrudPost,
    children: [{
      path: 'add-post',
      component: AddPost
    },
    {
      path: 'delete-post',
      component: DeletePost
    },
    {
      path: 'update-post',
      component: UpdatePost
    },
    {
      path: 'find-post',
      component: FindPost
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
