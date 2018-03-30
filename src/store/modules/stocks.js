import stocks from '../../data/stocks.js'

const state = {
  stocks: []
}

const mutations = {
  'SET_INITIAL_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'SET_NEW_PRICE' (state) {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  },
}

const actions = {
  initStocks: ({ commit }) => {
    commit('SET_INITIAL_STOCKS', stocks)
  },
  setNewPrice: ({ commit }) => {
    commit('SET_NEW_PRICE')
  },
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
