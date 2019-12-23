<template>
    <div>
      <nav-bar>
        <div slot="left" class="back" @click="backClick">
          <img src="@assets/img/tabbar/back.svg" alt="">
        </div>
        <div slot="center" class="detail-title">
          <div class="title-item" 
          :class="{'active': index === currentIndex}" 
          v-for="(item, index) in titles" 
          :key="item"
          @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar.vue'
export default {
    props: {

    },
    components: {
      NavBar
    },
    data() {
        return {
          titles: ['商品','参数','评论'],
          currentIndex: 0
        };
    },
    computed: {

    },
    created() {

    },
    methods: {
      backClick() {
        this.$router.back();
      },
      titleClick(index) {
        this.currentIndex = index;
      }
    },
    mounted() {

    },
};
</script>

<style scoped>
  
  .back img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .detail-title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    font-size: 16px;
    color: red;
  }
</style>
