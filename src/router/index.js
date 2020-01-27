import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema/index.js'
import mineRouter from './mine/mine.js'
import movieRouter from './movie/movie.js'

Vue.use(VueRouter)


const routes = [
	{
		path: '/',
		redirect: '/movie'
	},
	cinemaRouter,
	mineRouter,
	movieRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
