import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//定义一个方法
var loadTemplate = function(name) {
	return document.getElementById(name + '_tmpl').innerHTML
}
//定义组件
const Home = { template: '<img src="assets/img/home.png" alt="" width="100%">'}
const List = { template: loadTemplate('list')}
const Item = { template: loadTemplate('item')}



// 定义路由
const routes = [
	{ path: '/home',name:'home', component: Home},
	{ path: '/list',name:'list', component: List},
	{ path: '/item',name:'item', component: item},
]

const router = new VueRouter({
	routes
})
//任意其他地址跳转到home
{
	path:'*',
	redirect: '/home'
}
const app = new Vue({
	router
}).$mount('#app')