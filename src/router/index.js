import Vue from 'vue'
import Router from 'vue-router'

//Layouts
import Master from '../layouts/Master'
import AdminMaster from '../layouts/Admin/Master'

import Logout from '../views/Admin/Logout.vue'
import Index from '../views/Index.vue'
import Hotels from '../views/Hotels.vue'
import HotelDetail from '../views/HotelDetail.vue'
import BookComplete from '../views/BookComplete.vue'
import About from '../views/About.vue'

import AdminDashboard from '../views/Admin/Index.vue'
import AdminLogin from '../views/Admin/Login.vue'
import AdminHotels from '../views/Admin/Hotels.vue'
import AdminBooks from '../views/Admin/Books.vue'
import AdminBookDetail from '../views/Admin/BookDetail.vue'

Vue.use(Router)

const routes = [

    //Frontend
    { path: '/', name: 'Index', component: Index, meta: { layout: Master } },
    { path: '/hotels', name: 'Hotels', component: Hotels, meta: { layout: Master } },
    { path: '/about-us', name: 'AboutUs', component: About, meta: { layout: Master } },
    { path: '/hotel/detail', name: 'HotelDetail', component: HotelDetail, meta: { layout: Master } },
    { path: '/hotel/detail/booking-done', name: 'BookComplete', component: BookComplete, meta: { layout: Master } },

    //Admin Routes
    { path: '/logout', name: 'Logout', component: Logout },
    { path: '/admin', name: 'AdminIndex', component: AdminDashboard, meta: { layout: AdminMaster, authRequired: true } },
    { path: '/admin/login', name: 'Login', component: AdminLogin, meta: { layout: AdminMaster, header: false, footer: false } },
    { path: '/admin/hotels', name: 'AdminHotels', component: AdminHotels, meta: { layout: AdminMaster, authRequired: true } },
    { path: '/admin/books', name: 'AdminBooks', component: AdminBooks, meta: { layout: AdminMaster, authRequired: true } },
    { path: '/admin/books/detail', name: 'AdminBookDetail', component: AdminBookDetail, meta: { layout: AdminMaster, authRequired: true } },

    //Errors
    { path: '*', component: require('@/views/404.vue').default }

]

const router = new Router({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {

    const loggedIn = localStorage.getItem('user');

    if (!loggedIn && to.meta.authRequired) {
        return next({ name: 'Login' });
    }

    next();

});

export default router