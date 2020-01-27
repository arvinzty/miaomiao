<template>
	<div>
		<Header title="喵喵电影"></Header>
		<div id="content">
			<ul>
				<router-link tag="li" to="/movie/city">
					南京
				</router-link>
				<router-link  tag="li" to="/movie/nowPlaying">
					正在热映
				</router-link >					
				<router-link  tag="li" to="/movie/comingSoon">
					即将上映
				</router-link>					
				<router-link  tag="li" to="/movie/search">
					查找
				</router-link>					
			</ul>
		</div>
		<router-view></router-view>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/header'
	import TabBar from '@/components/tabBar'

	export default{
		name: 'movie',
		components:{
			Header,
			TabBar
		}
	}
</script>

<style scoped>
	#content ul{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		line-height: 3rem;
		box-shadow: 1px 1px 1px 1px gray;
	}
	#content ul li{
		font-size: 1.25rem;
	}
	#content ul li.router-link-active{
		border-bottom: #FF2400 2.5px solid;
		color: #FF2400;
	}
</style>
