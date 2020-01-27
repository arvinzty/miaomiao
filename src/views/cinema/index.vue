<template>
	<div>
		<Header title="喵喵电影"></Header>
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<Cinemas></Cinemas>	
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/header'
	import TabBar from '@/components/tabBar'
	import Cinemas from '@/views/cinema/cinemas'
	export default{
		name: 'Cinema',
		components: {
			Header,
			TabBar,
			Cinemas
		}
	}
</script>

<style>
</style>
