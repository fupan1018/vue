Vue2---实战
-------------------------------------------------------------------------------------------------

PS:项目下载后，需要通过cnpm install 安装包文件，然后通过cnpm install vuex/axios/jquery/......安装项目中所用的包文件

一、参考资料
----------------

	vue2.0中文文档 : https://vuefe.cn/v2/guide/
	vue-router文档 : https://router.vuejs.org/
	vuex文档 : https://vuex.vuejs.org/

	数据请求axios：https://www.npmjs.com/package/axios
	swiper轮播图：http://www.swiper.com.cn/
	bootstrap：http://www.bootcss.com/

二、项目结构
----------------
<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue01.png"/>
	项目是通过vue-cli直接生成脚手架工具，使用webpack中的模板快速搭建

三、视图展示
----------------
<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue02.png"/>
	发现界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue03.png"/>
	电影界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue04.png"/>
	影院界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue05.png"/>
	订单界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue06.png"/>
	选择城市界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue07.png"/>
	选择场次界面

四、代码探讨
----------------
<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue08.png"/>
	可以如图所示，直接在首页（index.html）引入所需的样式表和js文件,但是要下载css-loader 和 style-loader，同时需要webpack（配置见下图）
	注：不知道什么原因，在首页引入样式和js会报错，希望哪位大神能帮忙解决一下

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue09.png"/>
	在项目中build/webpack.base.conf.js进行配置

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue10.png"/>
	main.js的配置

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue11.png"/>
<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue12.png"/>
	App.vue界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue13.png"/>
	discover.vue界面

<img src="https://github.com/fupan1018/movie-app/blob/master/example/vue14.png"/>
	loading动画组件

五、总结
----------------
	由于第一次使用vue2.0来开发项目，有好多功能没有做，有好多不完善的地方，希望大家帮忙指点指点！






