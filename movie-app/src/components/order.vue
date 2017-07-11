<template>
	<div class='body_content'>
	    <div id='header' class='d-b p-f gray_bg clearfix'>
	      	<div class='linkBtn d-b f-l'>
	        	<div class='closeBtn nd-b'></div>
	        	<a href="#" class='backBtn d-b'></a>
	      	</div>
	      	<div class='centerTitle d-b f-l ta-c'>
	        	电影订单
	      	</div>
	    </div>
	    <!-- 订单内容 -->
	    <div class="order_content" v-for="(item,index) in orderList">
	       	<h2 class="ta-l">
	          	<span>保利国际影城佛山南海店 </span>
	          	<i class="d-ib"></i>
	          	<em class='f-r'>交易成功</em>
	       	</h2>
	       	<ul>
	         	<li class="d-ib f-l"><img :src="item.imgURL" alt=""></li>
		        <li>
		           	<h3>{{item.title}}</h3>
		           	<p>{{item.timer}}</p>
		           	<p>{{item.row}}</p>
		           	<div>
		              <span>数量：<em>{{item.count}}</em></span>
		              <em>实付：<i>￥{{item.price}}</i></em>
		           	</div>
		        </li>
	       	</ul>
	    </div>
	    <div class="foot_text ta-c">
	      <p>如有问题可致电（9：00-21：00）</p>
	      <p>客服电话：400-6099-866</p>
	    </div>
	</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex'
	export default{
		computed:mapState({
			orderList:state=>state.orderData
		}),
		mounted:function(){
			this.orderDetail();
		},
		methods:{
			orderDetail(){
				//派发action的getOrderDetail方法
				this.$store.dispatch('getOrderDetail')
			}
		}
	}
</script>