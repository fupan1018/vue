<template>
	<div class='body_content'>
	    <div id='header' class='d-b p-f gray_bg clearfix'>
		    <div class='linkBtn d-b f-l'>
		        <div class='closeBtn d-b'></div>
		        <a href="#" class='backBtn nd-b'></a>
		    </div>
		    <div class='searchBox searchBoxLong d-b f-l'>
		        <input type='text' placeholder="搜索电影、影院">
		    </div>
	    </div>
	    <div class="film_paly">
	       	<ul class="clearfix" id='filmNav'>
	         	<li class="f-l ta-c" :class="{play_li_active:tabOk}"   @click="changeTab(1)">正在热映</li>
	         	<li class="f-l ta-c" :class="{play_li_active:!tabOk}"  @click="changeTab(2)">即将上映</li>
	       	</ul>
	        <div class="film_paly_content">
		        <div class='divWrap' v-show="tabOk">
		           	<ol>
			            <li v-for="item in listMoive">
			                <router-link href="javascript:;" class="clearfix" :to="{name:'orderFilm',params:{id:item.OID}}">
			                   	<span class="f-l">
			                     	<img :src="item.imgURL" alt="">
			                   	</span>
			                   	<em class="f-l">
				                    <h2 class='clear'><span class='movieName' v-text="item.title"></span><i>3D</i></h2>
				                    <strong>
				                        <div class='starBox'>
				                           <div class='starImg starImg1' :style="{width:item.score}"></div>
				                           <div class='starImg starImg2'></div>
				                        </div>
				                        <div class='gradeNum' v-text="item.scoreTxt"></div>
				                    </strong>
				                    <p class="paly_content_p">导演：{{item.director}}</p>
				                    <p>主演：{{item.actor}}</p>
			                   	</em>
			                </router-link>
			            </li>
		           	</ol>
		        </div>
		        <div class='divWrap' v-show="!tabOk">
		           <ol>
			            <li v-for="item in listMoive">
			                <router-link href="javascript:;" class="clearfix" :to="{name:'orderFilm',params:{id:item.OID}}">
			                   	<span class="f-l">
			                     	<img :src="item.imgURL1" alt="">
			                   	</span>
			                   	<em class="f-l">
				                    <h2 class='clear'><span class='movieName' v-text="item.title1"></span><i>3D</i></h2>
				                    <strong>
				                        <div class='starBox'>
				                           <div class='starImg starImg1' :style="{width:item.score1}"></div>
				                           <div class='starImg starImg2'></div>
				                        </div>
				                        <div class='gradeNum' v-text="item.scoreTxt1"></div>
				                    </strong>
				                    <p class="paly_content_p">导演：{{item.director1}}</p>
				                    <p>主演：{{item.actor1}}</p>
			                   	</em>
			                </router-link>
			            </li>
		           	</ol>
		        </div>
	    	</div>
	    </div>
 	</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex'
	export default{
		data(){
			return{
				tabOk:true
			}
		},
		computed:mapState({
			listMoive:state=>state.filmData
		}),
		mounted:function(){
			this.filmList();
		},
		methods:{
			changeTab(num){
				if(num==1){
					this.tabOk=true;
				}else{
					this.tabOk=false;
				}
			},
			filmList(){
				this.$store.dispatch('getFilm')
			}
		}
	}
</script>
<style scoped>
	.body_content .film_paly .film_paly_content div{display:block;}
</style>