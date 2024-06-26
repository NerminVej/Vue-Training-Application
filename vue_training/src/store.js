import { createStore } from 'vuex';

const store = createStore({
  state: {
    isActive: false,
    counter: 0,
    todos: [],
    shoppingItems: [],
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
    },
    addShoppingItem(state, item) {
      state.shoppingItems.push(item);
    },
    removeShoppingItem(state, index) {
      state.shoppingItems.splice(index, 1);
    },
    editShoppingItem(state, { index, item }) {
      state.shoppingItems[index] = item;
    },
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
    },
    addShoppingItem({ commit }, item) {
      commit('addShoppingItem', item);
    },
    removeShoppingItem({ commit }, index) {
      commit('removeShoppingItem', index);
    },
    editShoppingItem({ commit }, { index, item }) {
      commit('editShoppingItem', { index, item });
    },
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
    },
    shoppingItems(state) {
      return state.shoppingItems;
    },

  }
});

export default store;
