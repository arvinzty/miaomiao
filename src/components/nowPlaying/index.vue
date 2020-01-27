<template>
	<div id="one">
		<div class="content">
			<div>
				<img src="/test.png" />
			</div>
			<div>
				<h1>误杀</h1>
				<p>观众评&nbsp;<span>8.9</span></p>
				<p>主演：婕拉个阿萨德撒多sad阿萨德阿萨德撒大神大神的阿萨德</p>
				<p>今天3家电影院放映7场</p>
			</div>
			<div>
				<button>购票</button>
			</div>
		</div>		
	</div>	
</template>

<script>
	export default{
		name: 'NowPlaying'
	}
</script>

<style scoped lang="scss">
	.content div:nth-child(1){
		width: 20%;
	}
	.content div:nth-child(2){
		width: 45%;
		padding: 0.515rem 0.625rem 0.625rem 0.8825rem;
		p
		{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		h1
		{
			font-size: 1.5rem;
		}
		span{
			font-size: 1.125rem;
			color: orange;
		}
	}
	.content div:nth-child(3){
		width: 20%;
		margin: auto;
		position: relative;
		right: 0;
		text-align: center;
		button
		{
			background-color: #ca3b56;
			color: white;
			padding: 0.425rem;
			border-radius: 0.325rem;
			
		}
	}
	.content{
		display: flex;
		flex-direction: row;
		// border-bottom: 0.0625rem gray solid;
		&:after{
			content: '';
			position: absolute;
			bottom: 0;
			left: 5%;
			right: auto;
			height: 0.1rem;
			width: 90%;
			background-color: gray;
		}
	}
	.content div img{
		width: 4.5rem;
		height: 5.9375rem;
		padding: 0.625rem 0.625rem 0.625rem 0.8825rem;
	}
</style>
