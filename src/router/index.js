import { createRouter, createWebHistory } from 'vue-router'

import LandAdmin from '@/views/Dashboard/LandAdmin.vue'
// login route
import LoginLand from '@/views/Authentication/LoginLand.vue'
import AdminChangePassw from '../views/Authentication/AdminChangePassw.vue'
import LandChangePassw from '../views/Authentication/LandChangePassw.vue'
import createland from '../views/Authentication/CreateLandCode.vue'
import OPChangePassw from '../views/Authentication/OPChangePassw.vue'
// tourism management
import TourismItem from '../views/Tourism/TourismItem.vue'
import TourismRegistor from '../views/Tourism/TourismRegistor.vue'
import TourismRegistorMap from '../views/Tourism/GetMap.vue'
// MyInfo
import MyInfo from '../views/MyInfo/MyInfo.vue'
import EditMyInfo from '../views/MyInfo/EditInfo.vue'
import MyLand from '../views/MyLand/MyLand.vue'
import EditMyland from '../views/MyLand/EditLand.vue'
//operation
import OperationList from '../views/Operation/OperationList.vue'
import ManageOperation from '../views/Operation/ManageOp.vue'
//admin route
import AdminList from '../views/AdminManage/AdminList.vue'
import AdminRegister from '../views/AdminManage/AdminRegister.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'LandDashboard',
    component: LandAdmin,
    meta: {
      title: 'Landmin Dashboard'
    }
  },
  {
    path: '/',
    name: 'Login',
    component: LoginLand,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/admin/change/password',
    name: 'admin change Passe',
    component: AdminChangePassw,
    meta: {
      title: 'admin change password'
    }
  },
  {
    path: '/land/change/password',
    name: 'changePasse',
    component: LandChangePassw,
    meta: {
      title: 'change password'
    }
  },
  {
    path: '/create/land',
    name: 'createland',
    component: createland,
    meta: {
      title: 'create land'
    }
  },
  {
    path: '/op/change/password',
    name: 'OPchangePasse',
    component: OPChangePassw,
    meta: {
      title: 'op change password'
    }
  },

  // Tourism Management
  {
    path: '/tourism/item',
    name: 'TourismItem',
    component: TourismItem,
    meta: {
      title: 'TourismItem'
    }
  },
  {
    path: '/tourism/registor',
    name: 'TourismRegistor',
    component: TourismRegistor,
    meta: {
      title: 'TourismRegistor'
    }
  },
  {
    path: '/tourism/registor/map',
    name: 'TourismRegistorMap',
    component: TourismRegistorMap,
    meta: {
      title: 'TourismRegistorMap'
    }
  },

  // My information
  {
    path: '/myinfo',
    name: 'myinfo',
    component: MyInfo,
    meta: {
      title: 'myinfo'
    }
  },
  {
    path: '/edit/myinfo',
    name: 'Editmyinfo',
    component: EditMyInfo,
    meta: {
      title: 'EditMyinfo'
    }
  },
  {
    path: '/myland',
    name: 'myland',
    component: MyLand,
    meta: {
      title: 'myland'
    }
  },
  {
    path: '/edit/myland',
    name: 'EditMyland',
    component: EditMyland,
    meta: {
      title: 'EditMyland'
    }
  },
  // Operation management
  {
    path: '/operation/list',
    name: 'OperationList',
    component: OperationList,
    meta: {
      title: 'OperationList'
    }
  },
  {
    path: '/manage/operation',
    name: 'ManageOperation',
    component: ManageOperation,
    meta: {
      title: 'ManageOperation'
    }
  },
  // admin
  {
    path: '/admin/list',
    name: 'AdminList',
    component: AdminList,
    meta: {
      title: 'AdminList'
    }
  },
  {
    path: '/admin/registor',
    name: 'AdminRegister',
    component: AdminRegister,
    meta: {
      title: 'AdminRegister'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})

export default router
