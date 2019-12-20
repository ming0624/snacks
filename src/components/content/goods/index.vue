<template>
    <div class="goods">
      <goods-item  v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-item>
    </div>
</template>

<script>
import goodsItem from './goodsItem.vue'
export default {
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      goodsItem
    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {
      
    },
    methods: {

    },
    mounted() {
    },
};
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: red;
  }
</style>
