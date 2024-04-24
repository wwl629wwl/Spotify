import { lazy } from "react";
import { Navigate } from "react-router";
import Home from "../views/Home";

const routes = [{
    path: '/',
    component: () => <Navigate to='/home' />
}, {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
        title: 'Spotify'
    }
}, {
    path: '/store',
    name: 'store',
    component: lazy(() => import('../views/Store.jsx')),
    meta: {
        title: 'Store'
    }
}, {
    path: '/search',
    name: 'search',
    component: lazy(() => import('../views/Search.jsx')),
    meta: {
        title: 'Search'
    }
}, {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../views/Login.jsx')),
    meta: {
        title: 'Login'
    }
}, {
    path: '*',
    name: '404',
    component: lazy(() => import('../views/404.jsx')),
    meth: {
        title: 'NotFound'
    }
}]

export default routes;