export const appModule = {
  namespaced: true,
  state: {
    storeConfig: null
  },
  getters: {},
  mutations: {
    saveStoreConfig: (state, payload) => {
      state.storeConfig = payload
    }
  },
  actions: {}
}
