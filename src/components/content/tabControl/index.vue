<template>
    <div class="tab-control">
      <div class="tab-control-item" :class="{'active': index === current}" v-for="(item,index) in titles" :key="item"
      @click="clickTab(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {

    },
    data() {
        return {
          current: 0
        };
    },
    computed: {

    },
    created() {

    },
    methods: {
      clickTab(i) {
        this.current = i;
        this.$emit('tabClick',i)
      }
    },
    mounted() {

    },
};
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px 4px;
  }
  .active{
    color: red;
  }
  .active span{
    color: red;
    border-bottom: 3px solid red;;
  }
</style>
