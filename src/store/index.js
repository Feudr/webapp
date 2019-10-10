import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //Vue.use是Vuex的插件

//定义一个默认城市为 上海
let defaultCity = '上海';
defaultCity = localStorage.City;
const state  = {
    //state用来存放需要用到的变量
    City: defaultCity
}

const mutations = {
    changeCity(state,hotCityName) {
        state.City = hotCityName;
        //先存一个值，存的是当前点击的城市
        localStorage.City = hotCityName;
        // localStorage.setItem('defaultCity','hotCityName');
        // defaultCity = localStorage.getItem('defaultCity');
    }
}

export default new Vuex.Store({
    state,
    mutations
})
