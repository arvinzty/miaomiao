<template>
	<div id="foot">
		<ul>
			<router-link to="/movie" tag="li" >
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-dianying"> </use> 
				</svg>  
				<span>movie</span>
			</router-link>
			<router-link to="/cinema" tag="li">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-dianyingyuan"></use>
				</svg>
				<span>cinema</span>
			</router-link>
			<router-link to="/mine" tag="li">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-wode"></use>
				</svg>
				<span>mine</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'TabBar'
	}
</script>

<style scoped lang="scss">
	@keyframes myAnimating{
		from{
			transform: scale(0.5);
		}
		to{
			transform: scale(1);
		}
	}
	
	div ul li.router-link-active{
		color: #ca3b56;
		animation: myAnimating 0.5s;
	}
	
	div ul{
		background-color: white;
		width: 100%;
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0;
		justify-content: space-around;
		box-shadow: 0px -0.5px 7px 0px black;
	}
	
	div ul li{
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	
	.icon {
	  width: 1em;
	  height: 1em;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	  font-size: 3rem;
	}
	
</style>
