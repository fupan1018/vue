<template>
	<div class='html_body no_pb'>
    	<div id='header' class='d-b p-f'>
    		<div class='linkBtn d-b f-l'>
	        	<div class='closeBtn nd-b'></div>
	        	<a class='backBtn d-b' href='#'></a>
	      	</div>
	      	<div class='searchBox d-b f-l'>
	        	<input type='text' placeholder="搜索电影、影院">
	      	</div>
	      	<div class='cityBtn d-b f-l'>
		        <div class="cityName text-h">
		          乌鲁木齐
		        </div>
	      	</div>
	      	<div class='centerTitle nd-b f-l ta-c'>
	        	选择城市
	    	</div>
    	</div>

	    <div id='movieScreening'>
		    <div class='nav p-f'>
		        <div class='navBox d-b f-l ta-c p-r'>
			        <div class='text ta-c'>
			            全城
			        </div>
			        <span class='arrowsIcon d-b p-a'></span>
		        </div>
		        <div class='navBox d-b f-l ta-c p-r'>
			        <div class='text ta-c'>
			            品牌
			        </div>
			        <span class='arrowsIcon d-b p-a'></span>
		        </div>
		        <div class='navBox d-b f-l ta-c p-r'>
			        <div class='text ta-c'>
			            筛选
			        </div>
			        <span class='arrowsIcon d-b p-a'></span>
		        </div>
		    </div>
	      	<div class='listWrap d-b p-r'>
		        <div class='filmList'>
			        <div class='box' v-for="(item,index) in roomList">
			            <dl>
				            <dt class='clear'>
				                <div class='leftBox d-b f-l' v-text="item.room"></div>
				                <div class='rightBox d-b f-r ta-r'><span>￥{{item.price}}</span> 起</div>
				            </dt>
				            <dd class='clear'>
				                <div class='leftBox d-b f-l' v-text="item.address"></div>
				                <div class='rightBox d-b f-r ta-r'>{{item.distant}}km</div>
				            </dd>
			            </dl>
			        </div>
		        </div>
	      	</div>
	    </div>
  	</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex'
	export default{
		computed:mapState({
			roomList:state=>state.roomData
		}),
		mounted:function(){
			this.roomAddress();
		},
		methods:{
			roomAddress(){
				this.$store.dispatch('getRoom')
			}
		}
	}
</script>