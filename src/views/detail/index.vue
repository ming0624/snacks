<template>
    <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      详情页{{goodId}}
    </div>
</template>
  
<script>
import DetailNavBar from './components/detailNavBar.vue'
export default {
    props: {

    },
    components: {
      DetailNavBar
    },
    data() {
        return {
          goodId: ''
        };
    },
    computed: {

    },
    created() {
      this.goodId = this.$route.params.id;
    },
    methods: {

    },
    mounted() {

    },
};
</script>

<style scoped>
  
</style>
