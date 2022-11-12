import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home_wenjun.vue')
      },
      {
        path: '/profileedit',
        name: 'ProfileEdit',
        component: () => import('../views/ProfileEdit.vue')
      },
      {
        path: '/setpassword',
        name: 'SetPassword',
        component: () => import('../views/SetPassword.vue')
      },
      {
        path: '/matchmate',
        name: 'MatchMate',
        component: () => import('../views/MatchMate.vue')
      },
      {
        path: '/yourmate',
        name: 'YourMate',
        component: () => import('../views/YourMate.vue')
      },
      {
        path: '/messagesent',
        name: 'MessageSent',
        component: () => import('../views/MessageSent.vue')
      },
      {
        path: '/messagereceived',
        name: 'MessageReceived',
        component: () => import('../views/MessageReceived.vue')
      },
      {
        path: '/findevent',
        name: 'Findevent',
        component: () => import('../views/FindEvent.vue')
      },
      {
        path: '/createevent',
        name: 'Createevent',
        component: () => import('../views/CreateEvent.vue')
      },
      {
        path: '/youreventcreated',
        name: 'YourEventCreated',
        component: () => import('../views/YourEventCreated.vue')
      },
      {
        path: '/youreventjoined',
        name: 'YourEventJoined',
        component: () => import('../views/YourEventJoined.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
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
  // {
  //
  //   path: '/findworkoutpartner',
  //   name: 'FindWorkoutPartner',
  //   component: () => import('../views/FindWorkoutPartner.vue')
  // },
  // {
  //   path: '/findgroupactivity',
  //   name: 'FindGroupActivity',
  //   component: () => import('../views/FindGroupActivity.vue')
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../views/Profile.vue')
  // },


]

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
})


export default router;
