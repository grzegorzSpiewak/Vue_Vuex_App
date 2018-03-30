const state = {
  funds: 10000,
  ownStocks: []
}

const mutations = {
  'BUY_STOCK' (state, { name, stockId, stockPrice, quantity }) {
    state.funds -= stockPrice * parseInt(quantity)
    state.ownStocks.push({
      name: name,
      id: stockId,
      boughtPrice: stockPrice,
      quantity: quantity
    })
  },
  'SELL_STOCK' (state, { name, stockId, soldPrice, quantity }) {
    const stock = state.ownStocks.find(stock => stock.id == stockId)
    if (quantity < parseInt(stock.quantity)) {
      stock.quantity -= quantity
    } else if (quantity == parseInt(stock.quantity)) {
      state.ownStocks.splice(state.ownStocks.indexOf(stock), 1)
    }
    state.funds += soldPrice * parseInt(quantity)
  },
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order)
  },
}

const getters = {
  funds: state => {
    return state.funds
  },
  ownStocks: state => {
    return state.ownStocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
