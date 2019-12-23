<template>
    <div class="base-info">
      <div class="subleft">
        <div class="price">
          ¥<strong>2539</strong>
        </div>
        <div class="information">
          <del>¥<strong>2539</strong></del>
          <div class="soldcount">254件已售</div>
        </div>
      </div>
      <div class="title">
        波司登女鹅绒羽绒服长款过膝2019新品毛领极寒加厚外套B90142052
      </div>
      <div class="module">
        <span class="postage">快递包邮</span>
        <span class="sales">月销售2279 件</span>
        <span class="delivery">浙江杭州</span>
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
  .base-info{
    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .subleft{
    padding: 0 15px;
    display: flex;
    align-items: center;
    background: #fa215f;
    height: 54px;
  }
  .price{
    color: #fff;
    font-size: 18px;
    margin-right: 15px;
  }
  .information{
    font-size: 14px;
  }
  .information del{
    color: rgba(255, 255, 255, .7);
  }
  .soldcount{
    color: #fff;
  }
  .title{
    padding: 0 15px;
    font-size: 14px;
    color: #051B28;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 63px;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    overflow: hidden;
    word-break: break-all;
  }
  .module{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 12px;
    color: #999;
    line-height: 30px;
    background: #fff;
  }
</style>
