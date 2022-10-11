import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'

import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

import ShopIndex from '@/components/Shops/Index'
import ShopCreate from '@/components/Shops/CreateShop'
import ShopEdit from '@/components/Shops/EditShop'
import ShopShow from '@/components/Shops/ShowShop'




import CommentIndex from '@/components/Comments/Index'

import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },

    
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },

    {
      path: '/shops',
      name: 'shops',
      component: ShopIndex
    },
    {
      path: '/shop/create',
      name: 'shop-create',
      component: ShopCreate
    },
    {
      path: '/shop/edit/:shopId',
      name: 'shop-edit',
      component: ShopEdit
    },
    {
      path: '/shop/:shopId',
      name: 'shop',
      component: ShopShow
    },
    
  ]
})
