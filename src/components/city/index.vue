<template>
	<div id="content">
		<div>
			<p>热门城市</p>
			<ul>
				<li>北京</li>
				<li>上海</li>
				<li>广州</li>
				<li>天津</li>
				<li>成都	</li>
				<li>河南</li>
				<li>厦门</li>
				<li>北京</li>
				<li>上海</li>
				<li>广州</li>
				<li>天津</li>
				<li>成都	</li>
				<li>河南</li>
				<li>厦门</li>
			</ul>
		</div>
		<div>
			<p>
				A
			</p>
			<ul>
				<li>阿巴斯丁1</li>
				<li>阿巴斯丁2</li>
				<li>阿巴斯丁3</li>
				<li>阿巴斯丁4</li>
				<li>阿巴斯丁5</li>
				<li>阿巴斯丁6</li>
				<li>阿巴斯丁7</li>
				<li>阿巴斯丁1</li>
				<li>阿巴斯丁2</li>
				<li>阿巴斯丁3</li>
				<li>阿巴斯丁4</li>
				<li>阿巴斯丁5</li>
				<li>阿巴斯丁6</li>
				<li>阿巴斯丁7</li>
			</ul>
		</div>
		<div>
			<p>
				B
			</p>
			<ul>
				<li>巴萨卡1</li>
				<li>巴萨卡2</li>
				<li>巴萨卡3</li>
				<li>巴萨卡4</li>
				<li>巴萨卡5</li>
				<li>巴萨卡6</li>
				<li>巴萨卡7</li>
				<li>巴萨卡1</li>
				<li>巴萨卡2</li>
				<li>巴萨卡3</li>
				<li>巴萨卡4</li>
				<li>巴萨卡5</li>
				<li>巴萨卡6</li>
				<li>巴萨卡7</li>
				<li>巴萨卡1</li>
				<li>巴萨卡2</li>
				<li>巴萨卡3</li>
				<li>巴萨卡4</li>
				<li>巴萨卡5</li>
				<li>巴萨卡6</li>
				<li>巴萨卡7</li>
			</ul>
		</div>
		<div>
			<p>
				C
			</p>
			<ul>
				<li>擦得的1</li>
				<li>擦得的2</li>
				<li>擦得的3</li>
				<li>擦得的4</li>
				<li>擦得的5</li>
				<li>擦得的6</li>
				<li>擦得的7</li>
				<li>擦得的1</li>
				<li>擦得的2</li>
				<li>擦得的3</li>
				<li>擦得的4</li>
				<li>擦得的5</li>
				<li>擦得的6</li>
				<li>擦得的7</li>
				<li>擦得的1</li>
				<li>擦得的2</li>
				<li>擦得的3</li>
				<li>擦得的4</li>
				<li>擦得的5</li>
				<li>擦得的6</li>
				<li>擦得的7</li>
			</ul>
		</div>

	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	#bar ul{

	}
	#content div{
		background-color: rgba(255,165,0,0.3);
	}
	#content div:nth-child(1) ul{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		li
		{
			background-color: white;
			margin: 0.625rem;
			border-radius: 0.325rem;
			width: 6rem;
			text-align: center;
		}
	}
	li{
		padding: 0.625rem;
	}
	p {
		@extend li;
		background-color: rgba(225,225,225);
	}
</style>
