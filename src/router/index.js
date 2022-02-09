import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import Players from '@/views/Players.vue';
import Teams from '@/views/Teams.vue';
import Comments from '@/views/Comments.vue';
import SinglePlayer from '@/views/SinglePlayer.vue';
import SingleComment from '@/views/SingleComment.vue';
import SingleTeam from '@/views/SingleTeam.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/single_comment/:id',
    name: 'SingleComment',
    component: SingleComment
  },
  {
    path: '/single_player/:id',
    name: 'SinglePlayer',
    component: SinglePlayer
  },
  {
    path: '/single_team/:id',
    name: 'SingleTeam',
    component: SingleTeam
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
