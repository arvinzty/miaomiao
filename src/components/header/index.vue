<template>
	<div id="header">
		<h1>
			{{title}}
		</h1>
	</div>
</template>

<script>
	export default{
		name:'Header',
		props:{
			title:{
				type: String,
				default: '电影'
			}
		}
	}
</script>

<style scoped lang="scss">
	$backgroundColor: #ca3b56;
	$fontColor:white;

	
	#header{	
		width:100%;
		height: 50px;
		box-shadow:0.5px 0.5px 6px 0px black;
		background-color: $backgroundColor;
		position: absoulte;
		top: 0;
	}
	h1{
		font-size: 1.425rem;
		color: $fontColor;
		text-align: center;
		line-height: 50px;
	}
</style>
