<!-- src/App.vue -->
<template>
  <div id="app">
    <nav class="bg-gray-800 p-4 text-white flex justify-between items-center">
      <router-link to="/" class="text-lg font-bold">Home</router-link>
      <router-link to="/about" class="text-lg font-bold">About</router-link>
      <router-link to="/counter" class="text-lg font-bold">Counter</router-link>
      <router-link to="/blog" class="text-lg font-bold">Blog</router-link>
      <router-link to="/todo" class="text-lg font-bold">ToDo</router-link>
      <router-link to="/shoppinglist" class="text-lg font-bold">Shopping List</router-link>

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add global styles here */
</style>
