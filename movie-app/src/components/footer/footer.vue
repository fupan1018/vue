<template>
	<div id='footer' class='d-b p-f'>
	    <router-link class='d-b f-l ta-c' :to="{name:'discover'}">
	      	<span class='img img1 d-b'></span>
	        <div class='ta-c'>发现</div>
	    </router-link>

	    <router-link class='d-b f-l ta-c' :to="{name:'film'}">
	      	<span class='img img2 d-b'></span>
        	<div class='ta-c'>电影</div>
	    </router-link>

	    <router-link class='d-b f-l ta-c' :to="{name:'room'}">
	      	<span class='img img3 d-b'></span>
        	<div class='ta-c'>影院</div>
	    </router-link>

	    <router-link class='d-b f-l ta-c' :to="{name:'order'}">
	      	<span class='img img4 d-b'></span>
        	<div class='ta-c'>订单</div>
	    </router-link>
    </div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			
		}
	}
</script>
