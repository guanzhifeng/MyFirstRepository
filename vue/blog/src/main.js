import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './network/ajax'

// import {ajax,ajax1} from "./network/request";


Vue.config.productionTip = false
Vue.use(ajax)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = 'http://123.207.32.32:8000/home/multidata'
// axios.defaults.timeout = 5000
//
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     params: {
//     }
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     method:'post',
//     data: {
//       type: 'pop',
//       page: 1
//     }
//   })
// ]).then( ([res1,res2]) => {
//   console.log(res1);
//   console.log(res2);
// })
// const ajax1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// const ajax2 = axios.create({
//   baseURL:'http://123.207.32.32:8000/home',
//   timeout:10000
// })
//
// axios.all([
//     ajax1({
//       url: '/home/multidata',
//       params: {
//         type: 'pop',
//         page: 1
//       }
//     }),
//     ajax2({
//       url:'/data'
//     })
// ]).then(res => {
//   console.log(res);
// })


    // ajax({
    //     url: '/home/multidata'
    // }).then(res => {
    //     console.log(res);
    // })

