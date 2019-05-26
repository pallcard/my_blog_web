import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LocalEvent = function(item){        // 定义一个本地存储的构造函数
  this.get = function () {                // 存数据
    return JSON.parse(localStorage.getItem(item)) || [];
  }
  this.set = function (obj) {             // 拿数据
    localStorage.setItem(item,JSON.stringify(obj));
  }
  this.clear = function () {              // 删数据
    localStorage.removeItem(item);
  }
}
const local = new LocalEvent('token');
const local2 = new LocalEvent('userInfo');

let store = new Vuex.Store({
  // 1. state
  state:{
    city: "",
    token: local.get(),
    userInfo: local2.get()
  },

  // 2. getters
  getters:{
    // 参数列表state指的是state数据
    getCityFn(state){
      return state.city;
    },
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  // 3. actions
  // 通常跟api接口打交道
  actions: {
    // 设置城市信息
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法
    // name就是调用此方法时要传的参数
    setCityName({commit,state}, name){
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setCity", name);
    },
    setToken({commit,state}, token){
      commit("setToken",token)
    },
    setUserInfo({commit,state}, userInfo){
      commit("setUserInfo",userInfo)
    }
  },
  // 4. mutations
  mutations:{
    // state指的是state的数据
    // name传递过来的数据
    setCity(state, name){
      state.city = name;//将传参设置给state的city
    },
    setToken(state, token){
      state.token = token;
      local.set(token);
    },
    setUserInfo(state, userInfo){
      state.userInfo = userInfo;
      local2.set(userInfo);
    }
  }
});

export default store;
