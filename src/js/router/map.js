import Home from '../pages/home.vue';
import SingleMovie from '../pages/singleMovie.vue';
import Movies from '../pages/movies.vue';
import TVShows from '../pages/tvshows.vue';

export default [
	{
		path: '/',
		name: 'home',
		meta: {
			title: 'Home - Seedfile.ro'
		},
		component: Home
	},
	{
		path: '/movies',
		name: 'movies',
		meta: {
			title: 'Movies - Seedfile.ro'
		},
		component: Movies
	},
	{
		path: '/movies/page/:pageNr',
		name: 'movies-pages',
		meta: {
			title: 'Movies',
		},
		component: Movies
	},
	{
		path: '/tvshows',
		name: 'tvshows',
		meta: {
			title: 'TVShows - Seedfile.ro'
		},
		component: TVShows
	},
	{
		path: '/movie/:imdbID/:movieTitle',
		name: 'singleMovie',
		meta: {
			title: 'single'
		},
		component: SingleMovie
	}
]