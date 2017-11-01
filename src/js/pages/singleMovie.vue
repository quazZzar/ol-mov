<template>
	<section class="single-movie-page">
		<div class="container">
			<div class="movie-info">
				<div class="row">
					<div class="col-md-2">
						
					</div>				
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				id: null
			}
		},
		created(){
			this.id = this.$route.params.imdbID
		}
	}
</script>