<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>
      </div> 
</template>

<script>
export default {
    name:'TabBarItem',
    props: {
      path:String,
      activeClolor:{
        type:String,
        default:'#d81e06'
      }
    },
    components: {

    },
    data() {
        return {
          // isActive:false
        };
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeClolor} : {};
      }
    },
    created() {

    },
    methods: {
      itemClick() {
        console.log(this.$route)
        this.$router.replace(this.path);
      }
    },
    mounted() {

    },
};
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
</style>
