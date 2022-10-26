import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Manage',
  //   component: () => import('../views/Manage.vue'),
  //   children:[
  //     // {
  //     //   path: '',
  //     //   name: 'Home',
  //     //   component: () => import('../views/Home.vue')
  //     // },
  //     {
  //       path: '/profileedit',
  //       name: 'ProfileEdit',
  //       component: () => import('../views/ProfileEdit.vue')
  //     },
  //     {
  //       path: '/matchmate',
  //       name: 'MatchMate',
  //       component: () => import('../views/MatchMate.vue')
  //     },
  //     {
  //       path: '/yourmate',
  //       name: 'YourMate',
  //       component: () => import('../views/YourMate.vue')
  //     },
  //     {
  //       path: '/messagesent',
  //       name: 'MessageSent',
  //       component: () => import('../views/MessageSent.vue')
  //     },
  //     {
  //       path: '/messagereceived',
  //       name: 'MessageReceived',
  //       component: () => import('../views/MessageReceived.vue')
  //     },
  //     {
  //       path: '/findevent',
  //       name: 'Findevent',
  //       component: () => import('../views/FineEvent.vue')
  //     },
  //     {
  //       path: '/createevent',
  //       name: 'Createevent',
  //       component: () => import('../views/CreateEvent.vue')
  //     },
  //     {
  //       path: '/youreventcreated',
  //       name: 'YourEventCreated',
  //       component: () => import('../views/YourEventCreated.vue')
  //     },
  //     {
  //       path: '/youreventjoint',
  //       name: 'YourEventJoint',
  //       component: () => import('../views/YourEventJoint.vue')
  //     },
  //   ]
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profileedit',
    name: 'ProfileEdit',
    component: () => import('../views/ProfileEdit.vue')
  },
  {

    path: '/findworkoutpartner',
    name: 'FindWorkoutPartner',
    component: () => import('../views/FindWorkoutPartner.vue')
  },
  {
    path: '/findgroupactivity',
    name: 'FindGroupActivity',
    component: () => import('../views/FindGroupActivity.vue')
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
})


export default router;