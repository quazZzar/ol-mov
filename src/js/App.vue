<template>
	<div id="app">
		<app-header></app-header>
		
		<div class="content-box">
			<keep-alive>
				<router-view :key="$route.path"></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import header from './components/header.vue'

export default {
	name: 'app',

	data() {
		return {
			
		}
	},

	components: {
		'app-header': header
	}
}
</script>



<style lang="sass">
	@import '../sass/screen.sass'
</style>
