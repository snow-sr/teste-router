import { createRouter, createWebHistory } from 'vue-router'

function lazyload(view, folder){
  if(folder) {
    return import(`../views/${folder}/${view}.vue`)
  } else {
    return import(`../views/${view}.vue`)
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyload('HomeView')
    },
    {
      path: '/about',
      name: 'about',
      component: lazyload('AboutView')
    }
  ]
})

export default router