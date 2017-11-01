<template>
	<div class="main-header">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<router-link :to="{path: '/'}" class="logo">
						<img src="../../assets/logo.png" alt="logo"><span> The logo is here</span>
					</router-link>
				</div>
				<div class="col-md-8">
					<nav class="main-nav">
						<ul>
							<li><router-link :to="{path: '/'}">Home</router-link></li>
							<li><router-link :to="{path: '/movies'}">Movies</router-link></li>
							<li><router-link :to="{path: '/tvshows'}">TVShows</router-link></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'header',
		data(){
			return{

			}
		}
	}
</script>