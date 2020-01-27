<template>
	<div id="content">
		<div>
			<h1>
				万达影院（南屏街店）<span>22.9元起</span>
			</h1>
			<p>
				云南省昆明市南屏街云南省昆明市南屏街云南省昆明市南屏街云南省昆明市南屏街
			</p>
			<p>
				<span>小吃</span>
				<span>折扣卡</span>
			</p>
		</div>
		<div>
			<p>1752.56KM</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Cinema'
	}
</script>

<style scoped lang="scss">
	#content div > p,h1{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	#content {
		padding: 1.125rem;
		display: flex;
		flex-direction: row;
	}
	
	#content div:nth-child(1){
		width: 80%;
		h1
		{
			color: black;
			font-size: 1.35rem;
			span
			{
				font-size: 1.5rem;
				color: hotpink;
			}
		}
		p span
		{
			margin: 0.1625rem;
			border-radius: 0.225rem;
			border: 0.0625rem solid orangered;
		}
				
	}
	
	
	
	#content div:nth-child(2){
		text-align: center;
		p
		{
			position: relative;
			top: 28%;
		}
	}
</style>
