<template>
    <div class="goods-item" @click="itemClick">
        <img :src="goodsItem.url" alt="" @load="imgsLoad">
        <div class="info">
            <div class="title">{{goodsItem.title}}</div>
            <div class="price">￥{{goodsItem.price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
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
        itemClick() {
            console.log('item')
            this.$router.push(
                {path:'/detail/'+ 1}
            )
        },
        imgsLoad() {//解决图片未加载完成滚动高度问题
            this.$Bus.$emit('listImageLoad')
        }
    },
    mounted() {
    },
};
</script>

<style scoped>
    .goods-item{
        width: 46%;
        background: #fff;
        margin: 5px;
    }
    .goods-item img{
        width: 100%;
        height: 200px;
        vertical-align: middle;
    }
    .goods-item .info{
        font-size: 16px;
        padding: 20px 10px 10px;
    }
    .info .title{
        font-size: 16px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .info .price{
        padding-top: 3px;
        color: rgb(255, 0, 54);
    }
</style>
