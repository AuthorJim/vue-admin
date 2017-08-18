// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import '../theme/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
