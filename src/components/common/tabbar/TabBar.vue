<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar',
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
  #tab-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .3)
  }
</style>
