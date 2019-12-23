<template>
    <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      <scroll :style="currentStyle">
        <detail-swiper :auto-play='false'>
        <div v-for="(item, index) in itemList" :key="index" @click="clickItem(index)">
            <img :src="item.url" @load="swiperImageLoad" alt="">
        </div>
        </detail-swiper>
        <detail-base-info></detail-base-info>
        <detail-shop-info></detail-shop-info>
        <div v-for="index in 300" :key="index">{{index}}</div>
      </scroll> 
    </div>
    
</template>
  
<script>
import DetailNavBar from './components/detailNavBar.vue';
import Scroll from '@components/common/scroll/index.vue';
import DetailSwiper from '@components/common/swiper/Swiper.vue';
import detailBaseInfo from './components/detailBaseInfo.vue';
import detailShopInfo from './components/detailShopInfo.vue';
export default {
    props: {

    },
    components: {
      DetailNavBar,
      Scroll,
      DetailSwiper,
      detailBaseInfo,
      detailShopInfo
    },
    data() {
        return {
          currentStyle: {
            bottom: '0px'
          },
          goodId: '',
          itemList:[
              {
                  url:'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg'
              },
              {
                  url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg'
              },
              {
                  url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg'
              }
          ],
        };
    },
    computed: {

    },
    created() {
      this.goodId = this.$route.params.id;
    },
    methods: {
      swiperImageLoad() {

      }
    },
    mounted() {

    },
};
</script>

<style scoped>
  .detail{
    background: #fff;
    position: relative;
    z-index: 9;
    height: 100vh;
  }
</style>
