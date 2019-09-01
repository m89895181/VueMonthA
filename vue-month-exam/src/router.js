import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/home/index'

        },
        {
            path: '/home',
            name: '/home',
            redirect: '/home/index',
            component: () =>
                import ('./pages/Index.vue'),

            children: [{
                    path: '/home/index',
                    name: 'index',
                    component: () =>
                        import ('./views/Home.vue')
                },
                {
                    path: '/home/classification',
                    name: 'classification',
                    component: () =>
                        import ('./views/Classification.vue')
                },
                {
                    path: '/home/ranking',
                    name: 'ranking',
                    component: () =>
                        import ('./views/Ranking.vue')
                },
                {
                    path: '/home/bookshelf',
                    name: 'bookshelf',
                    component: () =>
                        import ('./views/Bookshelf.vue')
                },
            ]
        }, {
            path: '/detail',
            name: 'detail',
            component: () =>
                import ('./pages/detail.vue')
        }, {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./pages/login.vue')
        }, {
            path: '*',
            redirect: '/home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.

        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/home/bookshelf') {
        let token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        console.log(to, from, next)
        next()
    }
})

export default router