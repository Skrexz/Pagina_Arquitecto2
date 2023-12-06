import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: () => import('../views/ProyectosView.vue')
    },
    {
      path: '/sobre-nosotros',
      name: 'Sobre nosotros',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cubiertas',
      name: 'Cubiertas',
      component: () => import('../views/CubiertasView.vue')
    },
    {
      path: '/estructura',
      name: 'Estructura',
      component: () => import('../views/EstructuraView.vue')
    },
    {
      path: '/estudios',
      name: 'Estudios',
      component: () => import('../views/EstudiosView.vue')
    },
    {
      path: '/fachadas',
      name: 'Fachadas',
      component: () => import('../views/FachadasView.vue')
    },
    {
      path: '/mantenimientos',
      name: 'Mantenimientos',
      component: () => import('../views/MantenimientosView.vue')
    },
    {
      path: '/carpinteria',
      name: 'Carpinteria',
      component: () => import('../views/CarpinteriametalicaView.vue')
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.name) {

    document.title = to.name; // Establece el título del documento según el nombre de la ruta
  }
  next();
});

export default router
