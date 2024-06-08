<template>
<div>
   <h1 class="text-center text-4xl font-bold text-teal-600">Shopping List View</h1>

</div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
        return {
            itemName: "",
            itemPrice: 0,
            quantity: 0,
            
        }
    },
    computed: {
      ...mapState(['shoppingList'])
    },
    methods: {
      ...mapActions(['addShoppingItem'])
    }
  }
</script>