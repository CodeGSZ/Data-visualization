import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Show from '@/views/BaseBox.vue'
import Bar from '../components/Bar'
import Line from '@/components/Line.vue'
import Nightingale from '@/components/Nightingale.vue'
import Pie from '@/components/pie.vue'
import Radar from '@/components/radar.vue'


const routes = [
  {
    name: 'Show',
    path: '/show',
    component: Show
  },
  {
    name: 'Bar',
    path: '/bar',
    component: Bar
  },
  {
    name: 'Line',
    path: '/line',
    component: Line
  },
  {
    name: 'Nightingale',
    path: '/nanding',
    component: Nightingale
  },
  {
    name: 'Pie',
    path: '/pie',
    component: Pie
  },
  {
    name: 'Radar',
    path: '/radar',
    component: Radar
  },
  {
    // 配置路由重定向
    path: '/',
    redirect: '/show'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
