import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    baseUrl:'/'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateBaseUrl (state,payload) {
      if(payload.val == 'development'){
        state.baseUrl = '/'
      }else{
        state.baseUrl = '/blog/'
      }

    }
  },
  actions: {

  }
})
