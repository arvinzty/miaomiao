<template>
	<div>
		<ul>
			<li><input name="" type="text" placeholder="账号/用户名/Email"/></li>
			<li><input name="" type="text" placeholder="请输入您的密码"/></li>
			<li><button>登录</button></li>
		</ul>
		<ul id="f">
			<li>立即注册</li>
			<li>找回密码</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'Register'
	}
</script>

<style ccoped lang="scss">
	div{
		margin: 0.5rem 0rem 0rem 0rem;
	}
	div ul li input{
		padding: 0.1625rem;
		margin: 0.1625rem;
		line-height: 2.5rem;
		width: 100%;
		border-bottom: 0.0625rem solid gray;
	}
	div ul li:nth-child(3){
		margin: 1rem;
		line-height: 2.5rem;
		// margin: 1rem;
		button
		{
			width: 100%;
			color: wheat;
			background-color: orchid;
		}
	}
	 #f{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-between;
		 color: red;
	 }
</style>
