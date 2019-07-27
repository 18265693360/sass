import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import  api from '../utils/api'
import createPersistedState from 'vuex-persistedstate'



Vue.use(Vuex)//安装 vuex

// const store = new Vuex.Stroe({ ！！！！！ 错了 单词拼错了！！！！！！
const store = new Vuex.Store({
  state:{
    userMsg:{}
  },
  mutations:{
    'CHANGE_USER_MSG'(state,userMsg){
      state.userMsg = userMsg
    }
  },
  actions:{
    getUserMsg(context) {
      fetch.get(api.user).then(res =>{
        context.commit('CHANGE_USER_MSG',res.data)
      })
    }
  },


  // plugins
  // [词典]	插件; 外挂; 外挂滤镜; 外挂程序;

  // 源码
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: key => Cookies.get(key),
  //       // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
  //       setItem: (key, value) =>
  //         Cookies.set(key, value, { expires: 3, secure: true }),
  //       removeItem: key => Cookies.remove(key),
  //     },
  //   }),
  // ],

plugins:[createPersistedState({
    storage:{
      getItem: key => sessionStorage.getItem(key),
      setItem:(key,value) =>
        sessionStorage.setItem(key,value),
      removeItem:key => sessionStorage.removeItem(key),
    },
  })]
})

export default store
