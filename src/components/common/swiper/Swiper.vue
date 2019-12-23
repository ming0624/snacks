<template>
    <div class="swiper" ref='swiper'>
      <div class="swiper-item-group" ref='swiperItemGroup'>
        <slot></slot>
      </div>
      <div class="dots">
        <span class="dot" v-for="(item, index) of dots"
            :class="{active:currentPageIndex === index}"
            :key="index">
        </span>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'swiper',
    props: {
      interval: {//轮播图轮播时间间隔
        type:Number,
        default:3000
      },
      loop: {//是否循环播放
        type:Boolean,
        default:true
      },
      autoPlay: {//是否自动播放
        type:Boolean,
        default:true
      },
      showIndicator: {
        type:Boolean,
        default:true
      }
    },
    components: {

    },
    data() {
        return {
          dots:0,
          currentPageIndex:0,//当前活跃的下标
        };
    },
    computed: {

    },
    created() {

    },
    beforeDestroy() {
      console.log('beforeDestroy')
      clearTimeout(this.timer)
    },
    methods: {
      setSwiperWidth() {
        //获取swiper里面的所有子元素
        this.children = this.$refs.swiperItemGroup.children;
        this.dots = this.children.length;
        //计算宽度 = 图片个数 * 每张图片的宽度
        let width = 0;
        //获取手机屏幕的宽度
        let swiperWidth = this.$refs.swiper.clientWidth;
        for(let i = 0; i < this.children.length; i++){
          //获取children里的每一项内容
          let child = this.children[i];
          child.style.width = swiperWidth + 'px';
          width += swiperWidth;
        }
        if(this.loop){
          width += 2 * swiperWidth;
        }
        this.$refs.swiperItemGroup.style.width = width + 'px';
      },
      initSwiper() {
        this.swiper = new BScroll(this.$refs.swiper, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          click: true
        });
        this.swiper.on("scrollEnd", () => {
        // 滚动结束
        let pageIndex = this.swiper.getCurrentPage().pageX;
        this.currentPageIndex = pageIndex;

        if (this.autoPlay) {
          this.play();
        }
      });
      },
      play() {
        let pageIndex = this.currentPageIndex + 1;
        this.timer = setTimeout(() => {
          this.swiper.next();
        }, this.interval);
      }
    },
    mounted() {
      setTimeout(() => {
        this.setSwiperWidth();
        this.initSwiper();
        if (this.autoPlay) {
          this.play();
        }
      },20)
    },
};
</script>

<style scoped>
  .swiper{
    position: relative;
    overflow: hidden;
  }
  .swiper .swiper-item-group > div{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    float: left;
  }
  .swiper-item-group img{
    width: 100%;
    height: 200px;
  }
  .dots{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 20;
    bottom: 12px;
    text-align: center;
  }
  .dot{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: #fff;
    border-radius: 50%;
  }
  .active{
    background: red;
    width: 20px;
    border-radius: 5px;
  }
</style>
