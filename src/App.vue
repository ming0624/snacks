<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <tab-bar>
      <tab-bar-item path='/home' activeClolor='#d81e06'>
        <img slot="item-icon" src="@assets/img/tabbar/home-active.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeClolor='#d81e06'>
        <img slot="item-icon" src="@assets/img/tabbar/category-active.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeClolor='#d81e06'>
        <img slot="item-icon" src="@assets/img/tabbar/cart-active.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/porfile' activeClolor='#d81e06'>
        <img slot="item-icon" src="@assets/img/tabbar/porfile-active.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/porfile.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '@components/common/tabbar/TabBar.vue'
import TabBarItem from '@components/common/tabbar/TabBarItem.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return{
      isActive:false
    }
  }
}
</script>
<style>
  @import './assets/css/base.css'
</style>
