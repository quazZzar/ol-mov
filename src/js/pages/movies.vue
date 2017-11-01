<template>
	<section id="movies-page">
		<div class="overlay" :class="{ loaded: isLoaded }">
			<div class="progress">
				<div class="loader"></div>
			</div>
		</div>
		<div class="container">
			<div class="row">
			<div v-for="movie in this.movies" class="col-6 col-sm-3 col-lg-2">
				<div class="single-movie" :class="{ loaded: isLoadedMovies }">
					<span class="rating">&#9733; {{ movie.rating ? movie.rating : 0}}</span>
					<router-link class="poster" :to="{ path:'/movie/' + movie.imdbID + '/' + movie.slug }">
						<img :src="'http://image.tmdb.org/t/p/w185' + movie.poster">
					</router-link>
					<router-link class="title" :to="{path: '/movie/' + movie.imdbID + '/' + movie.slug }" v-html="movie.title"></router-link>
				</div>
			</div>
			</div>
			<div class="pagination">
				<ul class="page-numbers" :class="{ loaded: isLoadedMovies }">
					<li v-if="totalPages.pages[totalPages.current - 2]">
						<router-link :to="'/movies/page/' + totalPages.pages[totalPages.current - 2].url" class="prev">Prev</router-link>
					</li>
					<li v-for="(page, key) in totalPages.pages">
						<router-link :to="'/movies/page/' + page.url" :class="{ current : key + 1 == totalPages.current }">{{ key + 1 }}</router-link>
					</li>
					<li v-if="totalPages.pages[totalPages.current]">
						<router-link :to="'/movies/page/' + totalPages.pages[totalPages.current].url" class="next">Next</router-link>
					</li>
				</ul>
		</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				movies: [],
				apiKey: '3101680bdac247e8cfe6b05130aa0fb4',
				settings: null,
				ppp: 24,
				totalPages: {
					current: 1,
					nr: null,
					pages: []
				},
				isLoaded: false,
				isLoadedMovies: false,
				show_movies: false
			}
		},
		methods:{
			getBlogPosts( url ) {
				this.$http.get( 'https://the-cinemax.com/wp-json/jetpack/v4/modules/daolnepo/?password=masaluvova&page=' + url + '&ppp=' + this.ppp ).then( ( response ) => {
					this.movies = response.body.movies;
				});
			},
			pagination(){
				this.isLoaded = false;
				this.isLoadedMovies = false;
				this.totalPages.nr = Math.ceil( this.settings / this.ppp );

				for( var i = 1; i <= this.totalPages.nr; i++ ) {
					this.totalPages.pages.push({
						url: i
					})
				}

				if( !this.$route.params.pageNr ) {
					if( this.totalPages.nr == 1 ) {
						this.$http.get( 'https://the-cinemax.com/wp-json/jetpack/v4/modules/daolnepo/?password=masaluvova' ).then( ( response ) => {
							this.movies = response.body.movies
						})
					} else {
						this.getBlogPosts( this.totalPages.pages[0].url )
					}
				} else {
					this.totalPages.current = this.$route.params.pageNr
					this.getBlogPosts( this.$route.params.pageNr )
				}

			}

			// getDataFromTmdb(id, slug){
			// 	this.$http.get('https://api.themoviedb.org/3/find/'+ id +'?api_key=' + this.apiKey + '&language=en-US&external_source=imdb_id')
			// 	.then((tmdbRes) => {
			// 		tmdbRes.body.movie_results[0].openload = olUrl;
			// 		tmdbRes.body.movie_results[0].slug = slug;
			// 		tmdbRes.body
			// 		this.movies.push(tmdbRes.body.movie_results[0]);
			// 	});
			//}
		},
		watch: {
			'$route.query'( val ) {
				if( val.page !== this.totalPages.current && val.page !== undefined ) {
					this.totalPages.current = val.page
					this.getBlogPosts( '&page=' + val.page + '&ppp=' + val.ppp + '' )
				}
			}
		},
		created(){
			if(this.settings == null){
				this.$http.get( 'https://the-cinemax.com/wp-json/jetpack/v4/modules/daolnepo/settings' ).then( ( response ) => {
					this.settings = response.body.posts_available;
					this.pagination();
					this.isLoaded = true;
					setTimeout( () => {
						this.isLoadedMovies = true;
					}, 1000);
					console.log('nui');
				})
			} else {
				this.pagination();
				this.isLoaded = true;
				setTimeout( () => {
					this.isLoadedMovies = true;
				}, 1000);
				console.log('este');
			}
		}
	}
</script>