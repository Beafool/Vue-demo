/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//声明使用插件
Vue.use(VueResource) //所有的组件对象都有了一个属性对象$http， .get()/.post() 发ajax请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { // 注册组件
    App
  },
  template: '<App/>'
})
