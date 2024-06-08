<template>
  <div>
    <AppNavbar />
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold text-teal-600">{{ message }}</h1>
      <button 
        @click="changeMessage" 
        class="mt-5 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 focus:outline-none"
      >
        Change Message
      </button>
      <div class="mt-5 text-lg">
        <p class="mb-2">Counter: {{ counter }}</p>
        <button 
          @click="incrementCounter" 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Increment Counter
        </button>
      </div>
      <div class="mt-5 text-lg">
        <p class="mb-2">Status: {{ status }}</p>
        <button 
          @click="toggleStatus" 
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
        >
          Toggle Status
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';

export default {
  components: {
    AppNavbar
  },
  data() {
    return {
      message: 'Hello, Vue!',
      counter: 0,
      status: 'Inactive'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'You clicked the button!'
    },
    incrementCounter() {
      this.counter += 1
    },
    toggleStatus() {
      this.status = this.status === 'Inactive' ? 'Active' : 'Inactive'
    }
  }
}
</script>

<style scoped>
/* Scoped styles will be applied in addition to Tailwind CSS classes */
</style>
