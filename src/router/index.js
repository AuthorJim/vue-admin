import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Goods from 'components/goods/goods'
import Order from 'components/order/order'
import Customer from 'components/customer/customer'
import Seller from 'components/seller/seller'
import Datas from 'components/datas/datas'
import Property from 'components/property/property'
import Marketing from 'components/marketing/marketing'
import Settings from 'components/settings/settings'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/seller', component: Seller },
    { path: '/goods', component: Goods },
    { path: '/order', component: Order },
    { path: '/customer', component: Customer },
    { path: '/datas', component: Datas },
    { path: '/property', component: Property },
    { path: '/marketing', component: Marketing },
    { path: '/settings', component: Settings }
  ]
})
