<template>
	<div class='html_body no_pb'>
	    <div id='header' class='d-b p-f'>
	      	<div class='linkBtn d-b f-l'>
	        	<div class='closeBtn nd-b'></div>
	        	<a class='backBtn d-b' href='javascript:;' @click="goBack"></a>
	      	</div>
	      	<div class='centerTitle d-b f-l ta-c' v-text="resAddress.address"></div>
	    </div>

	    <div id='buyTicketTime'>
	      	<div class='cinemaBox d-b p-r'>
		        <dl class='d-b'>
		          	<dt v-text="resAddress.address"></dt>
		          	<dd v-text="resAddress.detailAddress"></dd>
		        </dl>
	        	<div class='phone d-b p-a'></div>
	      	</div>
	      	<div class='movieList'>
		        <div class="swiper-container" id="swiper03">
		          	<div class="swiper-wrapper">
			            <div class="swiper-slide ta-c" data-movieId='0'>
			              <div class="box" data-name='金刚狼' num='6.8分'>
			                <img class='d-b' src='/static/img/movieImg2.png'>
			                <div class='text p-a'>
			                  金刚狼
			                  <div class='num d-i'>
			                    5.8<span>分</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="swiper-slide ta-c" data-movieId='1'>
			              <div class="box" data-name='一条狗的使命' num='6.8分'>
			                <img class='d-b' src='/static/img/movieImg1.png'>
			                <div class='text p-a'>
			                  一条狗的使命
			                  <div class='num d-i'>
			                    6.8<span>分</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="swiper-slide ta-c swiper-slide-active" data-movieId='2'>
			              <div class="box" data-name='赤道' num='6.8分'>
			                <img class='d-b' src='/static/img/movieImg3.jpg'>
			                <div class='text p-a'>
			                  赤道
			                  <div class='num d-i'>
			                    7.8<span>分</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="swiper-slide ta-c" data-movieId='3'>
			              <div class="box" data-name='金刚狼' num='6.8分'>
			                <img class='d-b' src='/static/img/movieImg2.png'>
			                <div class='text p-a'>
			                  金刚狼
			                  <div class='num d-i'>
			                    8.8<span>分</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="swiper-slide ta-c" data-movieId='4'>
			              <div class="box" data-name='异形' num='6.8分'>
			                <img class='d-b' src='/static/img/movieImg2.jpg'>
			                <div class='text p-a'>
			                  异形
			                  <div class='num d-i'>
			                    9.8<span>分</span>
			                  </div>
			                </div>
			              </div>
			            </div>
		          	</div>
		          	<div class='arrowsIcon d-b p-a'></div>
		          	<div class='movieBg d-b p-a'></div>
		        </div>
	      	</div>

	      	<div class='dateChoose d-b'>
		        <div class="swiper-container2">
		          	<div class="swiper-wrapper">
			            <div class="swiper-slide ta-c active" data-swiper-slide-index='0'>
			              04.12
			            </div>
		          	</div>
		        </div>	
	      	</div>

	      	<div class='sessionList'>
		        <div class='box d-b clear'>
		          	<dl class='time d-b f-l'>
			            <dt>14:30</dt>
			            <dd>16:30</dd>
		          	</dl>
		          	<dl class='place d-b f-l ta-c'>
			            <dt>国语3D</dt>
			            <dd>3厅</dd>
		          	</dl>
		          	<div class='price d-b f-l ta-c'>
		            	28<span>元</span>
		          	</div>
		          	<a href="javascript:;" class='btnBuy d-b f-r ta-c'>
		            	选座购票
		          	</a>
		        </div>
	      	</div>

	    </div>
  	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				resAddress:{}
			}
		},
		mounted:function(){
			new Swiper('#swiper03',{
				slidesPerView: 'auto', //宽度用自己的 width
	            loop: true,
	            slideToClickedSlide: true, //点击slide会过渡到这个slide。
	            initialSlide: 0, //初始化时显示的索引
	            centeredSlides: true, //选中的居中
	            autoHeight: true
			});
			this.passAdress();
		},
		methods:{
			passAdress(){
				var OID=this.$route.params.id;
				if(OID=='01'){
					this.resAddress={address:"大兴区万达广场",detailAddress:"北京市大兴区某某街某某号"}
				}else if(OID=='02'){
					this.resAddress={address:"通州区万达广场",detailAddress:"北京市通州区某某街某某号"}
				}else{
					this.resAddress={address:"东城区万达广场",detailAddress:"北京市东城区某某街某某号"}
				}
			},
			goBack(){
				this.$store.commit('setOrderShow',false)
				this.$store.commit('setCityShow',true);
				history.back();
			},
			listenRouter(){
				var OID=this.$route.params.id;
				if(OID){
					this.$store.commit('setCityShow',false)
					this.$store.commit('setSelectShow',false)
					this.$store.commit('setOrderShow',true)
				}
			}
		},
		watch:{
			//监听路由的变化(清除缓存)
			'$route':function(){
				this.passAdress();
				this.listenRouter();
			}
		}
	}
</script>