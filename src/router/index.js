import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/tabbar.vue";
const Home = () => import('@views/home');
const Cart = () => import('@views/cart');
const Category = () => import('@views/category');
const Porfile = () => import('@views/porfile');
Vue.use(VueRouter);

const routes = [
  {
    path: "", 
    redirect:'/home'
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/porfile",
    name: "porfile",
    component: Porfile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes 
});

export default router;
