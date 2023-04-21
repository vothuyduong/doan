import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'

import AdminView from '@/views/AdminView.vue'
import AdminHomeView from '@/components/AdminHomeView.vue'

import IndexCategoryComponent from '@/components/category/IndexCategoryComponent.vue'
import AddCategoryComponent from '@/components/category/AddCategoryComponent.vue'
import EditCategoryComponent from '@/components/category/EditCategoryComponent.vue'

import IndexSizeComponent from '@/components/size/IndexSizeComponent.vue'
import AddSizeComponent from '@/components/size/AddSizeComponent.vue'
import EditSizeComponent from '@/components/size/EditSizeComponent.vue'

import IndexProductComponent from '@/components/product/IndexProductComponent.vue'
import AddProductComponent from '@/components/product/AddProductComponent.vue'
import EditProductComponent from '@/components/product/EditProductComponent.vue'

import IndexPriceComponent from '@/components/price/IndexPriceComponent.vue'
import AddPriceComponent from '@/components/price/AddPriceComponent.vue'
import EditPriceComponent from '@/components/price/EditPriceComponent.vue'

const routes = [
  {
    path: '/dangnhap',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dangki',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sanpham',
    name: 'product',
    component: ProductView
  },
  {
    path: '/chitiet-sanpham/:id',
    name: 'product-detail',
    component: ProductDetailView
  },
  {
    path: '/giohang',
    name: 'cart',
    component: CartView
  },

  {
    path: '/quanly',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '',
        component: AdminHomeView,
      },

      {
        path: 'danhmuc',
        name: 'IndexCategory',
        component: IndexCategoryComponent,
      },
      {
        path: 'danhmuc/them',
        name: 'AddCategory',
        component: AddCategoryComponent,
      },
      {
        path: 'danhmuc/sua/:id',
        name: 'EditCategory',
        component: EditCategoryComponent,
      },

      {
        path: 'kichthuoc',
        name: 'IndexSize',
        component: IndexSizeComponent,
      },
      {
        path: 'kichthuoc/them',
        name: 'AddSize',
        component: AddSizeComponent,
      },
      {
        path: 'kichthuoc/:id',
        name: 'EditSize',
        component: EditSizeComponent,
      },

      {
        path: 'sanpham',
        name: 'IndexProduct',
        component: IndexProductComponent,
      },
      {
        path: 'sanpham/them',
        name: 'AddProduct',
        component: AddProductComponent,
      },
      {
        path: 'sanpham/sua/:id',
        name: 'EditProduct',
        component: EditProductComponent,
      },

      {
        path: 'gia',
        name: 'IndexPrice',
        component: IndexPriceComponent,
      },
      {
        path: 'gia/them',
        name: 'AddPrice',
        component: AddPriceComponent,
      },
      {
        path: 'gia/sua',
        name: 'EditPrice',
        component: EditPriceComponent,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
