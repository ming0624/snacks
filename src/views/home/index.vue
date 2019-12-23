<template>
    <div id="home">
        <nav-bar>
            <div slot="center">零食铺</div>
        </nav-bar>
        <tab-control class='fixed' v-show="isTabFixed" :titles="['流行','新品','精选']" ref="tabControl1"  @tabClick="tabClick"></tab-control>
        <scroll ref="scroll" 
            :probe-type='3' 
            @scroll='contentScroll'
            :pull-up-load='true'
            @pullingUp='loadMore'
        >
            <swiper>
                <div v-for="(item, index) in itemList" :key="index" @click="clickItem(index)">
                    <img :src="item.url" @load="swiperImageLoad" alt="">
                </div>
            </swiper>
            <recommed-view :recommends='recommedList'></recommed-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新品','精选']" ref="tabControl" @tabClick="tabClick"></tab-control> 
            <good-list :goods='list'></good-list>
        </scroll>
        <back-top  @click.native="backClick" v-show="isShowBackTop"></back-top>
        <!-- <div v-for="item in 1000" :key="item">
            列表{{item}}
        </div> -->
    </div>
    
</template>

<script>
import NavBar from '@components/common/navbar/NavBar.vue';
import Scroll from '@components/common/scroll/index.vue';
import Swiper from '@components/common/swiper/Swiper.vue';
import recommedView from './components/recommedView.vue';
import featureView from './components/featureView.vue';
 
import tabControl from '@components/content/tabControl/index.vue';
import goodList from '@components/content/goods/index.vue';
import backTop from '@components/content/backTop/index.vue';
export default {
    props: {

    },
    components: {
        NavBar,
        Scroll,
        Swiper,
        recommedView,
        featureView,
        tabControl,
        goodList,
        backTop
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
            ],
            goodList: [
                {
                    url:'//img.alicdn.com/bao/uploaded/i4/2200533709948/O1CN019BZd1j2NMEa9gqRin_!!2200533709948.png_400x400Q50s50.jpg_.webp',
                    title:'  比比妙碧根果仁长寿果大山核桃仁连罐500g分3罐装奶油味坚果零食',
                    price:'46.80'
                },
                {
                    url:'//img.alicdn.com/bao/uploaded/i4/2942872819/O1CN01Lc1mZ71Wh955zIlhD_!!2942872819.jpg_400x400Q50s50.jpg_.webp',
                    title:'年货碧根果坚果组合礼盒1000g大罐装混合装干果零食大礼包整箱5斤',
                    price:'58.00'
                },
                {
                    url:'//img.alicdn.com/bao/uploaded/i2/628189716/O1CN01wJGJH62Ldykj5nW5D_!!628189716.jpg_400x400Q50s50.jpg_.webp',
                    title:'【百草味-碧根果218gx2袋】坚果零食干果仁山核桃 奶油味长寿果',
                    price:'44.90'
                },
                {
                    url:'//img.alicdn.com/bao/uploaded/i3/732501769/O1CN01CQrAeD1OwFDSpEkvL_!!732501769.png_400x400Q50s50.jpg_.webp',
                    title:'满减 来伊份碧根果150g奶油味坚果零食小吃休闲食品单袋装长寿果',
                    price:'56.00'
                },
            ],
            list:[],
            isShowBackTop: false,
            isSwiperLoad: false,
            tabOffsetTop: 534,
            isTabFixed:false,
            scrollY: 0
        };
    },
    computed: {

    },
    created() {
        
    },
    methods: {
        tabClick(index) {//tabControl 控制选项
            this.$refs.tabControl.current = index;
            this.$refs.tabControl1.current = index;
        },
        backClick(){//.native修饰符监听原生组件根元素点击事件
            //方法一
            // this.$refs.scroll.scroll.scrollTo(0, 0, 700, 'swiper')
            
            //方法二
            this.$refs.scroll.scrollTo(0, 0, 700, 'swiperBounce')
        },
        contentScroll(pos){
            //判断回到顶部是否显示
            this.isShowBackTop = -pos.y > 1000;
            // 判断tabControl是否吸顶 
            this.isTabFixed = -pos.y > this.tabOffsetTop;
        },
        loadMore(){
            console.log('加载')
            this.$refs.scroll.finishPullUp();
            // this.$refs.scroll.scroll.refresh();
        },
        debounce(func, delay) {//防抖函数
            let timer = null;
            return function(...arg) {
                if(timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    func.apply(this, arg)
                }, delay);
            }
        },
        swiperImageLoad() {
            //所有组件共有的属性$el，用于获取组件中的元素
            //监听图片加载完成，计算高度
            //并且阻止多次调用
            if(!this.isSwiperLoad) {
                this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop -( -40 );
                this.isSwiperLoad = true;
            }
            
        }
    },
    activated() {
        console.log('active')
        this.$refs.scroll.scroll.scrollTo(0, this.scrollY,0);
        this.$refs.scroll.refresh();
    },
    deactivated() {
        console.log('deactivated')
        this.scrollY = this.$refs.scroll.getCurrentY();
        console.log(this.scrollY)
    },
    mounted() {
        for(var i =0; i < 20; i++){
            for(var j =0; j < this.goodList.length; j++){
            this.list.push(this.goodList[j])
            }
        }
        //图片加载完成的事件监听
        const refreshed = this.debounce(this.$refs.scroll.refresh,500)
        this.$Bus.$on('listImageLoad', () => {
            refreshed();
            // console.log(this.$refs.scroll.refresh)
            // this.$refs.scroll.refresh()
        })
        
        // console.log('1',this.$refs.tabControl.$el.offsetTop)
    },
};
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
    .fixed{
        position: fixed;
        top: 46px;
        left: 0;
        right: 0;
        z-index: 99;
    }
</style>
