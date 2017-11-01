import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './js/App.vue'
import routes from './js/router/map.js'

// Install Router
Vue.use( VueRouter )
// Install Resource
Vue.use( VueResource )

const router = new VueRouter({
	routes: routes,
	linkExactActiveClass: 'active',
	mode: 'history'
})

router.beforeEach( ( to, from, next ) => {
	document.title = to.meta['title']
	next()
})

const app = new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
