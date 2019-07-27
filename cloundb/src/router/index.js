import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const router = new Router({ //存储路由实例
  routes: [
    {
      path: '/',
      name: 'layout',
      //因为是嵌套路由实现tab-bar 所以变成这样
      // 默认进入首页 redirect
      redirect:'index',
      component:() => import('@/views/layout'),
      //写在children下的页面有tab-bar
      children:[
        {
          path:'index',
          name:'index',
          meta:{
            title:'首页'
          },
          //异步组件
          component: () => import('@/views/index')
        },
        {
          //个人中心页面
          path:'personal',
          name:'personal',
          meta:{
            title:'个人中心'
          },
          component:() => import('@/views/personal'),
        },

        //学习中心
        {
          path:'study',
          name:'study',
          meta:{
            title:'学习中心'
          },
          component:() => import('@/views/study'),
        },
      ]
    },
    {
      path:'layout2',
      name:'headers-layout',
      component:() => import('@/views/headers-layout'),
      children:[
        {
          path:'/details/:id',
          name:'details',
          // 写错了 component:() => import('@/views/details'),
          component:() => import('@/views/details'),
          meta:{
            title:'书籍详情'
          }
        },
        {
          path:'/titles/:id',
          name:'titles',
          meta:{
            title:'目录'
          },
          component:() =>import('@/views/titles')
        },
        {
          path:'/article/:id',
          name:'article',
          meta:{
            title:'文章详情'
          },
          component:() => import('@/views/article')
        },
        {
          path:'/changemsg',
          name:'changemsg',
          meta:{
            title:'修改个人信息'
          },
          component:() => import('@/views/changemsg')
        },
        {
          path:'/changeName',
          name:'changeName',
          meta:{
            title:'修改昵称'
          },
          component:() => import('@/views/changeName')
        },
        {
          path:'/changePassword',
          name:'changePassword',
          meta:{
            title:'修改密码'
          },
          component:() => import('@/views/changePassword')
        },
      ]

    },
    // 嵌套路由 直接来就行 不用再去里面嵌套
    // {
    //   path: 'layout2',
    //   name: 'headers-layout',
    //   component: () => import('@/views/headers-layout'),
    //   children: [
    //     {
    //       path: '/details/:id',
    //       name: 'details',
    //       component: () => import('@/views/details'),
    //       meta: {
    //         title: '书籍详情'
    //       }
    //     },
    //     {
    //       path: '/titles/:id',
    //       name: 'titles',
    //       meta: {
    //         title: '目录'
    //       },
    //       component: () => import('@/views/titles')
    //     },
    //     {
    //       path: '/article/:id',
    //       name: 'article',
    //       meta: {
    //         title: '文章详情'
    //       },
    //       component: () => import('@/views/article')
    //     }
    //   ]
    // },

    //引入书籍详情页
    // {
    //   path:'/details/:id',
    //   //加入动态路由 ：id 为了点击轮播图也可以跳转
    //   name:'details',
    //   meta:{
    //     title:'书籍详情页'
    //   },
    //   component:() => import('@/views/details'),
    // },
    // {
    //   //引入动态路由 :id
    //   path:'/titles/:id',
    //   name:'titles',
    //   meta:{
    //     title:'目录'
    //   },
    // component:() => import('@/views/titles')
    // },
    // {
    //   // path:'m.yaojunrong.com/article/:id',
    //   path:'/article/:id',
    //   name:'article',
    //   meta:{
    //     title:'文章详情'
    //   },
    //   component:() => import('@/views/article')
    // },
    {
      // 这里的不在layout中的都是要加 /
      path:'/login',
      name:'login',
      meta:{
        title:'登录'
      },
      //  不啊哟加 s components:() => import('@/views/login')
      component:() => import('@/views/login')
    },
    {
      path:'/register',
      name:'register',
      meta:{
        title:'注册',
        // 写错地方
        // component:() => import('@/views/register')
      },
      component:() => import('@/views/register')
    },
    {
      path:'/test',
      name:'test',
      meta:{
        title:'测试专用页'
      },
      component:() => import('@/views/test.vue')
    }
  ]
});

//导出路由实例之前 定义钩子  箭头函数
router.beforeEach((to,from,next) => {
  let title = to.meta.title;
  document.title = title;
  next()
});


//上面存储路由实例  下面导出路由实例
export default router
