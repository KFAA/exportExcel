import Vue from 'vue'
import App from './App.vue'
import Blob from "blob"
import XLSX from "xlsx-style"
Vue.prototype.Blob = Blob
Vue.prototype.XLSX = XLSX
new Vue({
  el: '#app',
  render: h => h(App)
})
