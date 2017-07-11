<template>
	<div class='html_body no_pb'>
	    <div id='header' class='d-b p-f gray_bg'>
		    <div class='linkBtn d-b f-l'>
		        <a class='backBtn d-b' href='javascript:;' @click="goBack"></a>
		    </div>
		    <div class='centerTitle d-b f-l ta-c'>
		        选择城市
		    </div>
	    </div>
	    <div class="select_content" style="clear:both;">      
	      	<div id='selectCity'>
		        <div class='nowCity'>
		          所选城市：<span id='thisCity' v-text="getCityName"></span>
		        </div>
		        <div class='cityList'>
		        	<dl v-for="item in getAddressList" @click="selectAddress(item.addressName)">
			            <dt v-text="item.id" :id="item.id"></dt>
			            <dd v-text="item.addressName"></dd>
		          	</dl>
		        </div>
	      	</div>
	    </div>
  	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	import {mapGetters} from 'vuex'
	export default{
		mounted:function(){
			this.getAddress();
		},
		computed:{
			...mapGetters(['getCityName','getAddressList'])
		},
		methods:{
			goBack(){
				this.$store.commit('setSelectShow',false)
				this.$store.commit('setCityShow',true);
				history.back();
			},
			getAddress(){
				this.$store.dispatch('passAddress')
			},
			selectAddress(item){
				this.$store.commit('setCityName',item);
			},
			listenRouter(){
				var type=this.$route.params.type;
				if(type){
					this.$store.commit('setCityShow',false)
					this.$store.commit('setOrderShow',false)
					this.$store.commit('setSelectShow',true)
				}
			}
		},
		watch:{
			'$route':'listenRouter'
		}
	}
</script>