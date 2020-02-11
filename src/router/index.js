import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'

Vue.use(Router)
/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/List',
            name: 'List',
            component: List
        }
    ]
})
