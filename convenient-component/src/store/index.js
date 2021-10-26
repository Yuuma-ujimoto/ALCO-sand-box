import { createStore } from 'vuex'

export default createStore({
  state: {
    ModalMessage:null
  },
  getters:{
    isModalOpen:function (state) {
      return !!state.ModalMessage
    },
    getModalMessage:function (state) {
      return state.ModalMessage
    }
  },
  mutations: {
    updateModal(state,Message){
      state.ModalMessage = Message
    }
  },
  actions: {
    updateModal(context,Message){
      context.commit("updateModal",Message)
    }
  },
  modules: {
  }
})
