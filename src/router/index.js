import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'
import Find from '../views/Find.vue'*/

Vue.use(VueRouter)
//路由的懒加载
const Home = () => import('../views/Home.vue');
const Find = () => import('../views/Find.vue');
const FindNews = () => import('../views/FindNews.vue');
const FindMessage = () => import('../views/FindMessage.vue');
const Container = () => import('../views/Container');
const ContainerXm=()=>import('../components/xioami/ContainerXM')
const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home
  },
  {
    path: '/find',
    component: Find,
    // 路由嵌套
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: FindNews
      },
      {
        path: 'message',
        component: FindMessage
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.这种方式是路由的懒加载，在用到的时候才会调用
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/container',
    component: Container
  },
  {
    path:'/containerxiaomi',
    component:ContainerXm
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
