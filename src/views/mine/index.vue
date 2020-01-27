<template>
	<div>
		<Header title="喵喵电影"></Header>
		<Register></Register>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/header'
	import TabBar from '@/components/tabBar'
	import Register from '@/views/mine/register'
	export default{
		name: 'mine',
		components:{
			Header,
			TabBar,
			Register
		}
	}
</script>
	
<style>
</style>
