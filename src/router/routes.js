const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/PageLanding.vue')
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import('pages/PageArticle.vue')
            },
            {
                path: '/list',
                name: 'List',
                component: () => import('pages/PageList.vue')
            },
            {
                path: '/search',
                name: 'Search',
                component: () => import('pages/PageSearch.vue')
            },
            {
                path: '/test-html',
                name: 'TestHTML',
                component: () => import('pages/PageTestHTML.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
