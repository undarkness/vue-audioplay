import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//定义一个方法
var loadTemplate = function(name) {
	return document.getElementById(name + '_tmpl').innerHTML
}
//定义组件
const Home = { 
	template: '<img src="assets/img/home.png" alt="" width="100%">'

}

const List = {
 template: loadTemplate('list')
 date: function () {
 	// jsonp
 	this.$http.jsonp('http//localhost:api/music')
 		.then(res=>{
 			this.list = res.date
 		})
 	return{
 		list: []
 	}
 }
}
const Item = {
	template: loadTemplate('item')
	date: function () {
		return{
			item:songs[0]
		}
	}
	route :{
		date: function (transition) {
			var id = parseInt(transition.to.param.id)
			if (!id) {
				router.go('/home')
				return
			}
			return{
				item : songs.find(s=>s.id)
			}
		}
	}
}


// 定义路由
const router = new Router({
	routes:[
	{ path: '/home',name:'home', component: Home},
	{ path: '/list',name:'list', component: List},
	{ path: '/item',name:'item', component: item},
	//任意其他地址跳转到home
	{ path:'/',redirect: '/home'}
]
})

const app = new Vue({
	router
}).$mount('#app')

export default router