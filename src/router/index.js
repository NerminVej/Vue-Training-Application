import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CounterView from '../views/CounterView.vue';
import Blog from '../views/Blog.vue';
import ToDo from '../views/ToDo.vue';
import ShoppingListView from '../views/ShoppingListView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: ShoppingListView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
