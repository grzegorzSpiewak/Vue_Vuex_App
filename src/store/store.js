import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import notifications from './modules/notifications';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio,
    notifications
  }
})
