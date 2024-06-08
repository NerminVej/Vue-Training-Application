import { createStore } from 'vuex';

const store = createStore({
  state: {
    isActive: false,
    counter: 0,
    todos: []
  },
  mutations: {
    toggleState(state) {
      console.log(state.isActive);
      state.isActive = !state.isActive;
    },
    incrementCounter(state) {
      state.counter += 1;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    toggleState({ commit }) {
      commit('toggleState');
    },
    increaseCounter({ commit }) {
      commit('incrementCounter');
    },
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    }
  },
  getters: {
    isActive(state) {
      return state.isActive;
    },
    counter(state) {
      return state.counter;
    },
    todos(state) {
      return state.todos;
    }
  }
});

export default store;
