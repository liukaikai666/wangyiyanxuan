import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import home from '../page/home'
import shiwu from '../page/shiwu'
import fenlei from '../page/fenlei'
import cart from '../page/cart'
import mine from '../page/mine'

import tuijian from '../indexNav/tuijian'
import jujia from '../indexNav/jujia'
import canchu from '../indexNav/canchu'
import peijian from '../indexNav/peijian'
import fuzhuang from '../indexNav/fuzhuang'
import dianqi from '../indexNav/dianqi'
import xihu from '../indexNav/xihu'
import zahuo from '../indexNav/zahuo'
import yinshi from '../indexNav/yinshi'
import yingtong from '../indexNav/yingtong'
import zhiqu from '../indexNav/zhiqu'


import Ftuijian from '../fenlei/Ftuijian'
import Fdongji from '../fenlei/Fdongji'
import Fchuxing from '../fenlei/Fchuxing'
import Fjujia from '../fenlei/Fjujia'
import Fcanchu from '../fenlei/Fcanchu'
import Fpeijian from '../fenlei/Fpeijian'
import Ffuzhuang from '../fenlei/Ffuzhuang'
import Fdianqi from '../fenlei/Fdianqi'
import Fxihu from '../fenlei/Fxihu'
import Fzahuo from '../fenlei/Fzahuo'
import Fyinshi from '../fenlei/Fyinshi'
import Fyingtong from '../fenlei/Fyingtong'
import Fzhiqu from '../fenlei/Fzhiqu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          redirect: '/tuijian'
        },
        {
          path: '/tuijian',
          name: 'tuijian',
          component: tuijian
        },
        {
          path: '/jujia',
          name: 'jujia',
          component: jujia
        },
        {
          path: '/canchu',
          name: 'canchu',
          component: canchu
        },
        {
          path: '/peijian',
          name: 'peijian',
          component: peijian
        },
        {
          path: '/fuzhuang',
          name: 'fuzhuang',
          component: fuzhuang
        },
        {
          path: '/dianqi',
          name: 'dianqi',
          component: dianqi
        },
        {
          path: '/xihu',
          name: 'xihu',
          component: xihu
        },
        {
          path: '/zahuo',
          name: 'zahuo',
          component: zahuo
        },
        {
          path: '/yinshi',
          name: 'yinshi',
          component: yinshi
        },
        {
          path: '/yingtong',
          name: 'yingtong',
          component: yingtong
        },
        {
          path: '/zhiqu',
          name: 'zhiqu',
          component: zhiqu
        }
      ]
    },
    {
      path: '/shiwu',
      name: 'shiwu',
      component: shiwu
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei,
      children: [
        {
          path: '/',
          redirect: '/Fjujia'
        },
        {
          path: '/Ftuijian',
          name: 'Ftuijian',
          component: Ftuijian
        },
        {
          path: '/Fdongji',
          name: 'Fdongji',
          component: Fdongji
        },
        {
          path: '/Fchuxing',
          name: 'Fchuxing',
          component: Fchuxing
        },
        {
          path: '/Fjujia',
          name: 'Fjujia',
          component: Fjujia
        },
        {
          path: '/Fcanchu',
          name: 'Fcanchu',
          component: Fcanchu
        },
        {
          path: '/Fpeijian',
          name: 'Fpeijian',
          component: Fpeijian
        },
        {
          path: '/Ffuzhuang',
          name: 'Ffuzhuang',
          component: Ffuzhuang
        },
        {
          path: '/Fdianqi',
          name: 'Fdianqi',
          component: Fdianqi
        },
        {
          path: '/Fxihu',
          name: 'Fxihu',
          component: Fxihu
        },
        {
          path: '/Fzahuo',
          name: 'Fzahuo',
          component: Fzahuo
        },
        {
          path: '/Fyinshi',
          name: 'Fyinshi',
          component: Fyinshi
        },
        {
          path: '/Fyingtong',
          name: 'Fyingtong',
          component: Fyingtong
        },
        {
          path: '/Fzhiqu',
          name: 'Fzhiqu',
          component: Fzhiqu
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
