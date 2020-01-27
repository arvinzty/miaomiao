<template>
	<div>
		<input type="text" placeholder="请输入搜索的内容"/>
	</div>
</template>

<script>
	export default{
		name: 'Search'
	}
</script>

<style scoped lang="scss">
	div{
		padding: 0.425rem 0.5375rem;
		line-height: 1.25rem;
		background-color: rgba(96,96,96,0.2);
		input
		{
			border-radius: 0.3125rem;
			line-height: 1.6rem;
			width: 100%;
		}
	}
</style>
