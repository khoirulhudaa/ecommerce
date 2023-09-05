import React, { lazy } from "react";
const Homepage = lazy(() => import('../pages/homepage'))
const Signin = lazy(() => import('../pages/signin'))
const Signup = lazy(() => import('../pages/signup'))
const ListProduct = lazy(() => import('../pages/listProduct'))
const DetailProduct = lazy(() => import('../pages/detailProduct'))
const MyChart = lazy(() => import('../pages/myCart'))
const Checkout = lazy(() => import('../pages/checkout'))
const Maintanence = lazy(() => import('../pages/maintanence'))
const ProfileUser = lazy(() => import('../pages/profileUser'))
const ShoppingHistory = lazy(() => import('../pages/shoppingHistory'))
const ProfileShop = lazy(() => import('../pages/profileShop'))
const SuccessPayment = lazy(() => import('../pages/successPayment'))
const PendingPayment = lazy(() => import('../pages/pendingPayment'))
const NotFound = lazy(() => import('../pages/notFound'))

type routerProps = {
    path: string,
    exact: boolean,
    component: React.FC<{}>,
}

const Routers:routerProps[] = [
    {
        path: '/',
        exact: true,
        component: Homepage
    },
    {
        path: '/signin',
        exact: false,
        component: Signin
    },
    {
        path: '/signup',
        exact: false,
        component: Signup
    },
    {
        path: '/list-product',
        exact: false,
        component: ListProduct
    },
    {
        path: '/detail-product',
        exact: false,
        component: DetailProduct
    },
    {
        path: '/my-cart',
        exact: false,
        component: MyChart
    },
    {
        path: '/my-cart/checkout',
        exact: false,
        component: Checkout
    },
    {
        path: '/maintanence',
        exact: false,
        component: Maintanence
    },
    {
        path: '/profileUser',
        exact: false,
        component: ProfileUser
    },
    {
        path: '/buy/history',
        exact: false,
        component: ShoppingHistory
    },
    {
        path: '/profileShop',
        exact: false,
        component: ProfileShop
    },
    {
        path: '/successPayment',
        exact: false,
        component: SuccessPayment
    },
    {
        path: '/pendingPayment',
        exact: false,
        component: PendingPayment
    },
    {
        path: '/404',
        exact: false,
        component: NotFound
    },
]

export default Routers