<template>
<div>
   <h1 class="text-center text-4xl font-bold text-teal-600">Shopping List View</h1>

   <div>
      <h1 class="text-4xl font-bold text-teal-600">Add Item</h1>
     <div class="flex flex-col  p-4">
        <input 
          v-model="itemName" 
          placeholder="Name" 
        />

        <input 
          v-model.number="quantity" 
          placeholder="Quantity" 
          type="number"
        />

        <input 
          v-model="category" 
          placeholder="Category" 
        />

     </div>
    
   </div>
   <button
   @click="handleAddingShoppingItem"
   >Save</button>

<div>
   <h1 class="text-4xl font-bold text-teal-600 pt-8">Shopping List</h1>
   <div>
    <li v-for="(item, index) in shoppingItems" :key="index" class="mb-2">
{{ item.name }} - {{ item.quantity }} - {{ item.category }}
<button @click="removeShoppingItem(index)">Remove</button>
<button @click="editShoppingItem(index)">Edit</button>
        </li>
   </div>
</div>
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
            category: "",
        }
    },
    computed: {
      ...mapState(['shoppingItems'])
    },
    methods: {
    ...mapActions(['addShoppingItem', 'removeShoppingItem', 'editShoppingItem']),

      handleAddingShoppingItem() {
        console.log("test")
        console.log(this.itemName)
        const newShoppingItem = {
          name: this.itemName,
          quantity: this.quantity,
          category: this.category,
        }
        this.addShoppingItem(newShoppingItem);
        this.itemName = "";
        this.quantity = 0;
        this.category = "";
    }
    },
    deleteShoppingItem(index) {
        this.removeShoppingItem(index);
    },
    editingShoppingItem(index) {
        this.editShoppingItem(index);
    }


   
  }
</script>