import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/HelloWorld.vue'
import about from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: home
    },
    {
        path: '/about',
        component: about
    }
]

const router = new VueRouter({
    routes
})

export default router