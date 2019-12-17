<template>
    <div>
        <nav-bar>
            <div slot="left">返回</div>
            <div slot="center">零食铺</div>
        </nav-bar>
        <swiper>
            <div v-for="(item, index) in itemList" :key="index" @click="clickItem(index)">
                <img :src="item.url" alt="">
            </div>
        </swiper>
        <recommed-view :recommends='recommedList'></recommed-view>
        
    </div>
    
</template>

<script>
import NavBar from '@components/common/navbar/NavBar.vue';
import Swiper from './components/Swiper.vue';
import recommedView from './components/recommedView.vue';
export default {
    props: {

    },
    components: {
        NavBar,
        Swiper,
        recommedView
    },
    data() {
        return {
            itemList:[
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg'
                },
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg'
                },
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg'
                }
            ],
            recommedList:[
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
                    title:'王菲'
                },
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
                    title:'张菲'
                },
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
                    title:'杜菲'
                },
                {
                    url:'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
                    title:'王菲'
                },
                // {
                //     url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
                //     title:'张菲'
                // },
                // {
                //     url:'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
                //     title:'杜菲'
                // }
            ]
        };
    },
    computed: {

    },
    created() {

    },
    methods: {
        clickItem(index) {
            console.log(index)
        }
    },
    mounted() {

    },
};
</script>

<style scoped>

</style>
