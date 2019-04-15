import Vue from 'vue'

import App from './App.vue'

import router from './router'

import './lib/mint-ui/style.css'
import './lib/mui/css/mui.min.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
// import './lib/mint-ui/mui.min.css'

// import './lib/mint-ui/index.js'
// 按需引入部分组件
// 固定顶部
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
