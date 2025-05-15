import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';
// import HomeView from '../views/HomeView.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
// ]

// console.log(process.env.BASE_URL);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
})

// router.beforeEach((to,from) => {
//   document.title = to.meta?.title ?? 'PSX-DOC';
// })

export default router
