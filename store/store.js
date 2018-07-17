import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      play: 0
    },
    mutations: {
      nula (state) {
        state.play = 0;
      },
      jedna (state) {
        state.play = 1;
      }
    }
  })
};

export default createStore;
