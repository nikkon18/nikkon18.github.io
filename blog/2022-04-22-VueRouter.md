---
slug:  VueRouter
title: VueRouter
authors:
  name: Nikki
  title: a coder
  # url: https://github.com/wgao19
  image_url: https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4
tags: [Vue]
---
每有一个路由的嵌套，就要有一个router-view的嵌套

#### 路由守卫

路由导航过程中有若干个生命周期钩子，可以在这里实现逻辑控制

- 全局守卫，router.js

  ```js
  //路由配置
  {
  	path:"/about",
  	name:"about",
  	meta:{ auth:true },//需要认证
  	component:() => import("")
  }
  
  //守卫
  router.beforeEach((to,from,next) => {
  	//需要认证且没有登录
  		if(to.meta.auth&& localToken==null){
  			if(登录成功){
  			//存一个token
  			localToken = "21312"
  			next()
  			}else{
  				next("/")
  			}
  		}else{
  			next();//不需认证
  		} 
  })
  ```

- 路由独享守卫

  ```
  //路由配置里
  beforEnter(to,from,next) {
  //....
  }
  ```

- 组件里的的守卫

  ```
  export default {
  	beforeRouteEnter(to,from,next) {}
  	beforeRouteUpdate(to,from,next) {}
  }
  ```

### vue-router拓展

#### 动态路由

利用＄router.addRoutes()可以实现动态路由添加，常用于用户权限控制

```js
//router.js
//返回数据可能是这样的
[{
	path:"/",
    name:"home",
    component:"Home"
}]
//异步获取路由,对应路由信息由后台传过来
api.getRoutes().then(routes => {
    const routeConfig = routes.map(route => mapComponent(route));
    router.addRoutes(routeConfig);
})

//映射关系
const compMap = {
    'Home':() => import("./view/Home.vue")
}
//递归替换
function mapComponent(route) {
    route.component = compMap[route.component];
    if(route.children) {
        route.children = route.children.map(child => mapComponent(child))
    }
    return route
}
```

#### 面包屑

利用$route.matched可得到路由匹配数组，按顺序解析可得路由层级关系

```vue
//Brandcrumb.vue
watch:{
	$route: {
			handler(route) {
		//[{name:'home',path:'/'},{name:'list',path:'/list'}]
		console.log(this.$route.matched)
		//['home','list']
		this.crumbData = this.$route.matched.map(m => m.name)
	},
	immediate:true
	}
}
```

