const state = {
  notifications: [],
}

const mutations = {
  'ADD_NOTIFICATION' (state, notification) {
    state.notifications.push(notification)
  },
  'REMOVE_NOTIFICATION' (state) {
    state.notifications.shift()
  }
}

const actions = {
  showNotification: ({ commit }, notification) => {
    commit('ADD_NOTIFICATION', notification)
  },
  hideNotification: ({ commit }) => {
    setTimeout(() => { commit('REMOVE_NOTIFICATION') }, 5000)
  },
}

const getters = {
  notifications: state => {
    return state.notifications
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
