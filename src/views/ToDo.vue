<template>
    <div>
      <div>
        This is the ToDo Page
      </div>
      <div>
        <h1 class="text-4xl font-bold text-teal-600">ToDos</h1>
        <h2>To Do Name</h2>
        <input
          v-model="newTodoName"
          placeholder="Enter a todo name"
          class="border p-2 mb-4 w-full"
        />
        <h2>To Do Category</h2>
        <input
          v-model="newTodoCategory"
          placeholder="Enter a todo category"
          class="border p-2 mb-4 w-full"
        />
        <button
          @click="handleAddTodo"
          class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 focus:outline-none"
        >
          Add ToDo
        </button>
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index" class="mb-2">
          {{ todo.name }} - {{ todo.category }}
          <button @click="removeTodo(index)" class="ml-2 bg-red-500 text-white px-2 py-1 rounded">
            Remove
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTodoName: '',
        newTodoCategory: ''
      };
    },
    computed: {
      ...mapState(['todos'])
    },
    methods: {
      ...mapActions(['addTodo']),
      
      handleAddTodo() {
        if (this.newTodoName.trim() !== '' && this.newTodoCategory.trim() !== '') {
          const newTodo = {
            name: this.newTodoName.trim(),
            category: this.newTodoCategory.trim()
          };
          this.addTodo(newTodo); 
          this.newTodoName = '';
          this.newTodoCategory = '';
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  