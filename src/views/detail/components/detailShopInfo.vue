<template>
    <div class="shop-info">
      <div class="shop-main">
        <div class="shop-logo">
          <img src="//img.alicdn.com/imgextra/i2/268451883/TB2BUcbdv1TBuNjy0FjXXajyXXa_!!268451883.jpg_120x120Q50s50.jpg_.webp" alt="">
        </div>
        <div class="info">
          <div class="title">三际数码官方旗舰店</div>
          <div class="name">天猫</div>
        </div>
      </div>
      <div class="score">
        <div>宝贝描述4.8</div>
        <div>卖家服务4.8</div>
        <div>物流服务4.9</div>        
      </div>
      <div class="shop-action">
        <div>全部商品</div>
        <div>进入店铺</div>
      </div>
    </div>
</template>

<script>
export default {
    props: {

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
  .shop-info{
    padding: 15px;
    border-bottom: 10px solid #e6e6e6;
    background: #fff;
  }
  .shop-main{
    display: flex;
    align-items: center;
  }
  .shop-logo{
    width: 54px;
    height: 54px;
    margin-right: 10px;
  }
  .shop-logo img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .score{
    margin: 12px 15px;
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .shop-action{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shop-action div{
    flex: 1;
    border: 1px solid rgba(255,0,54,.5);
    height: 24px;
    line-height: 22px;
    font-size: 13px;
    color: rgba(255,0,54,.8);
    border-radius: 12px;
    text-align: center;
    display: block;
    max-width: 96px;
  }
  .shop-action div:first-child{
    margin-right: 10px;
  }
</style>
