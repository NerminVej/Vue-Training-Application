<template>
  <div class="bg-gray-800 p-4 text-white flex justify-between items-center">
    <div class="text-lg font-bold">Navbar</div>
    <button 
      @click="toggleState" 
      class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 focus:outline-none"
    >
      {{ isActive }}
    </button>
    <div>
      <button
        @click="increaseCounter"
        class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700 focus:outline-none"
      >
        {{ counter }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['isActive', 'counter']),
    ...mapGetters(['buttonLabel'])
  },
  methods: {
    ...mapActions(['toggleState', 'increaseCounter'])
  }
}
</script>

<style scoped>
/* Add any scoped styles for the navbar here */
</style>
