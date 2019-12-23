<template>
    <div class="scroll-wrapper" :style='currentstyle' ref="scrollWrapper">
      <div class="scroll-content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    props: {
      probeType: {
        type:Number,
        default() {
          return 0;
        }
      },
      currentstyle: {
        type: Object,
        default() {
          return {bottom: '49px'}
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    components: {

    },
    data() {
        return {
          scroll:null
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        scrollY: true,
        click:true ,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //监听滚动
      this.scroll.on('scroll',(pos) => {
        this.$emit('scroll',pos)
      })
      //上拉加载
      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
      //下拉刷新
    },
    methods: {
      scrollTo(x, y, time=300, easing='bounce') {
        console.log('内部封装scrollTo')
        this.scroll && this.scroll.scrollTo(x,y,time,easing);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh();
      }
    },
};
</script>

<style scoped>
  .scroll-wrapper{
    width: 100%;
    /* height: 400px; */
    /* height: calc(100vw - 95px); */
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 49px;
    background: red;
    z-index: 2;
    overflow: hidden;
    background: #fff;
    /* border: 2px solid black; */
  }
  .scroll-content{
    margin-top: 46px;
  }
</style>
