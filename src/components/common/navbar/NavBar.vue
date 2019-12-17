<template>
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
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
  .nav-bar{
    height: 46px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    padding: 0 15px;
  }
  .nav-bar .left,.nav-bar .right{
    font-size: 16px;
    flex: 1;
  }
  .nav-bar .center{
    flex: 2;
    font-size: 20px;
    color: #000;
    text-align: center;
    line-height: 46px;
  }

</style>
