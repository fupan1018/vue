<template>
	<div class="html_body">
		<div id='header' class='d-b p-f'>
		    <div class='linkBtn d-b f-l'>
		        <div class='closeBtn d-b'></div>
		    </div>
		    <div class='searchBox d-b f-l'>
		        <input type='text' placeholder="搜索电影、影院"/>
		    </div>
		    <div class='cityBtn d-b f-l'>
		        <router-link class="cityName text-h" :to="{name:'cityName',params:{type:'hide'}}">{{getCityName}}</router-link>	
		    </div>
		    <div class='centerTitle nd-b f-l ta-c'>
		        万达国际影城（南海万达广场）
		    </div>
	    </div>
	    <div id='home'>
	      	<div class='banner'>
		        <div class="swiper-container" id="swiper01">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide">
			              	<img class='d-b' src='../assets/img/bannerImg.png'>
			            </div>
			            <div class="swiper-slide">
			              	<img class='d-b' src='../assets/img/bannerImg.png'>
			            </div>
			            <div class="swiper-slide">
			              	<img class='d-b' src='../assets/img/bannerImg.png'>
			            </div>
			        </div>
			        <div class="swiper-pagination"></div>
		        </div>
	      	</div>
		    <div class='moreTitle d-b'>
		        <div class='text d-b f-l'>热映电影</div>
		        <a href='#' class='d-b f-r'>
		          更多<span class='d-ib'></span>
		        </a>
		    </div>
	      	<div class='movieList'>
		        <div class="swiper-container2" id="swiper02">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide p-r" v-for="(item,index) in carouseList">
			              	<img class='d-b' :src="item.imgURL">
			              	<dl>
			                	<dt class='text-h' v-text="item.title"></dt>
				                <dd>
					                <div class='starBox p-r d-b f-l'>
					                    <div class='bg d-b p-a'></div>
					                    <div class="num d-b p-a" :style="{width:item.score}"></div>
					                    <div class='grayBg'></div>
					                </div>
					                <div class='gradeNum d-b f-l' v-text="item.scoreTxt"></div>
				                </dd>
			              	</dl>
			            </div>
			        </div>
		        </div>
	      	</div>
		    <div class='moreTitle d-b'>
		        <div class='text d-b f-l'>附近影院</div>
		        <a href='#' class='d-b f-r'>
		          更多<span class='d-ib'></span>
		        </a>
		    </div>
	      	<div class='moviePlace'>
	        	<router-link class="box" v-for="item in getDiscoverList" :to="{name:'orderFilm',params:{id:item.OID}}">
			        <dl>
			            <dt v-text="item.address"></dt>
			            <dd class='clear'>
			              <div class='d-b f-l' v-text="item.detailAddress"></div>
			              <span class='d-b f-r ta-r' v-text="item.distance"></span>
			            </dd>
			        </dl>
		        </router-link>
	      	</div>
	      	<div class='loadingIcon nd-b'></div>
	      	<div class='noThing nd-b ta-c'>没有更多了</div>
	    </div>
	</div>
</template>
<script type="text/javascript">
import Swiper from 'swiper'//cnpm install swiper@3.4.2 --save-dev
import axios from 'axios'
import { mapGetters} from 'vuex'

export default{
	//这种写法避免报错
	data(){
		return {
			carouseList:[],
			type:''
		}
	},
	computed:{
		//结构getters中的对象
		...mapGetters(['getCityName','getDiscoverList']),
	},
	mounted:function(){
		this.getCarousel();
		this.discoverMovieList();
		new Swiper('#swiper01',{
			autoplay: 5000, //可选选项，自动滑动
            loop: true, //循环
            pagination: '.swiper-pagination' //导航
		});
	},
	methods:{
		getCarousel(){
			axios.get('./static/discover/carousel.json').then((res)=>{
				this.carouseList=res.data.data;
				//在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
				this.$nextTick(function(){
					new Swiper('#swiper02',{
						freeMode: false, //自由拖动
			            slidesPerView: 'auto' //宽度用自己的 width
					});
				})
			})
			.catch((error)=>{})
		},
		discoverMovieList(){
			this.$store.dispatch('getDiscover');
		}
	}
}

	
</script>