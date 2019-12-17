<template>
    <div class="recommend">
      <div class="recommend-item" v-for="(item, index) in recommends" :key='index'>
        <img :src="item.url" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      recommends: {
        type:Array
      }
    },
    components: {

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
  .recommend{
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-y: auto;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    vertical-align: middle; 
    border-radius: 50%;
    margin-bottom: 10px; 
  }
</style>
