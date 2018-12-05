import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '@/components/goods'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/goods',
      name:'goods',
      component:goods
    },
    {
      path:'/Parent',
      name:'Parent',
      component:Parent
    }
  ]
})
