import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import StrategyDigital from '@/views/HomeViews/StrategyDigital.vue'
import StrategyConsult from '@/views/HomeViews/StrategyConsult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: 'strategydigital',
        name:'StrategyDigital',
        component: StrategyDigital
      },
      { path: 'strategyconsult',
        name:'StrategyConsult',
        component: StrategyConsult
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
