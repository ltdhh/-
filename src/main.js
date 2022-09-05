import Vue from 'vue'
import App from './App.vue'














Vue.config.productionTip = false




let vm = new Vue({
  render: h => h(App),


  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')


